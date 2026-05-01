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

    const getDigitIndex = (value: string, cursorPosition: number) =>
      value.slice(0, cursorPosition).replace(/\D/g, '').length;

    const getCursorFromDigitIndex = (value: string, digitIndex: number) => {
      if (digitIndex <= 0) {
        return 0;
      }

      let digitsSeen = 0;

      for (let position = 0; position < value.length; position += 1) {
        if (/\d/.test(value[position])) {
          digitsSeen += 1;
          if (digitsSeen >= digitIndex) {
            return position + 1;
          }
        }
      }

      return value.length;
    };

    const emitChange = (
      input: HTMLInputElement,
      nextValue: string,
      nextDigitIndex?: number,
    ) => {
      input.value = nextValue;

      if (typeof nextDigitIndex === 'number') {
        requestAnimationFrame(() => {
          const cursor = getCursorFromDigitIndex(nextValue, nextDigitIndex);
          input.setSelectionRange(cursor, cursor);
        });
      }

      onChange?.({
        target: input,
        currentTarget: input,
      } as React.ChangeEvent<HTMLInputElement>);
    };

    const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (
      event,
    ) => {
      if (event.key !== 'Backspace' && event.key !== 'Delete') {
        return;
      }

      const input = event.currentTarget;
      const currentValue = input.value;
      const selectionStart = input.selectionStart ?? currentValue.length;
      const selectionEnd = input.selectionEnd ?? selectionStart;
      const digits = currentValue.replace(/\D/g, '');

      if (!digits) {
        return;
      }

      let nextDigits = digits;
      let nextDigitIndex = getDigitIndex(currentValue, selectionStart);

      if (selectionStart !== selectionEnd) {
        const startDigitIndex = getDigitIndex(currentValue, selectionStart);
        const endDigitIndex = getDigitIndex(currentValue, selectionEnd);
        nextDigits =
          digits.slice(0, startDigitIndex) + digits.slice(endDigitIndex);
        nextDigitIndex = startDigitIndex;
      } else if (event.key === 'Backspace') {
        if (nextDigitIndex === 0) {
          return;
        }

        nextDigits =
          digits.slice(0, nextDigitIndex - 1) + digits.slice(nextDigitIndex);
        nextDigitIndex = nextDigitIndex - 1;
      } else {
        if (nextDigitIndex >= digits.length) {
          return;
        }

        nextDigits =
          digits.slice(0, nextDigitIndex) + digits.slice(nextDigitIndex + 1);
      }

      event.preventDefault();
      emitChange(input, formatPhoneDisplay(nextDigits), nextDigitIndex);
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
          onKeyDown={handleKeyDown}
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
