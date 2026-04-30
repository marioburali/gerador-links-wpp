import React, { ButtonHTMLAttributes, forwardRef } from 'react';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'ghost';
  scrollToForm?: boolean;
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      className = '',
      variant = 'primary',
      scrollToForm = false,
      ...rest
    },
    ref,
  ) => {
    const base =
      'inline-flex items-center justify-center gap-2 w-[214px] h-[46px] px-6 py-3 rounded-[12px] font-semibold transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0066CC]/35 focus-visible:ring-offset-2 focus-visible:ring-offset-white';
    const variants: Record<string, string> = {
      primary:
        'bg-[#003D5C] text-white shadow-[0_10px_24px_rgba(27,42,59,0.18)] hover:translate-y-[-1px] hover:bg-[#0f1721] disabled:cursor-not-allowed disabled:opacity-60',
      ghost:
        'bg-transparent text-[#0066CC] hover:bg-[#EAF2FB] disabled:opacity-60',
    };

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (scrollToForm) {
        const formElement = document.getElementById('form-area');
        if (formElement) {
          formElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
      if (rest.onClick) {
        (rest.onClick as React.MouseEventHandler<HTMLButtonElement>)(e);
      }
    };

    return (
      <button
        ref={ref}
        className={`${base} ${variants[variant]} ${className}`}
        onClick={handleClick}
        {...rest}
      >
        {children}
      </button>
    );
  },
);

Button.displayName = 'Button';

export default Button;
