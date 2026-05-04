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
      [background:radial-gradient(31.29%_53.63%_at_0%_65.34%,#7BEFFF_0%,transparent_100%)]
      md:[background:radial-gradient(31.29%_53.63%_at_100%_65.34%,#7BEFFF_0%,transparent_100%)]
    `
    : `[background:radial-gradient(31.29%_53.63%_at_0%_65.34%,#7BEFFF_0%,transparent_100%)]`;

  const secondGradient = invertOnMd
    ? `
      [background:radial-gradient(29.71%_69.22%_at_100%_43.65%,rgba(195,246,40,0.2)_0%,transparent_100%)]
      md:[background:radial-gradient(29.71%_69.22%_at_0%_43.65%,rgba(195,246,40,0.2)_0%,transparent_100%)]
    `
    : `[background:radial-gradient(29.71%_69.22%_at_100%_43.65%,rgba(195,246,40,0.2)_0%,transparent_100%)]`;

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
