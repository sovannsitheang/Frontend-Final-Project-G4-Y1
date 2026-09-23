import type { AuthUser } from "@/lib/api/auth";

const TOKEN_KEY = "g4-token";
const USER_KEY = "g4-user";
const ENROLLED_KEY = "g4-enrolled";

const listeners = new Set<() => void>();
let cachedUser: AuthUser | null | undefined;
let hydrated = false;

const enrolledListeners = new Set<() => void>();
let cachedEnrolled: Set<string> | undefined;
const EMPTY_ENROLLED: Set<string> = new Set();

function notify() {
  for (const listener of listeners) listener();
}

function readStoredUser(): AuthUser | null {
  try {
    const raw = localStorage.getItem(USER_KEY);
    return raw ? (JSON.parse(raw) as AuthUser) : null;
  } catch {
    return null;
  }
}

export function subscribeAuth(listener: () => void): () => void {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

export function getAuthUser(): AuthUser | null {
  if (typeof localStorage === "undefined" || !hydrated) return null;
  if (cachedUser === undefined) cachedUser = readStoredUser();
  return cachedUser;
}

export function setAuthHydrated(): void {
  if (hydrated) return;
  hydrated = true;
  cachedUser = undefined;
  cachedEnrolled = undefined;
  notify();
  notifyEnrolled();
}

export function getStoredToken(): string | null {
  try {
    return localStorage.getItem(TOKEN_KEY);
  } catch {
    return null;
  }
}

export function saveSession(user: AuthUser, token: string): void {
  localStorage.setItem(TOKEN_KEY, token);
  localStorage.setItem(USER_KEY, JSON.stringify(user));
  cachedUser = user;
  notify();
}

export function clearSession(): void {
  localStorage.removeItem(TOKEN_KEY);
  localStorage.removeItem(USER_KEY);
  cachedUser = null;
  notify();
}

function readEnrolled(): Set<string> {
  try {
    const raw = localStorage.getItem(ENROLLED_KEY);
    const arr = raw ? (JSON.parse(raw) as unknown) : [];
    return new Set(Array.isArray(arr) ? (arr as string[]) : []);
  } catch {
    return new Set();
  }
}

function notifyEnrolled() {
  for (const listener of enrolledListeners) listener();
}

export function subscribeEnrolled(listener: () => void): () => void {
  enrolledListeners.add(listener);
  return () => {
    enrolledListeners.delete(listener);
  };
}

export function getEnrolledSnapshot(): Set<string> {
  if (typeof localStorage === "undefined" || !hydrated) return EMPTY_ENROLLED;
  if (cachedEnrolled === undefined) cachedEnrolled = readEnrolled();
  return cachedEnrolled;
}

export function toggleEnrollment(courseId: string): boolean {
  const enrolled = readEnrolled();
  let nowEnrolled: boolean;
  if (enrolled.has(courseId)) {
    enrolled.delete(courseId);
    nowEnrolled = false;
  } else {
    enrolled.add(courseId);
    nowEnrolled = true;
  }
  localStorage.setItem(ENROLLED_KEY, JSON.stringify(Array.from(enrolled)));
  cachedEnrolled = enrolled;
  notifyEnrolled();
  return nowEnrolled;
}