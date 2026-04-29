import React from 'react';
import FormArea from './FormArea';
import SalesContentArea from './SalesContentArea';
import FAQArea from './FAQArea';

type Props = {
  onSuccess?: (waLink: string) => void;
};

export default function FormStep({ onSuccess }: Props) {
  return (
    <div className="space-y-6">
      <FormArea onSuccess={onSuccess} />
      <SalesContentArea />
      <FAQArea />
    </div>
  );
}
