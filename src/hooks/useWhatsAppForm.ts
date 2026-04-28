import { useCallback, useState } from 'react';
import buildWhatsAppLink from '../lib/whatsapp';
import type { FormData } from '../types/form';

type SubmitResult = {
  ok: boolean;
  status?: number;
  error?: string;
};

export default function useWhatsAppForm() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [waLink, setWaLink] = useState<string | null>(null);

  const submit = useCallback(async (data: FormData): Promise<SubmitResult> => {
    setLoading(true);
    setError(null);
    setWaLink(null);

    try {
      const res = await fetch('/api/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const json = await res
        .json()
        .catch(() => ({ ok: false, error: 'Invalid JSON response' }));

      if (!res.ok || !json?.ok) {
        const msg = json?.error || `Request failed with status ${res.status}`;
        setError(msg);
        return { ok: false, status: res.status, error: msg };
      }

      // Gera link do WhatsApp ou erro se telefone inválido
      try {
        const link = buildWhatsAppLink(data.phoneRaw, data.message);
        setWaLink(link);
      } catch (e) {
        const msg = e instanceof Error ? e.message : String(e);
        setError(msg);
        return { ok: false, error: msg };
      }

      return { ok: true };
    } catch (err) {
      const msg = err instanceof Error ? err.message : String(err);
      setError(msg);
      return { ok: false, error: msg };
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    submit,
    loading,
    error,
    waLink,
    reset: () => {
      setError(null);
      setWaLink(null);
      setLoading(false);
    },
  } as const;
}
