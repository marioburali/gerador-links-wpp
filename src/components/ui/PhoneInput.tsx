import React, { forwardRef, InputHTMLAttributes, useId } from 'react';
import { PHONE_DISPLAY_MASK } from '../../constants/masks';

type PhoneInputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  error?: string | null;
};

const PhoneInput = forwardRef<HTMLInputElement, PhoneInputProps>(
  ({ label, id, className = '', error, ...rest }, ref) => {
    const autoId = useId();
    const inputId = id ?? autoId;
    const existingDesc = (rest as any)['aria-describedby'];
    const describedBy = error
      ? [existingDesc, `${inputId}-error`].filter(Boolean).join(' ')
      : existingDesc;

    return (
      <div className="flex flex-col gap-1">
        {label ? (
          <label
            htmlFor={inputId}
            className="text-sm font-medium text-slate-700"
          >
            {label}
          </label>
        ) : null}
        <input
          id={inputId}
          ref={ref}
          inputMode="tel"
          placeholder={PHONE_DISPLAY_MASK}
          aria-invalid={!!error}
          aria-describedby={describedBy}
          className={`border rounded-md px-3 py-2 focus:ring-2 focus:ring-sky-300 focus:outline-none ${error ? 'border-red-600' : ''} ${className}`}
          {...rest}
        />
        {error ? (
          <p
            id={`${inputId}-error`}
            role="alert"
            className="text-sm text-red-600 mt-1"
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
