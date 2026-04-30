'use client';
import React from 'react';
import Button from './ui/Button';
import useClipboard from '../hooks/useClipboard';

type Props = {
  waLink: string;
  onNew?: () => void;
};

export default function ResultStep({ waLink, onNew }: Props) {
  const { copy, copied, error, reset } = useClipboard();

  const handleCopy = async () => {
    await copy(waLink);
  };

  const handleOpen = () => {
    // abrir em nova aba
    window.open(waLink, '_blank', 'noopener,noreferrer');
  };

  const handleNew = () => {
    reset();
    if (onNew) onNew();
  };

  return (
    <div className="space-y-5">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#0066CC]">
          Resultado
        </p>
        <h2 className="mt-2 text-2xl font-black tracking-tight text-[#111111]">
          Seu link está pronto
        </h2>
      </div>

      <div className="rounded-2xl border border-[#E1E5EA] bg-[#F4F6F8] p-4">
        <p className="mb-3 text-sm font-semibold text-[#111111]">Link URL</p>
        <pre className="overflow-x-auto rounded-2xl bg-white px-4 py-4 text-sm text-[#1D2733] shadow-[0_1px_2px_rgba(16,24,40,0.04)]">
          {waLink}
        </pre>
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <Button onClick={handleCopy}>{copied ? 'Copiado' : 'Copiar link'}</Button>
        <Button onClick={handleOpen} variant="ghost">
          Abrir no WhatsApp
        </Button>
        <button
          type="button"
          onClick={handleNew}
          className="inline-flex items-center justify-center rounded-full px-1 py-2 text-sm font-semibold text-[#0066CC] transition hover:underline"
        >
          Gerar outro link
        </button>
      </div>

      {error ? (
        <p role="alert" className="text-sm text-red-600">
          {error}
        </p>
      ) : null}
    </div>
  );
}
