import { Brand } from '../types';

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
