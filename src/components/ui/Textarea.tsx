import { TextareaHTMLAttributes, forwardRef, useId } from 'react';

type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label?: string;
  error?: string | null;
};

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, id, className = '', error, ...rest }, ref) => {
    const autoId = useId();
    const textareaId = id ?? autoId;
    const existingDesc = (rest as any)['aria-describedby'];
    const describedBy = error
      ? [existingDesc, `${textareaId}-error`].filter(Boolean).join(' ')
      : existingDesc;

    return (
      <div className="flex flex-col gap-1">
        {label ? (
          <label
            htmlFor={textareaId}
            className="text-base font-semibold text-[#111111]"
          >
            {label}
          </label>
        ) : null}
        <textarea
          id={textareaId}
          ref={ref}
          aria-invalid={!!error}
          aria-describedby={describedBy}
          className={`w-full rounded-2xl border border-[#D6DBE1] bg-white px-4 py-3 text-base text-[#111111] shadow-[0_1px_2px_rgba(16,24,40,0.04)] outline-none transition focus:border-[#0066CC] focus:ring-2 focus:ring-[#0066CC]/15 ${error ? 'border-red-600 focus:border-red-600 focus:ring-red-100' : ''} ${className}`}
          {...rest}
        />
        {error ? (
          <p
            id={`${textareaId}-error`}
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

Textarea.displayName = 'Textarea';

export default Textarea;
