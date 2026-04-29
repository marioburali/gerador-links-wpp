import React from 'react';
import FormArea from './form/FormArea';
import SalesContentArea from './form/SalesContentArea';
import MessageGuide from './form/MessageGuide';
import MessageExamples from './form/MessageExamples';
import FAQArea from './form/FAQArea';

type Props = {
  onSuccess?: (waLink: string) => void;
};

export default function FormStep({ onSuccess }: Props) {
  return (
    <div className="space-y-6">
      <FormArea onSuccess={onSuccess} />
      <SalesContentArea />
      <MessageGuide />
      <MessageExamples />
      <FAQArea />
    </div>
  );
}
