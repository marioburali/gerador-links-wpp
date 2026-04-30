export default function MessageGuide() {
  return (
    <section className="p-4 sm:p-5 md:p-6 lg:p-8 xl:p-10">
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#000000] text-center">
        Como criar mensagens automáticas para o WhatsApp
      </h2>
      <p className="mt-3 sm:mt-4 md:mt-5 text-sm sm:text-base md:text-lg text-[#344253] text-center">
        Agora que você viu como fazer link do WhatsApp é fácil, confira algumas
        ideias para mensagens que agilizam a comunicação!
      </p>

      <ul className="mt-6 sm:mt-7 md:mt-8 lg:mt-10 space-y-5 sm:space-y-6 md:space-y-7 lg:flex text-[#344253]">
        <li className="flex items-start gap-2 lg:flex-col lg:items-center lg:px-10 lg:text-center" >
          <img src="check-circle-purple.svg" alt="ícone check" className="mt-1 mr-2" />
          Deixe bem claro de qual empresa se trata, mencione o nome do seu
          negócio logo na mensagem para reforçar a identificação com a marca.
        </li>
        <li className="flex items-start gap-2 lg:flex-col lg:items-center lg:px-10 lg:text-center" >
          <img src="check-circle-purple.svg" alt="ícone check" className="mt-1 mr-2" />
          Informe claramente os próximos passos para evitar ansiedade. Por
          exemplo, um vendedor entrará em contato? Quanto tempo isso demora?
        </li>
        <li className="flex items-start gap-2 lg:flex-col lg:items-center lg:px-10 lg:text-center" >
          <img src="check-circle-purple.svg" alt="ícone check" className="mt-1 mr-2" />
          Faça uma comunicação humanizada, ou seja, escreva como você estivesse
          falando com outra pessoa (até porque, está mesmo!), seguindo os
          padrões da sua marca.
        </li>
      </ul>
    </section>
  );
}
