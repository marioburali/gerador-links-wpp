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
          <label
            htmlFor={selectId}
            className="text-sm font-medium text-slate-700"
          >
            {label}
          </label>
        ) : null}
        <select
          id={selectId}
          ref={ref}
          aria-invalid={!!error}
          aria-describedby={describedBy}
          className={`border rounded-md px-3 py-2 ${error ? 'border-red-600' : ''} ${className}`}
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
