export default function Header() {
  return (
    <header className="mb-6">
      <div className="flex items-center justify-center md:justify-between">
        <img
          src="/RD_Station.svg"
          alt="Logo RD Station"
          className="h-10 w-auto mx-auto md:mx-0 md:h-12"
        />
        <span className="hidden md:inline text-sm font-semibold text-[#111111]">
          Gerador de link
        </span>
      </div>
    </header>
  );
}
