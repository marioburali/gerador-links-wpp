export default function PromoSection() {
  return (
    <section className="mt-10">
      <div className="rounded-2xl border border-[#7BEFFF] bg-white p-6 shadow-sm">
        <h3 className="text-[20px] font-bold text-[#003D5C] leading-6">
          Quer aumentar em até 56% as suas vendas pelo WhatsApp?
        </h3>

        <p className="mt-4 text-base text-[#000] leading-6">
          Conheça o <strong>RD Station Conversas</strong>, uma solução oficial
          de WhatsApp API que te garante um atendimento mais eficiente,
          lucrativo e seguro. Com a nossa ferramenta você diminui os riscos de
          ter seu número bloqueado e ainda melhorar suas taxas de conversão.
        </p>

        <p className="mt-4 text-base text-[#000] leading-6">
          Quer saber mais sobre como nossa plataforma pode ajudar a sua empresa?
        </p>

        <div className="mt-2 flex justify-center md:justify-start">
          <a
            href="https://www.rdstation.com/produtos/conversas/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 text-base font-medium !text-[#005A87]"
          >
            Conheça o RD Station Conversas ➔
          </a>
        </div>
      </div>
    </section>
  );
}
