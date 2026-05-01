const guideItems = [
  'Deixe bem claro de qual empresa se trata, mencione o nome do seu negócio logo na mensagem para reforçar a identificação com a marca.',
  'Informe claramente os próximos passos para evitar ansiedade. Por exemplo, um vendedor entrará em contato? Quanto tempo isso demora?',
  'Faça uma comunicação humanizada, ou seja, escreva como você estivesse falando com outra pessoa (até porque, está mesmo!), seguindo os padrões da sua marca.',
];

export default function MessageGuide() {
  return (
    <section className="p-4 sm:p-5 md:p-6 lg:p-8 xl:p-10">
      <h2 className="text-2xl md:text-[32px] font-bold text-[#000000] text-center">
        Como criar mensagens automáticas para o WhatsApp
      </h2>
      <p className="mt-3 sm:mt-4 md:mt-5 text-base md:text-xl text-[#000] text-center">
        Agora que você viu como fazer link do WhatsApp é fácil, confira algumas
        ideias para mensagens que agilizam a comunicação!
      </p>

      <ul className="mt-6 sm:mt-7 md:mt-8 lg:mt-10 space-y-5 sm:space-y-6 md:space-y-7 lg:flex text-[#3A4149] text-xl">
        {guideItems.map((item) => (
          <li
            key={item}
            className="flex items-start gap-2 lg:flex-col lg:items-center lg:px-10 lg:text-center"
          >
            <img
              src="check-circle-purple.svg"
              alt="ícone check"
              className="mt-1 mr-2"
            />
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}
