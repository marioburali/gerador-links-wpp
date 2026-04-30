type Props = {
  href?: string;
};

export default function PrivacyLink({ href }: Props) {
  const url =
    href ||
    process.env.NEXT_PUBLIC_PRIVACY_URL || '';

  if (!url) {
    return null;
  }

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="text-sm font-bold"
      style={{ color: '#3A4149' }}
    >
      Política de Privacidade
    </a>
  );
}
