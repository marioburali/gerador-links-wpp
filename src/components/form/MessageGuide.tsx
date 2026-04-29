export default function MessageGuide() {
  return (
    <section className="p-6">
      <h2 className="text-heading-md text-[#000000] text-[26px]">
        Como criar mensagens automáticas para o WhatsApp
      </h2>
      <p className="mt-4 text-body-sm-regular text-[#344253]">
        Agora que você viu como fazer link do WhatsApp é fácil, confira algumas
        ideias para mensagens que agilizam a comunicação!
      </p>

      <ul className="mt-8 space-y-8 text-[#344253] text-[20px]">
        <li className="flex items-start gap-2">
          <img src="check-circle-purple.svg" alt="ícone check" className="mt-1 mr-2" />
          Deixe bem claro de qual empresa se trata, mencione o nome do seu
          negócio logo na mensagem para reforçar a identificação com a marca.
        </li>
        <li className="flex items-start gap-2">
          <img src="check-circle-purple.svg" alt="ícone check" className="mt-1 mr-2" />
          Informe claramente os próximos passos para evitar ansiedade. Por
          exemplo, um vendedor entrará em contato? Quanto tempo isso demora?
        </li>
        <li className="flex items-start gap-2">
          <img src="check-circle-purple.svg" alt="ícone check" className="mt-1 mr-2" />
          Faça uma comunicação humanizada, ou seja, escreva como você estivesse
          falando com outra pessoa (até porque, está mesmo!), seguindo os
          padrões da sua marca.
        </li>
      </ul>
    </section>
  );
}
