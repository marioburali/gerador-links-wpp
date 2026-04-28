import { useCallback, useState } from 'react';

export default function useClipboard() {
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const copy = useCallback(async (text: string) => {
    setError(null);
    try {
      if (
        typeof navigator !== 'undefined' &&
        navigator.clipboard &&
        navigator.clipboard.writeText
      ) {
        await navigator.clipboard.writeText(text);
      } else {
        const ta = document.createElement('textarea');
        ta.value = text;
        ta.style.position = 'fixed';
        ta.style.left = '-9999px';
        document.body.appendChild(ta);
        ta.select();
        document.execCommand('copy');
        document.body.removeChild(ta);
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
      return true;
    } catch (err) {
      setError(err instanceof Error ? err.message : String(err));
      setCopied(false);
      return false;
    }
  }, []);

  const reset = useCallback(() => {
    setCopied(false);
    setError(null);
  }, []);

  return { copy, copied, error, reset } as const;
}
