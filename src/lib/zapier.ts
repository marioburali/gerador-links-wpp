type ZapierResult = {
  ok: boolean;
  status: number;
  body?: unknown;
  error?: string;
};

const getErrorMessage = (body: unknown, fallback: string) => {
  if (
    body &&
    typeof body === 'object' &&
    'error' in body &&
    typeof body.error === 'string'
  ) {
    return body.error;
  }

  return fallback;
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
  let body: unknown = text;
  try {
    body = JSON.parse(text);
  } catch {
    /* keep raw text */
  }

  if (!res.ok) {
    return {
      ok: false,
      status: res.status,
      body,
      error: getErrorMessage(body, res.statusText),
    };
  }

  return { ok: true, status: res.status, body };
}
