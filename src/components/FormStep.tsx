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
      <div className="mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8">
        <FormArea onSuccess={onSuccess} />
      </div>
      <div className="mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8">
        <SalesContentArea />
      </div>
      <div className="mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8">
        <MessageGuide />
      </div>
      <MessageExamples />
      <div className="mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8">
        <FAQArea />
      </div>
    </div>
  );
}
