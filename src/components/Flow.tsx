'use client';
import React, { useState } from 'react';
import FormStep from './FormStep';
import ResultStep from './ResultStep';

export default function Flow() {
  const [waLink, setWaLink] = useState<string | null>(null);
  const [formKey, setFormKey] = useState(0);

  const handleSuccess = (link: string) => setWaLink(link);
  const handleNew = () => {
    setWaLink(null);
    setFormKey((k) => k + 1);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-zinc-50 p-6">
      <div className="w-full max-w-2xl bg-white rounded-lg shadow p-6">
        <div className="flex items-center gap-3 mb-4">
          <h1 className="text-2xl font-semibold">
            Gerador de link do WhatsApp
          </h1>
        </div>
        <p className="text-sm text-slate-600 mb-6">
          Preencha os dados abaixo para gerar o link.
        </p>

        {!waLink ? (
          <FormStep key={formKey} onSuccess={handleSuccess} />
        ) : (
          <ResultStep waLink={waLink} onNew={handleNew} />
        )}
      </div>
    </div>
  );
}
