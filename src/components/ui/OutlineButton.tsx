import { ButtonHTMLAttributes, forwardRef } from 'react';

type OutlineButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const OutlineButton = forwardRef<HTMLButtonElement, OutlineButtonProps>(
  ({ children, className = '', ...rest }, ref) => {
    const baseClassName =
      'inline-flex h-9 items-center justify-center gap-2 rounded-[8px] border border-[#003D5C] bg-transparent px-4 py-2.5 text-base font-semibold text-[#003D5C] transition-colors duration-200 hover:bg-[#003D5C] hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#003D5C]/35 focus-visible:ring-offset-2 focus-visible:ring-offset-white disabled:cursor-not-allowed disabled:opacity-60';

    return (
      <button ref={ref} className={`${baseClassName} ${className}`} {...rest}>
        {children}
      </button>
    );
  },
);

OutlineButton.displayName = 'OutlineButton';

export default OutlineButton;
