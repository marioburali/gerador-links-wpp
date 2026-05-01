# Especificacao Tecnica e Guia de Estudo

Este documento explica como o projeto esta organizado, quais responsabilidades cada parte possui e como defender as principais decisoes tecnicas em uma apresentacao ou revisao do desafio.

## Objetivo do Projeto

O projeto implementa um gerador de links para WhatsApp. O usuario informa seus dados, define uma mensagem opcional e recebe um link pronto para iniciar conversa no WhatsApp.

O formato final do link e:

```text
https://wa.me/55XXXXXXXXXX?text=Mensagem%20Formatada
```

O prefixo `55` representa o codigo do Brasil. A mensagem e codificada com `encodeURIComponent` para funcionar corretamente dentro da URL.

## Visao Geral da Arquitetura

A aplicacao usa uma arquitetura simples, adequada para um desafio tecnico de nivel junior:

- Componentes renderizam a interface.
- Hooks concentram comportamento reutilizavel.
- `lib` guarda regras utilitarias e integracoes.
- `types/form.ts` centraliza o contrato do formulario.
- A rota `/api/submit` protege o webhook e valida os dados no servidor.

Essa separacao evita colocar regra de negocio diretamente dentro do JSX e deixa o fluxo mais facil de explicar.

## Estrutura de Pastas

```text
src/app
```

Contem arquivos do App Router do Next.js.

- `layout.tsx`: define idioma, fontes e metadados de SEO.
- `page.tsx`: monta `Header`, `main` com `Flow` e `Footer`.
- `api/submit/route.ts`: recebe o POST do formulario e envia os dados para o Zapier.

```text
src/components
```

Contem componentes de tela e componentes compartilhados.

- `Flow.tsx`: decide se o usuario ve o formulario ou o resultado.
- `FormStep.tsx`: agrupa o formulario e secoes informativas.
- `ResultStep.tsx`: agrupa a tela de resultado.
- `Header.tsx` e `Footer.tsx`: estrutura externa da pagina.
- `PrivacyLink.tsx`: link reutilizavel para politica de privacidade.

```text
src/components/ui
```

Componentes base reutilizaveis:

- `Input`
- `PhoneInput`
- `Select`
- `Textarea`
- `Button`
- `OutlineButton`
- `DropdownItem`
- `RadialBackground`

Eles recebem props como `label`, `error`, `required` e atributos ARIA. Isso evita repetir a mesma estrutura de label, input e erro em cada campo do formulario.

```text
src/hooks
```

Hooks com comportamento reutilizavel:

- `useWhatsAppForm`: envia o formulario, controla loading/erro e gera o link final.
- `useClipboard`: copia o link para a area de transferencia e controla feedback visual.

```text
src/lib
```

Regras e integracoes:

- `whatsapp.ts`: gera o link do WhatsApp.
- `zapier.ts`: envia o payload para o webhook configurado no ambiente.

```text
src/types
```

Tipos e schema do formulario:

- `jobRoles`
- `JobRole`
- `formSchema`
- `FormValues`
- `SubmissionPayload`
- `buildSubmissionPayload`

## Fluxo de Renderizacao

O ponto de entrada visual da pagina e `src/app/page.tsx`.

Ele monta:

```tsx
<>
  <Header />
  <main>
    <Flow />
  </main>
  <Footer />
</>
```

Essa estrutura evita colocar `header` e `footer` dentro do `main`. Semanticamente, o `main` deve conter apenas o conteudo principal da pagina.

## Controle de Fluxo

O componente `Flow` controla duas telas:

- formulario inicial
- resultado com o link gerado

Ele possui dois estados:

```ts
const [waLink, setWaLink] = useState<string | null>(null);
const [formKey, setFormKey] = useState(0);
```

`waLink` decide qual tela renderizar. Quando existe link, a tela de resultado aparece.

`formKey` forca o React a recriar o formulario ao gerar outro link. Isso limpa os campos sem depender de estado global.

## Formulario

O formulario principal fica em `FormArea`.

Ele usa:

- `react-hook-form` para controle do formulario.
- `zodResolver` para integrar React Hook Form com Zod.
- `formSchema` como fonte de verdade da validacao.

Exemplo de inicializacao:

```ts
useForm<FormValues>({
  resolver: zodResolver(formSchema),
  defaultValues: { name: '', phone: '', email: '', role: '', message: '' },
  mode: 'onBlur',
  shouldFocusError: true,
});
```

Decisoes importantes:

- `mode: 'onBlur'`: valida quando o usuario sai do campo, evitando feedback agressivo a cada tecla.
- `shouldFocusError: true`: leva o foco para o primeiro campo invalido.
- `noValidate`: desativa as mensagens nativas do navegador para manter mensagens controladas pela aplicacao.

Mesmo com `noValidate`, os campos obrigatorios usam `required` e `aria-required` para melhorar semantica e acessibilidade.

## Validacao com Zod

O schema esta em `src/types/form.ts`.

Campos:

- `name`: string com pelo menos 2 caracteres.
- `phone`: string obrigatoria, normalizada para 10 ou 11 digitos.
- `email`: string com formato de email valido.
- `role`: precisa ser uma das opcoes de `jobRoles`.
- `message`: opcional, com valor padrao vazio.

O telefone e validado por quantidade de digitos apos remover caracteres nao numericos. Isso permite aceitar tanto fixo quanto celular.

## Normalizacao do Payload

Antes de enviar os dados, o projeto usa `buildSubmissionPayload`.

Essa funcao:

- remove espacos extras do nome.
- mantem o telefone original.
- cria `phoneRaw` apenas com digitos.
- remove espacos extras do email.
- garante `role` como `JobRole`.
- transforma mensagem vazia em string vazia.

Isso e util porque o restante da aplicacao passa a trabalhar com um contrato mais previsivel.

## Mascara de Telefone

O campo de telefone usa `PhoneInput`, baseado em `react-imask`.

A mascara e:

```text
(00) [0] 0000-0000
```

O digito entre colchetes e opcional. Assim a interface aceita telefones fixos e celulares nacionais.

O componente usa:

- `type="tel"`
- `inputMode="tel"`
- `aria-invalid`
- `aria-describedby`
- erro associado por `id`

## Envio para API Interna

O hook `useWhatsAppForm` envia os dados para:

```text
/api/submit
```

Essa rota interna evita que o client chame diretamente o webhook. O webhook fica em variavel de ambiente:

```env
ZAPIER_WEBHOOK_URL=...
```

Fluxo do hook:

1. ativa `loading`.
2. limpa erro anterior.
3. envia payload para `/api/submit`.
4. se a API responder erro, mostra feedback.
5. se a API responder sucesso, gera o link com `buildWhatsAppLink`.
6. salva o link em `waLink`.

## Rota `/api/submit`

A rota recebe o JSON do formulario e valida novamente no servidor:

```ts
const parsed = formSchema.safeParse(payload);
```

Essa segunda validacao e importante porque validacao no client melhora experiencia, mas nao deve ser a unica camada de confianca.

Depois da validacao, a rota envia os dados para o Zapier com `sendToZapier`.

Respostas principais:

- `200`: envio concluido.
- `400`: dados invalidos.
- `502` ou status do webhook: falha no envio externo.
- `500`: erro inesperado.

## Geracao do Link do WhatsApp

A funcao `buildWhatsAppLink` fica em `src/lib/whatsapp.ts`.

Ela:

1. normaliza o telefone.
2. valida se ha 10 ou 11 digitos.
3. adiciona o codigo do Brasil `55`.
4. codifica a mensagem.
5. retorna a URL final.

Exemplo:

```ts
buildWhatsAppLink('48999998888', 'Ola, quero saber mais');
```

Resultado:

```text
https://wa.me/5548999998888?text=Ola%2C%20quero%20saber%20mais
```

## Tela de Resultado

A tela de resultado exibe:

- titulo de sucesso com `h1`.
- link gerado com `output` e `code`.
- botao para copiar.
- botao para abrir no WhatsApp.
- botao promocional para RD Station Conversas.
- botao/link para gerar outro link.

O foco vai automaticamente para o titulo da tela de resultado. Isso ajuda quem usa teclado ou leitor de tela a perceber que houve mudanca de tela.

O feedback de copia usa:

```tsx
<p role="status" aria-live="polite" className="sr-only">
  {copied ? 'Link copiado para a area de transferencia.' : ''}
</p>
```

Assim, leitores de tela recebem o feedback sem depender apenas da mudanca visual do botao.

## Acessibilidade

Principais cuidados aplicados:

- `lang="pt-BR"` no HTML.
- Estrutura com `header`, `main` e `footer` como regioes independentes.
- Labels associados aos campos com `htmlFor`.
- Campos invalidos com `aria-invalid`.
- Erros conectados por `aria-describedby`.
- Mensagens de erro com `role="alert"`.
- Campos obrigatorios com `required` e `aria-required`.
- Feedback de copia com `role="status"` e `aria-live`.
- Foco movido para o resultado apos sucesso.
- Icones decorativos com `alt=""` quando nao precisam ser anunciados.

## SEO e HTML Semantico

O projeto usa o recurso `metadata` do Next.js para configurar:

- titulo.
- descricao.
- robots.
- Open Graph.
- Twitter card.

Tambem usa headings, sections e conteudo textual relevante para a pagina.

A pagina principal segue a estrutura:

```text
Header
Main
Footer
```

Isso e melhor do que colocar `header` e `footer` dentro do `main`, pois cada regiao tem sua funcao semantica.

## Componentizacao

A componentizacao segue uma divisao simples:

- componentes de pagina: organizam grandes blocos.
- componentes de UI: inputs, botoes e estruturas reutilizaveis.
- hooks: comportamento.
- lib: regras e integracoes.
- types: contratos compartilhados.

Essa escolha e boa para um desafio junior porque evita complexidade desnecessaria. O projeto nao cria camadas demais, mas tambem nao deixa tudo concentrado em um unico arquivo.

## Onde os Types Ficam

Nem todo type precisa ir para `src/types`.

Types locais, como props de um componente, podem ficar no proprio arquivo:

```ts
type Props = {
  waLink: string;
  onNew?: () => void;
};
```

Types compartilhados ou ligados ao dominio da aplicacao ficam centralizados:

- `JobRole`
- `FormValues`
- `SubmissionPayload`

Essa separacao evita um arquivo gigante de tipos e mantem cada contrato perto do lugar onde faz mais sentido.

## Variaveis de Ambiente

Obrigatoria:

```env
ZAPIER_WEBHOOK_URL=https://hooks.zapier.com/hooks/catch/13309391/uie4g8v/
```

Opcional:

```env
NEXT_PUBLIC_PRIVACY_URL=https://legal.rdstation.com/pt/privacy-policy/
```

Se a URL publica de privacidade nao existir, o componente usa o fallback oficial da RD Station.

## Como Explicar o Projeto

Uma boa explicacao para avaliador:

> Mantive a arquitetura simples porque o desafio e pequeno. Separei interface em componentes, comportamento em hooks, regras e integracoes em `lib`, e contratos do formulario em `types/form.ts`. O formulario usa React Hook Form com Zod para manter a validacao centralizada. O envio passa por uma rota interna para proteger o webhook e validar os dados tambem no servidor. A tela de resultado tem cuidados de acessibilidade, como gerenciamento de foco e feedback com `aria-live`.

## Melhorias Futuras

Possiveis evolucoes sem mudar o objetivo do desafio:

- Adicionar testes unitarios para `buildWhatsAppLink`, `normalizePhone` e `formSchema`.
- Separar `jobRoles` em um arquivo de constantes proprio se a lista crescer.
- Extrair campos do formulario para um componente menor se o formulario aumentar.
- Adicionar `metadataBase`, canonical e imagem Open Graph em um deploy real.
- Adicionar dados estruturados para FAQ.
- Criar um `.env.example` para documentar variaveis sem depender do README.
