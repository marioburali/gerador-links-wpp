import React from 'react';

const examples = [
  'Olá! Obrigado por seu interesse em falar com [Nome da Empresa]. Me conta qual é a sua dúvida para eu lhe fornecer as melhores informações!',
  'Oi, tudo bem? Obrigado por entrar em contato com [Nome da Empresa]. Qual é a sua dúvida? Assim, eu consigo ajudar você rapidamente.',
  'Olá! Seja bem-vindo a/ao [Nome da Empresa]! Meu nome é [Nome do Atendente], irei fazer o seu atendimento hoje. Me conta como posso ajudar você! 😍'
];

export default function MessageExamples() {
  return (
    <section className="rounded-2xl border border-[#DCE3EA] bg-white p-5 shadow-[0_8px_24px_rgba(16,24,40,0.04)] sm:p-6">
      <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#0066CC]">Exemplos prontos</p>
      <h3 className="mt-2 text-lg font-bold text-[#111111]">Modelos de mensagem</h3>

      <div className="mt-3 space-y-3">
        {examples.map((ex, index) => (
          <blockquote key={ex} className="rounded-2xl border border-[#E6EDF3] bg-white px-4 py-3 text-sm text-[#334155]">
            <h3 className="text-lg font-bold text-[#111111]">Opção {index + 1}</h3>
            {ex}
          </blockquote>
        ))}
      </div>
    </section>
  );
}
