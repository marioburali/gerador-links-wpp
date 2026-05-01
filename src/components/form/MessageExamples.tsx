import React from 'react';
import Button from '../ui/Button';

const examples = [
  'Olá! Obrigado por seu interesse em falar com [Nome da Empresa]. Me conta qual é a sua dúvida para eu lhe fornecer as melhores informações!',
  'Oi, tudo bem? Obrigado por entrar em contato com [Nome da Empresa]. Qual é a sua dúvida? Assim, eu consigo ajudar você rapidamente.',
  'Olá! Seja bem-vindo a/ao [Nome da Empresa]! Meu nome é [Nome do Atendente], irei fazer o seu atendimento hoje. Me conta como posso ajudar você! 😍',
];

export default function MessageExamples() {
  return (
    <section className="py-6 sm:py-8 md:py-10 lg:py-12 xl:py-14 bg-[#F8FAFA]">
      <div className="mx-auto w-full max-w-5xl px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-14">
        <h2 className="text-center text-[32px] font-bold text-[#0A0A0A] p-2 sm:p-3 md:p-4">
          Exemplos de mensagem para WhatsApp
        </h2>

        <div className="mt-4 lg:mt-6 grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-5 lg:gap-6">
          {examples.map((ex, index) => (
            <blockquote
              key={ex}
              className="h-full p-5 sm:py-4 md:py-5 text-base text-[#3A4149] rounded-lg border border-[#7BEFFF] bg-white"
            >
              <h3 className="text-xl font-bold text-[#005A87] mb-2 sm:mb-3 md:mb-4">
                Opção {index + 1}
              </h3>
              {ex}
            </blockquote>
          ))}
        </div>
        <div className="mt-6 sm:mt-8 md:mt-10 flex justify-center">
          <Button type="button" scrollToForm>
            {'Gere seu link gratis ➔'}
          </Button>
        </div>
      </div>
    </section>
  );
}
