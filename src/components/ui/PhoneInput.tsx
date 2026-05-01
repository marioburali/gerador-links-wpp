import React, { forwardRef, InputHTMLAttributes, useId } from 'react';
import { IMaskInput } from 'react-imask';

type PhoneInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'value' | 'onChange'
> & {
  label?: string;
  error?: string | null;
  value?: string;
  onChange?: (value: string) => void;
};

const PhoneInput = forwardRef<HTMLInputElement, PhoneInputProps>(
  (
    { label, id, className = '', error, value = '', onChange, ...rest },
    ref,
  ) => {
    const autoId = useId();
    const inputId = id ?? autoId;
    const existingDesc = rest['aria-describedby'];
    const describedBy = error
      ? [existingDesc, `${inputId}-error`].filter(Boolean).join(' ')
      : existingDesc;

    return (
      <div className="flex flex-col gap-1">
        {label ? (
          <label
            htmlFor={inputId}
            className="text-base font-semibold text-[#111111]"
          >
            {label}
          </label>
        ) : null}
        <IMaskInput
          {...rest}
          inputRef={ref}
          id={inputId}
          mask="(00) [0] 0000-0000"
          unmask={true}
          value={value}
          inputMode="tel"
          type="tel"
          placeholder="(00) 0 0000-0000"
          aria-invalid={!!error}
          aria-describedby={describedBy}
          onAccept={(nextValue) => {
            onChange?.(String(nextValue));
          }}
          className={`w-full rounded-2xl border border-[#D6DBE1] bg-white px-4 py-3 text-base text-[#111111] shadow-[0_1px_2px_rgba(16,24,40,0.04)] outline-none transition focus:border-[#0066CC] focus:ring-2 focus:ring-[#0066CC]/15 ${error ? 'border-red-600 focus:border-red-600 focus:ring-red-100' : ''} ${className}`}
        />
        {error ? (
          <p
            id={`${inputId}-error`}
            role="alert"
            className="text-base text-red-600 mt-1"
          >
            {error}
          </p>
        ) : null}
      </div>
    );
  },
);

PhoneInput.displayName = 'PhoneInput';

export default PhoneInput;
