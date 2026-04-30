import React from 'react';
import Button from '../ui/Button';

const examples = [
  'Olá! Obrigado por seu interesse em falar com [Nome da Empresa]. Me conta qual é a sua dúvida para eu lhe fornecer as melhores informações!',
  'Oi, tudo bem? Obrigado por entrar em contato com [Nome da Empresa]. Qual é a sua dúvida? Assim, eu consigo ajudar você rapidamente.',
  'Olá! Seja bem-vindo a/ao [Nome da Empresa]! Meu nome é [Nome do Atendente], irei fazer o seu atendimento hoje. Me conta como posso ajudar você! 😍',
];

export default function MessageExamples() {
  return (
    <section className="p-6 bg-[#F8FAFA]">
      <h1 className="text-heading-md text-[#0A0A0A] ">
        Exemplos de mensagem para WhatsApp
      </h1>

      <div className="mt-3 space-y-5">
        {examples.map((ex, index) => (
          <blockquote
            key={ex}
            className="px-4 py-6 text-[16px] text-[#334155] rounded-2xl border-1 border-[#7BEFFF] bg-white border-[#F1F3F5]"
          >
            <h3 className="text-lg font-bold text-[20px] text-[#005A87] mb-4">
              Opção {index + 1}
            </h3>
            {ex}
          </blockquote>
        ))}
      </div>
      <div className="mt-6 flex justify-center">
        <Button type="button" scrollToForm>
          {'Gere seu link gratis ➔'}
        </Button>
      </div>
    </section>
  );
}
