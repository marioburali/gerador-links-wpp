import React, { ButtonHTMLAttributes, forwardRef } from 'react';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'ghost';
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, className = '', variant = 'primary', ...rest }, ref) => {
    const base =
      'inline-flex items-center justify-center rounded-full font-semibold transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0066CC]/35 focus-visible:ring-offset-2 focus-visible:ring-offset-white';
    const variants: Record<string, string> = {
      primary:
        'px-5 py-3 bg-[#1B2A3B] text-white shadow-[0_10px_24px_rgba(27,42,59,0.18)] hover:translate-y-[-1px] hover:bg-[#0f1721] disabled:cursor-not-allowed disabled:opacity-60',
      ghost:
        'px-4 py-2 bg-transparent text-[#0066CC] hover:bg-[#EAF2FB] disabled:opacity-60',
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
