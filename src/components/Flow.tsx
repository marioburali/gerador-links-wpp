'use client';
import { useState } from 'react';
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
    <div className="min-h-screen py-6 sm:py-8 md:py-10 lg:py-12 xl:py-14 2xl:py-16">
      {!waLink ? (
        <FormStep key={formKey} onSuccess={handleSuccess} />
      ) : (
        <ResultStep waLink={waLink} onNew={handleNew} />
      )}
    </div>
  );
}
