import React, { forwardRef, InputHTMLAttributes, useId } from 'react';
import { formatPhoneDisplay, PHONE_DISPLAY_MASK } from '../../constants/masks';

type PhoneInputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  error?: string | null;
};

const PhoneInput = forwardRef<HTMLInputElement, PhoneInputProps>(
  ({ label, id, className = '', error, ...rest }, ref) => {
    const autoId = useId();
    const inputId = id ?? autoId;
    const { onChange, ...inputProps } = rest;
    const existingDesc = rest['aria-describedby'];
    const describedBy = error
      ? [existingDesc, `${inputId}-error`].filter(Boolean).join(' ')
      : existingDesc;
    const handleChange: React.ChangeEventHandler<HTMLInputElement> = (
      event,
    ) => {
      event.target.value = formatPhoneDisplay(event.target.value);
      onChange?.(event);
    };

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
        <input
          id={inputId}
          ref={ref}
          inputMode="tel"
          type="tel"
          placeholder={PHONE_DISPLAY_MASK}
          maxLength={16}
          aria-invalid={!!error}
          aria-describedby={describedBy}
          className={`w-full rounded-2xl border border-[#D6DBE1] bg-white px-4 py-3 text-base text-[#111111] shadow-[0_1px_2px_rgba(16,24,40,0.04)] outline-none transition focus:border-[#0066CC] focus:ring-2 focus:ring-[#0066CC]/15 ${error ? 'border-red-600 focus:border-red-600 focus:ring-red-100' : ''} ${className}`}
          onChange={handleChange}
          {...inputProps}
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
