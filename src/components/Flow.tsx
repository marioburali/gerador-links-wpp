'use client';
import React, { useState } from 'react';
import Header from './Header';
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
        <Header />
        {!waLink ? (
          <FormStep key={formKey} onSuccess={handleSuccess} />
        ) : (
          <ResultStep waLink={waLink} onNew={handleNew} />
        )}
      </div>
    </div>
  );
}
