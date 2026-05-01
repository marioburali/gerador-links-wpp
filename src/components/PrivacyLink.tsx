type Props = {
  href?: string;
  fontSize?: string;
};

export default function PrivacyLink({ href, fontSize = 'text-sm' }: Props) {
  const url =
    href ||
    process.env.NEXT_PUBLIC_PRIVACY_URL ||
    'https://legal.rdstation.com/pt/privacy-policy/';

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`${fontSize} font-bold`}
      style={{ color: '#3A4149' }}
    >
      Política de Privacidade
    </a>
  );
}
