export const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL ?? "https://e-learning.cheat.casa";

export class ApiError extends Error {
  readonly status: number;

  constructor(message: string, status: number) {
    super(message);
    this.name = "ApiError";
    this.status = status;
  }
}

export async function apiGet<T>(path: string): Promise<T> {
  const response = await fetch(`${API_BASE_URL}${path}`, {
    headers: { Accept: "application/json" },
  });

  if (!response.ok) {
    throw new ApiError(
      response.statusText || `Request failed with status ${response.status}`,
      response.status,
    );
  }

  return (await response.json()) as T;
}