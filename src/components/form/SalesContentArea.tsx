import Image from 'next/image';
import Button from '../ui/Button';

const benefitCards = [
  {
    icon: 'shortcut.svg',
    title: 'Atalho rumo às vendas',
    description:
      'O Gerador de link do WhatsApp faz com que usuários se transformem em contatos (Leads) e iniciem conversas certeiras com sua marca.',
  },
  {
    icon: 'messagecaptions.svg',
    title: 'Mensagem automática',
    description:
      'Você automatiza mensagens estimulando o início da conversa, o que facilita a vida dos usuários e clientes.',
  },
  {
    icon: 'boltlightning.svg',
    title: 'Rápido e 100% gratuito',
    description:
      'Não sabe como fazer link de WhatsApp? O Gerador da RD Station é fácil de usar e permite gerar links em segundos!',
  },
];

export default function SalesContentArea() {
  return (
    <section className="p-3 sm:p-4 md:p-5 lg:p-2 xl:p-8">
      <Image
        src="/sales_content_img_tablet.png"
        alt="Imagem de conteúdo de vendas"
        width={653}
        height={300}
        className="w-full h-auto rounded-lg sm:rounded-xl md:rounded-xl object-cover lg:hidden"
      />
      <div className="mt-6 sm:mt-8 md:mt-10 lg:hidden grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
        {benefitCards.map((card) => (
          <div
            key={card.title}
            className="py-4 sm:py-5 rounded-lg sm:rounded-xl  border-2 border-[#7BEFFF] bg-white px-3 sm:px-4"
          >
            <Image
              src={`/${card.icon}`}
              alt={`ícone ${card.title}`}
              width={24}
              height={24}
            />
            <h3 className="sm:text-base md:text-xl py-2 font-bold text-[#000]">
              {card.title}
            </h3>
            <p className="mt-1 text-sm text-[#3A4149]">{card.description}</p>
          </div>
        ))}
      </div>

      <div className="hidden lg:grid mt-2 lg:mt-12 lg:grid-cols-4 lg:gap-4 xl:gap-6 lg:items-stretch">
        {benefitCards.map((card) => (
          <div
            key={card.title}
            className="h-[226px] rounded-lg border-2 border-[#7BEFFF] bg-white px-3 py-4 flex flex-col justify-start"
          >
            <Image
              src={`/${card.icon}`}
              alt={`ícone ${card.title}`}
              width={20}
              height={20}
              className="h-5 w-5"
            />
            <h3 className="text-lg xl:text-xl py-2 font-bold text-[#000]">
              {card.title}
            </h3>
            <p className="mt-1 text-sm text-[#3A4149]">{card.description}</p>
          </div>
        ))}
        <div className="h-[226px] overflow-hidden rounded-lg border-2 border-[#7BEFFF] bg-white">
          <Image
            src="/sales_content_img_tablet.png"
            alt="Imagem de conteúdo de vendas"
            width={653}
            height={300}
            className="h-full w-full object-cover"
          />
        </div>
      </div>

      <div className="mt-10 sm:mt-12 md:mt-16 lg:mt-20 xl:mt-24 lg:grid lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1.4fr)] lg:gap-12 xl:gap-16 lg:items-start">
        <h2 className="text-[32px] md:text-5xl font-bold text-[#000] text-left lg:max-w-[10ch]">
          Acelere suas conversas com o{' '}
          <span className="relative inline-block whitespace-nowrap">
            <span className="relative z-10">Gerador de link de</span>
            <span
              className="absolute -left-[6px] -right-[6px] bottom-0 -z-10 rounded-[8px] bg-[#7BEFFF]"
              style={{ height: '0.5em' }}
            />
          </span>{' '}
          <span className="relative inline-block">
            <span className="relative z-10">WhatsApp</span>
            <span
              className="absolute -left-[6px] -right-[6px] bottom-0 -z-10 rounded-[8px] bg-[#C3F628]"
              style={{ height: '0.5em' }}
            />
          </span>
        </h2>

        <div className="lg:pt-1 lg:max-w-[44rem]">
          <p className="mt-6 sm:mt-8 md:mt-10 lg:mt-0 sm:text-base md:text-lg text-[#000] text-left">
            O WhatsApp é uma das plataformas preferidas pelos brasileiros —{' '}
            <span className="font-bold">
              são mais de 165 milhões de usuários*
            </span>{' '}
            (ou 96,4% da população que faz uso das redes sociais). Quando você
            traz um link de WhatsApp nas redes sociais ou site da sua empresa,
            só tem vantagens:
          </p>
          <p className="mt-3 sm:mt-4 md:mt-5 text-left text-xs italic text-[#000]">
            *Dados da pesquisa Digital 2022: Brazil
          </p>
          <div className="mt-6 sm:mt-8 md:mt-10 lg:mt-12 flex flex-col items-start">
            <ul className="space-y-2 sm:space-y-3 md:space-y-4">
              <li className="flex items-start gap-3">
                <Image
                  src="/check-circle.svg"
                  alt=""
                  width={24}
                  height={24}
                  className="mt-0.5"
                />
                <p className="sm:text-base md:text-lg text-[#000] text-left">
                  Otimiza a geração de Leads.
                </p>
              </li>

              <li className="flex items-start gap-3">
                <Image
                  src="/check-circle.svg"
                  alt=""
                  width={24}
                  height={24}
                  className="mt-0.5"
                />
                <p className="sm:text-base md:text-lg text-[#000] text-left">
                  Ofereça uma opção rápida e prática para tirar dúvidas sobre
                  produtos e serviços.
                </p>
              </li>

              <li className="flex items-start gap-3">
                <Image
                  src="/check-circle.svg"
                  alt=""
                  width={24}
                  height={24}
                  className="mt-0.5"
                />
                <p className="sm:text-base md:text-lg text-[#000] text-left">
                  Oferece uma ótima experiência ao usuário.
                </p>
              </li>
            </ul>
          </div>
          <Button
            type="button"
            scrollToForm
            className="mt-8 sm:mt-10 md:mt-12 lg:mt-14"
          >
            {'Gere seu link grátis ➔'}
          </Button>
        </div>
      </div>
    </section>
  );
}
