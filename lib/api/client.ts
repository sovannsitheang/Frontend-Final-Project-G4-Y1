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
  let response: Response;
  try {
    response = await fetch(`${API_BASE_URL}${path}`, {
      headers: { Accept: "application/json" },
      signal: AbortSignal.timeout(8000),
    });
  } catch (error) {
    if (error instanceof Error && error.name === "TimeoutError") {
      throw new ApiError("Request timed out", 408);
    }
    throw new ApiError(
      "Network error: the server could not be reached",
      0,
    );
  }

  if (!response.ok) {
    throw new ApiError(
      response.statusText || `Request failed with status ${response.status}`,
      response.status,
    );
  }

  return (await response.json()) as T;
}

export async function apiPost<T>(path: string, body: unknown): Promise<T> {
  let response: Response;
  try {
    response = await fetch(`${API_BASE_URL}${path}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(body),
      signal: AbortSignal.timeout(8000),
    });
  } catch (error) {
    if (error instanceof Error && error.name === "TimeoutError") {
      throw new ApiError("Request timed out", 408);
    }
    throw new ApiError(
      "Network error: the server could not be reached",
      0,
    );
  }

  if (!response.ok) {
    let message =
      response.statusText || `Request failed with status ${response.status}`;
    try {
      const data = (await response.json()) as { error?: string };
      if (data?.error) message = data.error;
    } catch {
      // keep the fallback message if the body is not JSON
    }
    throw new ApiError(message, response.status);
  }

  return (await response.json()) as T;
}