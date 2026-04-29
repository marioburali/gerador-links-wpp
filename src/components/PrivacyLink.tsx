import React from 'react';

type Props = {
  href?: string;
};

export default function PrivacyLink({ href = '#' }: Props) {
  return (
    <a href={href} target="_blank" rel="noreferrer" className="font-medium text-[#0066CC]">
      Política de Privacidade
    </a>
  );
}
