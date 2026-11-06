import { CloudCancelledError, GOOGLE_CLIENT_ID, safeFileName } from "@/lib/cloud/config";

const GIS_SRC = "https://accounts.google.com/gsi/client";
const SCOPE = "https://www.googleapis.com/auth/drive.file";

interface TokenResponse {
  access_token?: string;
  expires_in?: number;
  error?: string;
}

interface TokenClient {
  requestAccessToken(overrides?: { prompt?: string }): void;
}

interface GoogleGlobal {
  accounts: {
    oauth2: {
      initTokenClient(config: {
        client_id: string;
        scope: string;
        callback: (response: TokenResponse) => void;
        error_callback?: (error: { type: string }) => void;
      }): TokenClient;
    };
  };
}

function googleGlobal(): GoogleGlobal | undefined {
  return (window as unknown as { google?: GoogleGlobal }).google;
}

let scriptPromise: Promise<void> | null = null;

/** Loads Google Identity Services once. Safe to call early so the sign-in popup opens instantly on click. */
export function loadGoogleIdentity(): Promise<void> {
  if (googleGlobal()?.accounts?.oauth2) return Promise.resolve();
  if (!scriptPromise) {
    scriptPromise = new Promise<void>((resolve, reject) => {
      const script = document.createElement("script");
      script.src = GIS_SRC;
      script.async = true;
      script.onload = () => resolve();
      script.onerror = () => {
        scriptPromise = null;
        script.remove();
        reject(new Error("Could not load Google sign-in"));
      };
      document.head.appendChild(script);
    });
  }
  return scriptPromise;
}

let cached: { token: string; expiresAt: number } | null = null;

async function getAccessToken(): Promise<string> {
  if (cached && cached.expiresAt > Date.now() + 30_000) return cached.token;
  await loadGoogleIdentity();
  const google = googleGlobal();
  if (!google) throw new Error("Google sign-in is unavailable");
  return new Promise<string>((resolve, reject) => {
    const client = google.accounts.oauth2.initTokenClient({
      client_id: GOOGLE_CLIENT_ID,
      scope: SCOPE,
      callback: (response) => {
        if (response.access_token) {
          cached = {
            token: response.access_token,
            expiresAt: Date.now() + (response.expires_in ?? 3600) * 1000,
          };
          resolve(response.access_token);
        } else {
          reject(
            response.error === "access_denied"
              ? new CloudCancelledError()
              : new Error(response.error ?? "Google sign-in failed"),
          );
        }
      },
      // Popup closed or blocked.
      error_callback: (error) =>
        reject(error.type === "popup_closed" ? new CloudCancelledError() : new Error(error.type)),
    });
    client.requestAccessToken();
  });
}

/** Uploads `blob` to the signed-in user's Drive (app-created files only, via the `drive.file` scope). */
export async function saveToGoogleDrive(blob: Blob, filename: string): Promise<void> {
  const token = await getAccessToken();
  const boundary = `tampdf${Math.random().toString(36).slice(2)}`;
  const type = blob.type || "application/octet-stream";
  const body = new Blob([
    `--${boundary}\r\nContent-Type: application/json; charset=UTF-8\r\n\r\n`,
    JSON.stringify({ name: safeFileName(filename), mimeType: type }),
    `\r\n--${boundary}\r\nContent-Type: ${type}\r\n\r\n`,
    blob,
    `\r\n--${boundary}--`,
  ]);
  const response = await fetch("https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": `multipart/related; boundary=${boundary}`,
    },
    body,
  });
  if (!response.ok) {
    if (response.status === 401) cached = null;
    throw new Error(`Google Drive upload failed (${response.status})`);
  }
}
