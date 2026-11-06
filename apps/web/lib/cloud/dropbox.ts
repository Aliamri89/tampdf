import { CloudCancelledError, DROPBOX_APP_KEY, safeFileName } from "@/lib/cloud/config";

/** Same-origin page that hands the OAuth result back to the opener (app/oauth/dropbox/route.ts). */
const REDIRECT_PATH = "/oauth/dropbox";
const MESSAGE_TYPE = "tampdf-dropbox";

function base64Url(bytes: Uint8Array): string {
  let binary = "";
  bytes.forEach((b) => {
    binary += String.fromCharCode(b);
  });
  return btoa(binary).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

function randomString(byteLength: number): string {
  return base64Url(crypto.getRandomValues(new Uint8Array(byteLength)));
}

let cached: { token: string; expiresAt: number } | null = null;

function waitForAuthCode(popup: Window, state: string): Promise<string> {
  return new Promise<string>((resolve, reject) => {
    let settled = false;
    const finish = (action: () => void) => {
      if (settled) return;
      settled = true;
      window.removeEventListener("message", onMessage);
      window.clearInterval(poll);
      action();
    };
    function onMessage(event: MessageEvent) {
      if (event.origin !== window.location.origin) return;
      const data = event.data as { type?: string; code?: string; state?: string; error?: string } | null;
      if (!data || data.type !== MESSAGE_TYPE || data.state !== state) return;
      finish(() => {
        try {
          popup.close();
        } catch {
          /* already closed */
        }
        if (data.code) resolve(data.code);
        else
          reject(
            data.error === "access_denied"
              ? new CloudCancelledError()
              : new Error(data.error ?? "Dropbox sign-in failed"),
          );
      });
    }
    window.addEventListener("message", onMessage);
    const poll = window.setInterval(() => {
      if (popup.closed) finish(() => reject(new CloudCancelledError()));
    }, 500);
  });
}

async function getAccessToken(): Promise<string> {
  if (cached && cached.expiresAt > Date.now() + 30_000) return cached.token;

  // Open the window right away (inside the click) and point it at Dropbox once
  // the PKCE challenge is ready, so popup blockers don't interfere.
  const popup = window.open("", "tampdf-dropbox", "popup,width=520,height=700");
  if (!popup) throw new Error("The Dropbox sign-in window was blocked");

  try {
    const verifier = randomString(48);
    const state = randomString(16);
    const challenge = base64Url(
      new Uint8Array(await crypto.subtle.digest("SHA-256", new TextEncoder().encode(verifier))),
    );
    const redirectUri = `${window.location.origin}${REDIRECT_PATH}`;
    const authUrl = new URL("https://www.dropbox.com/oauth2/authorize");
    authUrl.search = new URLSearchParams({
      client_id: DROPBOX_APP_KEY,
      response_type: "code",
      redirect_uri: redirectUri,
      state,
      code_challenge: challenge,
      code_challenge_method: "S256",
      token_access_type: "online",
      scope: "files.content.write",
    }).toString();
    popup.location.href = authUrl.toString();

    const code = await waitForAuthCode(popup, state);
    const response = await fetch("https://api.dropboxapi.com/oauth2/token", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        code,
        grant_type: "authorization_code",
        client_id: DROPBOX_APP_KEY,
        redirect_uri: redirectUri,
        code_verifier: verifier,
      }),
    });
    if (!response.ok) throw new Error(`Dropbox token request failed (${response.status})`);
    const json = (await response.json()) as { access_token?: string; expires_in?: number };
    if (!json.access_token) throw new Error("Dropbox did not return an access token");
    cached = { token: json.access_token, expiresAt: Date.now() + (json.expires_in ?? 14_400) * 1000 };
    return json.access_token;
  } catch (error) {
    try {
      popup.close();
    } catch {
      /* already closed */
    }
    throw error;
  }
}

/** HTTP header values must be ASCII, so non-ASCII characters in the JSON are \u-escaped. */
function asciiJson(value: unknown): string {
  return JSON.stringify(value).replace(
    /[\u007f-￿]/g,
    (c) => `\\u${c.charCodeAt(0).toString(16).padStart(4, "0")}`,
  );
}

/** Uploads `blob` to the app folder of the signed-in Dropbox account. */
export async function saveToDropbox(blob: Blob, filename: string): Promise<void> {
  const token = await getAccessToken();
  const response = await fetch("https://content.dropboxapi.com/2/files/upload", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/octet-stream",
      "Dropbox-API-Arg": asciiJson({
        path: `/${safeFileName(filename)}`,
        mode: "add",
        autorename: true,
        mute: false,
      }),
    },
    body: blob,
  });
  if (!response.ok) {
    if (response.status === 401) cached = null;
    throw new Error(`Dropbox upload failed (${response.status})`);
  }
}
