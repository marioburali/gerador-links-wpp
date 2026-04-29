"use client";
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
    <div className="space-y-4">
      <p className="text-sm text-slate-700">Link gerado:</p>
      <div className="flex flex-col gap-2">
        <pre className="break-words bg-slate-50 border rounded-md p-3 text-sm">
          {waLink}
        </pre>

        <div className="flex items-center gap-2">
          <Button onClick={handleCopy}>
            {copied ? 'Copiado' : 'Copiar link'}
          </Button>
          <Button onClick={handleOpen} variant="ghost">
            Abrir no WhatsApp
          </Button>
          <Button onClick={handleNew} variant="ghost">
            Gerar novo
          </Button>
        </div>

        {error ? (
          <p role="alert" className="text-sm text-red-600">
            {error}
          </p>
        ) : null}
      </div>
    </div>
  );
}
