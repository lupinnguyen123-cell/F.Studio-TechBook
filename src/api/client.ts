import { Brand, MatchResponse } from '../types';

export async function analyzeError(brandId: Brand, errorDescription: string): Promise<string> {
  const res = await fetch('/api/analyze', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ brandId, errorDescription }),
  });

  const data = await res.json().catch(() => ({}));

  if (!res.ok) {
    throw new Error(data?.error || 'Đã có lỗi xảy ra trong quá trình phân tích. Vui lòng thử lại sau.');
  }

  return data.result as string;
}

export async function getHealth(): Promise<{ status: string; aiConfigured: boolean }> {
  const res = await fetch('/api/health');
  return res.json();
}

/** Giữ lại mã HTTP để client phân biệt 429 (hết lượt AI) với các lỗi khác. */
export class ApiError extends Error {
  status: number;
  constructor(message: string, status: number) {
    super(message);
    this.status = status;
  }
}

export async function matchLibrary(
  brandId: Brand,
  errorDescription: string,
  signal?: AbortSignal
): Promise<MatchResponse> {
  const res = await fetch('/api/match', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ brandId, errorDescription }),
    signal,
  });

  const data = await res.json().catch(() => ({}));

  if (!res.ok) {
    throw new ApiError(data?.error || 'Đã có lỗi xảy ra trong quá trình phân tích. Vui lòng thử lại sau.', res.status);
  }

  return data as MatchResponse;
}
