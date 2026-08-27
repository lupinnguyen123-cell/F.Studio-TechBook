import type { Config } from '@netlify/functions';

export default async (req: Request) => {
  const aiConfigured = !!Netlify.env.get('GEMINI_API_KEY');

  return new Response(
    JSON.stringify({ status: 'ok', time: new Date().toISOString(), aiConfigured }),
    { status: 200, headers: { 'Content-Type': 'application/json' } }
  );
};

export const config: Config = {
  path: '/api/health',
};
