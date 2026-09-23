import { apiPost } from "./client";

export interface AuthUser {
  _id: string;
  name: string;
  email: string;
  role: string;
  points?: number;
  badges?: unknown[];
}

export interface AuthResponse {
  user: AuthUser;
  token: string;
}

export function login(email: string, password: string): Promise<AuthResponse> {
  return apiPost<AuthResponse>("/api/auth/login", { email, password });
}

export function register(input: {
  name: string;
  email: string;
  password: string;
  role?: string;
}): Promise<AuthResponse> {
  return apiPost<AuthResponse>("/api/auth/register", input);
}