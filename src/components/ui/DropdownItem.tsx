import React, { ReactNode } from 'react';

type DropdownItemProps = {
  title: string;
  open: boolean;
  onToggle: () => void;
  children: ReactNode;
};

export default function DropdownItem({
  title,
  open,
  onToggle,
  children,
}: DropdownItemProps) {
  return (
    <details
      open={open}
      className="rounded-2xl border border-[#DFE5EB] bg-[#FBFCFD] p-4"
    >
      <summary
        className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-[#0F1E2D]"
        onClick={(event) => {
          event.preventDefault();
          onToggle();
        }}
      >
        <span>{title}</span>
        <svg
          aria-hidden="true"
          viewBox="0 0 20 20"
          className={`h-5 w-5 shrink-0 transition-transform duration-200 ${open ? 'rotate-180' : 'rotate-0'}`}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5 7.5L10 12.5L15 7.5"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </summary>
      <div className="mt-2 text-sm leading-6 text-[#445466]">{children}</div>
    </details>
  );
}