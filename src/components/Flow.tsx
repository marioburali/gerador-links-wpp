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
    <div className="min-h-screen px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-5xl">
        <div className="mb-6">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#0066CC]">
            RD Station
          </p>
          <h1 className="mt-2 text-3xl font-black tracking-tight text-[#111111] sm:text-4xl">
            Gerador de Link para WhatsApp
          </h1>
        </div>

        <div className="rounded-2xl bg-white p-5 shadow-[0_18px_50px_rgba(27,42,59,0.12)] ring-1 ring-black/5 sm:p-8">
          {!waLink ? (
            <FormStep key={formKey} onSuccess={handleSuccess} />
          ) : (
            <ResultStep waLink={waLink} onNew={handleNew} />
          )}
        </div>
      </div>
    </div>
  );
}
