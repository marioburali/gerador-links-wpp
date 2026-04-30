import { ReactNode } from 'react';

type RadialBackgroundProps = {
  children: ReactNode;
  className?: string;
};

export default function RadialBackground({
  children,
  className = '',
}: RadialBackgroundProps) {
  return (
    <section
      className={`
  relative isolate overflow-hidden rounded-[24px]
  px-6 md:px-12 py-16 md:pt-20
  bg-gradient-to-r
  from-cyan-200
  via-slate-200
  to-orange-50
  ${className}
`}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(126,231,255,0.35),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_90%_50%,rgba(216,241,114,0.22),transparent_55%)]" />

      <div className="relative z-10">{children}</div>
    </section>
  );
}
