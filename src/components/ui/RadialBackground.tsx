import { ReactNode } from 'react';

type RadialBackgroundProps = {
  children: ReactNode;
  className?: string;
  invertOnMd?: boolean;
};

export default function RadialBackground({
  children,
  className = '',
  invertOnMd = false,
}: RadialBackgroundProps) {
  const firstGradient = invertOnMd
    ? `
      bg-[radial-gradient(circle_at_0%_70%,rgba(126,231,255,0.55),transparent_48%)]
      md:bg-[radial-gradient(circle_at_0%_70%,rgba(216,241,114,0.55),transparent_48%)]
    `
    : `bg-[radial-gradient(circle_at_0%_70%,rgba(126,231,255,0.55),transparent_48%)]`;

  const secondGradient = invertOnMd
    ? `
      bg-[radial-gradient(circle_at_100%_55%,rgba(216,241,114,0.45),transparent_50%)]
      md:bg-[radial-gradient(circle_at_100%_55%,rgba(126,231,255,0.50),transparent_50%)]
    `
    : `bg-[radial-gradient(circle_at_100%_55%,rgba(216,241,114,0.45),transparent_50%)]`;

  return (
    <section
      className={`
        relative isolate overflow-hidden rounded-[24px]
        px-6 md:px-12 py-16 md:pt-20
        bg-[#F1F3F5]
        ${className}
      `}
    >
      <div className={`absolute inset-0 ${firstGradient}`} />
      <div className={`absolute inset-0 ${secondGradient}`} />

      <div className="relative z-10">{children}</div>
    </section>
  );
}