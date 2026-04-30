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
    <div className="space-y-6 sm:space-y-8 md:space-y-10 lg:space-y-12">
      <div className="mx-auto w-full max-w-5xl px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-14">
        <FormArea onSuccess={onSuccess} />
      </div>
      <div className="mx-auto w-full max-w-5xl px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-14">
        <SalesContentArea />
      </div>
      <div className="mx-auto w-full max-w-5xl px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-14">
        <MessageGuide />
      </div>
      <MessageExamples />
      <div className="mx-auto w-full max-w-5xl px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-14">
        <FAQArea />
      </div>
    </div>
  );
}
