import React from 'react';

const faqItems = [
  {
    question: 'Preciso instalar algo para usar o gerador?',
    answer:
      'Nao. Basta preencher o formulario e copiar o link gerado para usar em bio, site, anuncios ou email.',
  },
  {
    question: 'Esse link funciona em celular e desktop?',
    answer:
      'Sim. Em dispositivos com WhatsApp instalado ele abre direto no app; no desktop pode abrir no WhatsApp Web.',
  },
  {
    question: 'Posso editar a mensagem depois de gerar?',
    answer:
      'Sim. Ajuste o campo de mensagem e gere novamente para obter um novo link com o texto atualizado.',
  },
];

export default function FAQArea() {
  return (
    <section className="rounded-2xl border border-[#E1E5EA] bg-white p-5 shadow-[0_8px_24px_rgba(16,24,40,0.04)] sm:p-6">
      <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#0066CC]">FAQ</p>
      <h2 className="mt-2 text-2xl font-black tracking-tight text-[#111111]">
        Perguntas frequentes
      </h2>

      <div className="mt-4 space-y-3">
        {faqItems.map((item) => (
          <details key={item.question} className="rounded-2xl border border-[#DFE5EB] bg-[#FBFCFD] p-4">
            <summary className="cursor-pointer list-none font-semibold text-[#0F1E2D]">
              {item.question}
            </summary>
            <p className="mt-2 text-sm leading-6 text-[#445466]">{item.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
