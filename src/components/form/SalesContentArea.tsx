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
    <section className="p-5">
      <img
        src="./sales_content_img_mobile.png"
        alt="Mulher mexendo no computador"
      />
      <div className="mt-10 py-6 rounded-1xl border-2 border-[#7BEFFF] bg-white px-4">
        <img src="shortcut.svg" alt="ícone atalho" />
        <h3 className="text-sm py-2 font-bold text-[#111111]">
          Atalho rumo às vendas
        </h3>
        <p className="mt-1 text-sm text-[#334155]">
          O Gerador de link do WhatsApp faz com que usuários se transformem em
          contatos (Leads) e iniciem conversas certeiras com sua marca.
        </p>
      </div>

      <div className="mt-8 py-6 rounded-1xl border-2 border-[#7BEFFF] bg-white px-4">
        <img src="messagecaptions.svg" alt="ícone de mensagem" />
        <h3 className="text-sm py-2 font-bold text-[#111111]">
          Mensagem automática
        </h3>
        <p className="mt-1 text-sm text-[#334155]">
          Você automatiza mensagens estimulando o início da conversa, o que
          facilita a vida dos usuários e clientes.
        </p>
      </div>

      <div className="mt-8 py-6 rounded-1xl border-2 border-[#7BEFFF] bg-white px-4">
        <img src="boltlightning.svg" alt="ícone atalho" />
        <h3 className="text-sm py-2 font-bold text-[#111111]">
          Rápido e 100% gratuito
        </h3>
        <p className="mt-1 text-sm text-[#334155]">
          Não sabe como fazer link de WhatsApp? O Gerador da RD Station é fácil
          de usar e permite gerar links em segundos!
        </p>
      </div>

      <div className="mt-30">
        <h1 className="text-heading-md text-[#0A0A0A] text-left">
          Acelere suas <br />
          conversas com o <br />
          <span className="relative inline-block">
            Gerador de link de
            <span className="absolute left-0 bottom-1 -z-10 h-3 w-full rounded-full bg-[#7BEFFF]" />
          </span>
          <br />
          <span className="relative inline-block">
            WhatsApp
            <span className="absolute left-0 bottom-1 -z-10 h-3 w-full rounded-full bg-[#C7F231]" />
          </span>
        </h1>
        <p className="mt-10 text-body-sm-regular text-[#3D4A56] text-left">
          O WhatsApp é uma das plataformas preferidas pelos brasileiros —{' '}
          <span className="font-bold">
            são mais de 165 milhões de usuários*
          </span>{' '}
          (ou 96,4% da população que faz uso das redes sociais). Quando você
          traz um link de WhatsApp nas redes sociais ou site da sua empresa, só
          tem vantagens:
        </p>
        <p className="mt-4 text-left text-xs italic text-[#3D4A56]">
          *Dados da pesquisa Digital 2022: Brazil
        </p>
        <div className="mt-10 flex flex-col items-start">
          <ul className="space-y-2">
            <li className="flex items-start gap-3">
              <img src="check-circle.svg" alt="" className="mt-0.5" />
              <p className="text-body-sm-regular text-[#3D4A56] text-left">
                Otimiza a geração de Leads.
              </p>
            </li>

            <li className="flex items-start gap-3">
              <img src="check-circle.svg" alt="" className="mt-0.5" />
              <p className="text-body-sm-regular text-[#3D4A56] text-left">
                Ofereça uma opção rápida e prática para tirar dúvidas sobre
                produtos e serviços.
              </p>
            </li>

            <li className="flex items-start gap-3">
              <img src="check-circle.svg" alt="" className="mt-0.5" />
              <p className="text-body-sm-regular text-[#3D4A56] text-left">
                Oferece uma ótima experiência ao usuário.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
