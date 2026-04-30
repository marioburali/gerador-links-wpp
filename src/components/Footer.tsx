import PrivacyLink from './PrivacyLink';

export default function Footer() {
  return (
    <footer className="w-full bg-[var(--grayscale-gray-8,#F1F3F5)]">
      <div className="mx-auto w-full max-w-5xl px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-14 h-14 sm:h-16 md:h-18 lg:h-20 flex items-center justify-center gap-4 sm:gap-6 md:gap-8">
        <div className="flex items-center gap-2 sm:gap-3">
          <PrivacyLink />
        </div>

        <div className="text-xs sm:text-sm md:text-base text-[#3A4149]">© 2026 Resultados Digitais</div>
      </div>
    </footer>
  );
}
