type ZapierResult = {
  ok: boolean;
  status: number;
  body?: any;
  error?: string;
};

export default async function sendToZapier(
  payload: unknown,
): Promise<ZapierResult> {
  const url = process.env.ZAPIER_WEBHOOK_URL;
  if (!url) {
    throw new Error('Submission service is not configured.');
  }

  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });

  const text = await res.text();
  let body: any = text;
  try {
    body = JSON.parse(text);
  } catch (e) {
    /* keep raw text */
  }

  if (!res.ok) {
    return {
      ok: false,
      status: res.status,
      body,
      error: body?.error || res.statusText,
    };
  }

  return { ok: true, status: res.status, body };
}
