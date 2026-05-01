export default function Header() {
  return (
    <header className="mx-auto w-full max-w-5xl px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-14 pt-8">
      <div className="flex items-center justify-center md:justify-between">
        <img
          src="/RD_Station.svg"
          alt="Logo RD Station"
          className="h-10 w-auto mx-auto md:mx-0 md:h-12"
        />
        <span className="hidden md:inline text-xl font-semibold text-[#111111]">
          Gerador link do WhatsApp
        </span>
      </div>
    </header>
  );
}
