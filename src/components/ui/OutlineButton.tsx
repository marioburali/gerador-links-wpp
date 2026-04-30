import React, { ButtonHTMLAttributes, forwardRef } from 'react';

type OutlineButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const OutlineButton = forwardRef<HTMLButtonElement, OutlineButtonProps>(
  ({ children, className = '', ...rest }, ref) => {
    const baseClassName =
      'inline-flex h-9 sm:h-10 md:h-11 w-32 sm:w-36 md:w-50 lg:w-50 items-center justify-center gap-2 rounded-[8px] sm:rounded-[10px] md:rounded-[12px] border border-[#003D5C] bg-transparent px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 md:py-2.5 text-xs sm:text-sm md:text-base font-semibold text-[#003D5C] transition-colors duration-200 hover:bg-[#003D5C] hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#003D5C]/35 focus-visible:ring-offset-2 focus-visible:ring-offset-white disabled:cursor-not-allowed disabled:opacity-60';

    return (
      <button ref={ref} className={`${baseClassName} ${className}`} {...rest}>
        {children}
      </button>
    );
  },
);

OutlineButton.displayName = 'OutlineButton';

export default OutlineButton;
