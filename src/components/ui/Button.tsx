import React, { ButtonHTMLAttributes, forwardRef } from 'react';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'white' | 'ghost' | 'copied';
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
      'inline-flex items-center justify-center gap-2 md:h-[46px] px-4 py-2.5 rounded-[10px] md:rounded-[12px] text-base font-semibold transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#005A87]/35 focus-visible:ring-offset-2 focus-visible:ring-offset-white';
    const variants: Record<string, string> = {
      primary:
        'bg-[#003D5C] text-white shadow-[0_10px_24px_rgba(27,42,59,0.18)] hover:translate-y-[-1px] hover:bg-[#0f1721] disabled:cursor-not-allowed disabled:opacity-60 text-base',
      white:
        'bg-white text-[#003D5C] shadow-[0_10px_24px_rgba(27,42,59,0.18)] hover:translate-y-[-1px] hover:bg-[#f8f9fa] disabled:cursor-not-allowed disabled:opacity-60 text-base',
      ghost:
        'bg-transparent text-[#005A87] hover:bg-[#EAF2FB] disabled:opacity-60 text-base',
      copied:
        'bg-[#003D5C] text-white shadow-none hover:bg-[#003D5C] hover:text-white hover:translate-y-0',
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
        {...rest}
        className={`${base} ${variants[variant]} ${className}`}
        onClick={handleClick}
      >
        {children}
      </button>
    );
  },
);

Button.displayName = 'Button';

export default Button;
