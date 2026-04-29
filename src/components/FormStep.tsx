import React from 'react';
import FormArea from './form/FormArea';
import SalesContentArea from './form/SalesContentArea';
import FAQArea from './form/FAQArea';

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
