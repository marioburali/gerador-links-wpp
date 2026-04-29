import React from 'react';

type Props = {
  href?: string;
};

export default function PrivacyLink({ href = '#' }: Props) {
  return (
    <a href={href='https://legal.rdstation.com/pt/privacy-policy/'} target="_blank" rel="noreferrer" className="font-medium text-[#0066CC]">
      Política de Privacidade
    </a>
  );
}
