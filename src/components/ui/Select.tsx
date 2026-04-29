import React, {
  SelectHTMLAttributes,
  forwardRef,
  ReactNode,
  useId,
} from 'react';

type SelectProps = SelectHTMLAttributes<HTMLSelectElement> & {
  label?: string;
  children?: ReactNode;
  error?: string | null;
};

const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ label, id, className = '', children, error, ...rest }, ref) => {
    const autoId = useId();
    const selectId = id ?? autoId;
    const existingDesc = (rest as any)['aria-describedby'];
    const describedBy = error
      ? [existingDesc, `${selectId}-error`].filter(Boolean).join(' ')
      : existingDesc;

    return (
      <div className="flex flex-col gap-1">
        {label ? (
          <label htmlFor={selectId} className="text-sm font-semibold text-[#111111]">
            {label}
          </label>
        ) : null}
        <select
          id={selectId}
          ref={ref}
          aria-invalid={!!error}
          aria-describedby={describedBy}
          className={`w-full rounded-2xl border border-[#D6DBE1] bg-white px-4 py-3 text-[15px] text-[#111111] shadow-[0_1px_2px_rgba(16,24,40,0.04)] outline-none transition focus:border-[#0066CC] focus:ring-2 focus:ring-[#0066CC]/15 ${error ? 'border-red-600 focus:border-red-600 focus:ring-red-100' : ''} ${className}`}
          {...rest}
        >
          {children}
        </select>
        {error ? (
          <p
            id={`${selectId}-error`}
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

Select.displayName = 'Select';

export default Select;
