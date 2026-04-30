'use client';

import React, { useState } from 'react';
import OutlineButton from '../ui/OutlineButton';
import DropdownItem from '../ui/DropdownItem';

const faqItems = [
  {
    question: 'O que é o Gerador de link para WhatsApp?',
    answer:
      'O plano Light não tem tempo de permanência mínima nem multa por cancelamento. Você pode cancelar quando quiser. Ficaremos tristes, mas você pode cancelar a qualquer momento, com poucos cliques. É só entrar no painel de configurações da sua conta e lá você terá essa opção. O cancelamento da sua conta não acontece de forma automática por falta de uso, por isso, se não quiser mais usar sua conta lembre-se de cancelar para que você não pague se não estiver usando.',
  },
  {
    question: 'Onde posso usar o link do WhatsApp?',
    answer:
      'O seu link de Whatsapp pode ser usado no link da bio das suas redes sociais, em mensagens de email, chats e qualquer que você possa usar para compartilhar o link direto para o seu WhatsApp.',
  },
  {
    question: 'Quais as vantagens de ter um link do seu WhatsApp?',
    answer:
      'O link do WhatsApp permite que você compartilhe o seu contato de WhatsApp de forma prática, com clientes e pessoas interessadas nos seus produtos ou serviços. Dessa forma, você consegue tirar dúvidas, ajudar no processo de compra e estreitar o relacionamento com essas pessoas.',
  },
  {
    question: 'Como gerar link para WhatsApp?',
    answer:
      'Para gerar o seu link no WhatsApp usando o gerador, basta acessar a ferramenta, preencher o seu número de WhatsApp e inserir o seu email e o seu cargo. Depois, caso queira, crie uma mensagem que vai facilitar a interação com seus contatos. As informações de email e cargo não aparecem para quem acessar o seu link de WhatsApp, apenas o seu número e mensagem são compartilhados.',
  },
];

export default function FAQArea() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleCloseAll = () => {
    setOpenIndex(null);
  };

  const toggleItem = (index: number) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <section className="bg-white p-6">
      <div className="mb-4 flex justify-end">
        <OutlineButton type="button" onClick={handleCloseAll}>
          Fechar todos ➔
        </OutlineButton>
      </div>
      <h2 className="text-heading-md text-[#000000] text-[24px] left">
        Perguntas mais comuns
      </h2>

      <div className="mt-4 space-y-3">
        {faqItems.map((item, index) => (
          <DropdownItem
            key={item.question}
            title={item.question}
            open={openIndex === index}
            onToggle={() => toggleItem(index)}
          >
            {item.answer}
          </DropdownItem>
        ))}
      </div>
    </section>
  );
}
