type Props = {
  href?: string;
};

export default function PrivacyLink({ href }: Props) {
  const url =
    href ||
    process.env.PRIVACY_URL || '';

  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      className="text-sm font-bold"
      style={{ color: '#3A4149' }}
    >
      Política de Privacidade
    </a>
  );
}
