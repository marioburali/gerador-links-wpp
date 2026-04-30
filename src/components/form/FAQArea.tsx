import React from 'react';
import OutlineButton from '../ui/OutlineButton';

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
    <section className="bg-white p-6">
      <div className="mb-4 flex justify-end">
        <OutlineButton type="button">Fechar todos ➔</OutlineButton>
      </div>
      <h2 className="text-heading-md text-[#000000] text-[24px] left">
        Perguntas mais comuns
      </h2>

      <div className="mt-4 space-y-3">
        {faqItems.map((item) => (
          <details
            key={item.question}
            className="rounded-2xl border border-[#DFE5EB] bg-[#FBFCFD] p-4"
          >
            <summary className="cursor-pointer list-none font-semibold text-[#0F1E2D]">
              {item.question}
            </summary>
            <p className="mt-2 text-sm leading-6 text-[#445466]">
              {item.answer}
            </p>
          </details>
        ))}
      </div>
    </section>
  );
}
