import PrivacyLink from './PrivacyLink';

export default function Footer() {
  return (
    <footer className="w-full bg-[var(--grayscale-gray-8,#F1F3F5)]">
      <div className="mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8 h-[56px] flex items-center justify-center gap-6">
        <div className="flex items-center gap-2">
          <PrivacyLink />
        </div>

        <div className="text-sm text-[#3A4149]">© 2026 Resultados Digitais</div>
      </div>
    </footer>
  );
}
