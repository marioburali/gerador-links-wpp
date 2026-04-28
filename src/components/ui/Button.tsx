import React, { ButtonHTMLAttributes, forwardRef } from 'react';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'ghost';
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, className = '', variant = 'primary', ...rest }, ref) => {
    const base =
      'inline-flex items-center justify-center rounded-md font-medium focus:outline-none';
    const variants: Record<string, string> = {
      primary:
        'px-4 py-2 bg-sky-600 text-white hover:bg-sky-700 disabled:opacity-50',
      ghost: 'px-3 py-1 bg-transparent text-slate-700 hover:bg-slate-100',
    };

    return (
      <button
        ref={ref}
        className={`${base} ${variants[variant]} ${className}`}
        {...rest}
      >
        {children}
      </button>
    );
  },
);

Button.displayName = 'Button';

export default Button;
