import { NextResponse } from 'next/server';
import sendToZapier from '../../../lib/zapier';
import { buildSubmissionPayload, formSchema } from '../../../types/form';

export async function POST(req: Request) {
  try {
    const payload = await req.json();

    const parsed = formSchema.safeParse(payload);
    if (!parsed.success) {
      return NextResponse.json(
        {
          ok: false,
          error: parsed.error.issues[0]?.message || 'Invalid form data',
        },
        { status: 400 },
      );
    }

    const result = await sendToZapier(buildSubmissionPayload(parsed.data));
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
