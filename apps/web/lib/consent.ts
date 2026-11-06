"use client";

import { useSyncExternalStore } from "react";
import {
  CONSENT_REQUIRED_COUNTRIES_SOURCE,
  CONSENT_REQUIRED_ZONES_SOURCE,
  CONSENT_STORAGE_KEY,
} from "@/lib/consent-region";

/**
 * Consent for analytics/tracking cookies (Google Analytics 4 and Microsoft
 * Clarity). The choice lives in this browser's localStorage only.
 *
 * Where consent is legally required — approximated from the browser's time
 * zone and language regions (see lib/consent-region.ts): Europe (EEA, UK,
 * Switzerland), the Atlantic/Arctic islands, EU overseas regions, or an
 * unknown time zone — nothing loads until the visitor
 * accepts. Elsewhere analytics run by default, and the footer's "Cookie
 * settings" lets anyone turn them off (withdraw consent) at any time.
 */
const STORAGE_KEY = CONSENT_STORAGE_KEY;
type Stored = "granted" | "denied" | null;

const REQUIRED_ZONES = new RegExp(CONSENT_REQUIRED_ZONES_SOURCE);
const REQUIRED_COUNTRIES = new RegExp(CONSENT_REQUIRED_COUNTRIES_SOURCE);

/** Region subtags of the browser's languages, upper-cased ("de-DE" → "DE"). */
function languageRegions(): string[] {
  const tags = navigator.languages?.length ? navigator.languages : [navigator.language];
  const regions: string[] = [];
  for (const tag of tags) {
    for (const part of String(tag).split(/[-_]/).slice(1)) {
      if (/^[A-Za-z]{2}$/.test(part)) regions.push(part.toUpperCase());
    }
  }
  return regions;
}

export function consentRequired(): boolean {
  try {
    const zone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    if (!zone || zone === "UTC" || zone === "Etc/UTC" || REQUIRED_ZONES.test(zone)) return true;
    return languageRegions().some((region) => REQUIRED_COUNTRIES.test(region));
  } catch {
    return true;
  }
}

function readStored(): Stored {
  try {
    const value = window.localStorage.getItem(STORAGE_KEY);
    return value === "granted" || value === "denied" ? value : null;
  } catch {
    return null;
  }
}

// ---- tiny external store (so every component re-renders on a change) ----
let settingsOpen = false;
const listeners = new Set<() => void>();
let version = 0;

function emit() {
  version += 1;
  listeners.forEach((listener) => listener());
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  const onStorage = (event: StorageEvent) => {
    if (event.key === STORAGE_KEY) emit();
  };
  window.addEventListener("storage", onStorage);
  return () => {
    listeners.delete(listener);
    window.removeEventListener("storage", onStorage);
  };
}

export interface ConsentView {
  /** False until the browser has hydrated (server render never loads trackers). */
  ready: boolean;
  /** Analytics scripts may run. */
  analyticsAllowed: boolean;
  /** The banner should be on screen. */
  bannerVisible: boolean;
  /** The visitor has made an explicit choice before. */
  decided: boolean;
  /** The banner was opened on purpose (footer "Cookie settings"), so it can be closed again. */
  fromSettings: boolean;
}

const SERVER_VIEW: ConsentView = {
  ready: false,
  analyticsAllowed: false,
  bannerVisible: false,
  decided: false,
  fromSettings: false,
};

let cachedKey = "";
let cachedView: ConsentView = SERVER_VIEW;

function getSnapshot(): ConsentView {
  const stored = readStored();
  const required = consentRequired();
  const key = `${stored}|${required}|${settingsOpen}|${version}`;
  if (key !== cachedKey) {
    cachedKey = key;
    cachedView = {
      ready: true,
      analyticsAllowed: stored === "granted" || (stored === null && !required),
      bannerVisible: settingsOpen || (required && stored === null),
      decided: stored !== null,
      fromSettings: settingsOpen,
    };
  }
  return cachedView;
}

export function useConsent(): ConsentView {
  return useSyncExternalStore(subscribe, getSnapshot, () => SERVER_VIEW);
}

/** Cookies set by the analytics providers, removed when consent is withdrawn. */
const TRACKING_COOKIE = /^(_ga|_gid|_gat|_gcl_|_clck|_clsk|CLID|ANONCHK|SM|MR|SRM_B)/;

function clearTrackingCookies() {
  const host = window.location.hostname;
  const parts = host.split(".");
  const domains = new Set<string>([host, `.${host}`]);
  for (let i = 1; i < parts.length - 1; i++) domains.add(`.${parts.slice(i).join(".")}`);
  document.cookie.split(";").forEach((cookie) => {
    const name = cookie.split("=")[0].trim();
    if (!TRACKING_COOKIE.test(name)) return;
    const expire = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`;
    document.cookie = expire;
    domains.forEach((domain) => {
      document.cookie = `${expire}; domain=${domain}`;
    });
  });
}

export function setConsent(granted: boolean) {
  const wasRunning = getSnapshot().analyticsAllowed;
  try {
    window.localStorage.setItem(STORAGE_KEY, granted ? "granted" : "denied");
  } catch {
    // Storage blocked: the choice only lasts for this page view.
  }
  settingsOpen = false;
  // Tell Google Consent Mode (defaults are set by ConsentModeDefaults) before
  // any tag loads or keeps running.
  const gtag = (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag;
  gtag?.("consent", "update", { analytics_storage: granted ? "granted" : "denied" });
  if (!granted && wasRunning) {
    // The scripts are already running in this page: remove their cookies and
    // reload so they are not loaded again.
    clearTrackingCookies();
    window.location.reload();
    return;
  }
  emit();
}

export function openConsentSettings() {
  settingsOpen = true;
  emit();
}

export function closeConsentSettings() {
  settingsOpen = false;
  emit();
}
