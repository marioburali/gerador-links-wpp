import Image from 'next/image';

export default function Header() {
  return (
    <header className="mx-auto w-full max-w-5xl px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-14 pt-8">
      <div className="flex items-center justify-center md:justify-between">
        <Image
          src="/RD_Station.svg"
          alt="Logo RD Station"
          width={192}
          height={48}
          className="h-10 w-auto mx-auto md:mx-0 md:h-12"
        />
        <h2 className="hidden md:inline text-xl font-semibold text-[#111111]">
          Gerador link do WhatsApp
        </h2>
      </div>
    </header>
  );
}
