import React from 'react';

const checklist = [
  'Defina um objetivo unico por mensagem',
  'Use tom humano e direto',
  'Inclua CTA claro para resposta',
  'Evite blocos longos de texto',
];

const examples = [
  'Ola! Vi que voce baixou nosso material. Quer que eu te mostre 3 formas de aplicar no seu negocio?',
  'Oi! Posso te enviar uma proposta rapida com os proximos passos para comecar hoje?',
];

export default function SalesContentArea() {
  return (
    <section className="rounded-2xl border border-[#E1E5EA] bg-[#F7FAFC] p-5 shadow-[0_8px_24px_rgba(16,24,40,0.04)] sm:p-6">
      <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#0066CC]">
        Conteudo para vender mais
      </p>
      <h2 className="mt-2 text-2xl font-black tracking-tight text-[#111111]">
        Acelere suas conversoes com mensagens prontas
      </h2>

      <div className="mt-5 rounded-2xl bg-white p-4 ring-1 ring-black/5">
        <h3 className="text-sm font-bold text-[#111111]">Checklist de mensagem automatica</h3>
        <ul className="mt-3 space-y-2 text-sm text-[#344253]">
          {checklist.map((item) => (
            <li key={item} className="flex items-start gap-2">
              <span className="mt-1 inline-block h-2 w-2 rounded-full bg-[#0066CC]" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-4 space-y-3">
        {examples.map((text) => (
          <blockquote
            key={text}
            className="rounded-2xl border border-[#DCE3EA] bg-white px-4 py-3 text-sm text-[#334155]"
          >
            "{text}"
          </blockquote>
        ))}
      </div>
    </section>
  );
}
