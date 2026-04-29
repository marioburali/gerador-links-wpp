import React, { ReactNode } from 'react';

type RadialBackgroundProps = {
  children: ReactNode;
  className?: string;
};

export default function RadialBackground({ children, className = '' }: RadialBackgroundProps) {
  return (
    <section
      className={`relative isolate overflow-hidden rounded-[32px] px-4 py-5 sm:px-6 sm:py-6 md:px-8 md:py-8 ${className}`}
      style={{
        backgroundColor: '#F1F3F5',
        backgroundImage: [
          'radial-gradient(circle at 10% 84%, rgba(123,239,255,0.82) 0%, rgba(123,239,255,0.38) 16%, rgba(123,239,255,0.12) 30%, rgba(123,239,255,0) 56%)',
          'radial-gradient(circle at 92% 18%, rgba(195,246,40,0.22) 0%, rgba(195,246,40,0.1) 18%, rgba(195,246,40,0.04) 34%, rgba(195,246,40,0) 66%)',
        ].join(', '),
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% 100%, 100% 100%',
      }}
    >
      <div className="relative z-10">{children}</div>
    </section>
  );
}