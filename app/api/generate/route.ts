// 1. Cap maximum server execution duration on Vercel
export const maxDuration = 30;

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { prompt } = body;

    // 2. Input Cap: Guard against long payloads to protect API credits
    if (!prompt || typeof prompt !== 'string' || prompt.length > 1000) {
      return new Response(
        JSON.stringify({ error: 'Input text exceeds the maximum limit of 1000 characters.' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Rest of your route logic here...
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), { status: 500 });
  }
}