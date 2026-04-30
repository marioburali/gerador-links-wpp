type Props = {
  href?: string;
};

export default function PrivacyLink({ href }: Props) {
  const url =
    href ||
    process.env.NEXT_PUBLIC_PRIVACY_URL ||
    'https://legal.rdstation.com/pt/privacy-policy/';

  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      className="text-[14px] font-bold"
      style={{ color: '#3A4149' }}
    >
      Política de Privacidade
    </a>
  );
}
