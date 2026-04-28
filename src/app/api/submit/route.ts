import { NextResponse } from 'next/server';
import sendToZapier from '../../../lib/zapier';

export async function POST(req: Request) {
  try {
    const payload = await req.json();

    const { name, phone, role, message } = payload ?? {};
    if (!name || !phone || !role || !message) {
      return NextResponse.json(
        { ok: false, error: 'Missing required fields' },
        { status: 400 },
      );
    }

    const result = await sendToZapier(payload);
    if (!result.ok) {
      return NextResponse.json(
        { ok: false, error: result.error || 'Failed to submit form' },
        { status: result.status || 502 },
      );
    }

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch {
    return NextResponse.json(
      { ok: false, error: 'Internal server error' },
      { status: 500 },
    );
  }
}
