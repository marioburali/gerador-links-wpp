# Gerador de Link para WhatsApp

Aplicacao web para gerar links personalizados do WhatsApp no formato `https://wa.me/55XXXXXXXXXX?text=Mensagem%20Formatada`.

O projeto foi desenvolvido como desafio tecnico, seguindo o layout proposto no Figma e priorizando responsividade, validacao de formulario, acessibilidade, HTML semantico e boas praticas de SEO.

## Funcionalidades

- Formulario com nome, WhatsApp, email, cargo e mensagem padrao.
- Validacao com mensagens de erro acessiveis.
- Mascara para telefone brasileiro com 10 ou 11 digitos.
- Envio dos dados para webhook via rota interna da aplicacao.
- Geracao do link do WhatsApp somente apos envio bem-sucedido.
- Tela de resultado com link gerado, copia para area de transferencia e abertura do WhatsApp.
- Fluxo para gerar outro link limpando os dados anteriores.
- Link para a politica de privacidade da RD Station.

## Tecnologias

- Next.js
- React
- TypeScript
- Tailwind CSS
- React Hook Form
- Zod
- IMask / React IMask

## Requisitos

- Node.js compativel com Next.js 16
- npm

## Como Rodar

Instale as dependencias:

```bash
npm install
```

Crie um arquivo `.env` na raiz do projeto com a URL do webhook. Use o `.env.example` como referencia:

```env
ZAPIER_WEBHOOK_URL=https://hooks.zapier.com/hooks/catch/13309391/uie4g8v/
NEXT_PUBLIC_PRIVACY_URL=https://legal.rdstation.com/pt/privacy-policy/
```

Rode o ambiente de desenvolvimento:

```bash
npm run dev
```

Acesse:

```text
http://localhost:3000
```

## Scripts

```bash
npm run dev
```

Inicia o servidor local de desenvolvimento.

```bash
npm run build
```

Gera a build de producao.

```bash
npm run start
```

Executa a aplicacao em modo producao apos a build.

```bash
npm run lint
```

Executa o ESLint.

## Estrutura do Projeto

```text
src/
  app/
    api/submit/route.ts    Rota interna que valida e envia os dados ao Zapier
    layout.tsx             Metadados, fontes e estrutura base do HTML
    page.tsx               Composicao principal da pagina
  components/
    form/                  Secoes de formulario e conteudo complementar
    result/                Componentes da tela de resultado
    ui/                    Componentes reutilizaveis de interface
    Flow.tsx               Controle do fluxo formulario/resultado
    Header.tsx             Cabecalho
    Footer.tsx             Rodape
  constants/
    masks.ts               Normalizacao de telefone
  hooks/
    useClipboard.ts        Logica de copia para area de transferencia
    useWhatsAppForm.ts     Logica de envio e geracao do link
  lib/
    whatsapp.ts            Regra de criacao do link do WhatsApp
    zapier.ts              Integracao com o webhook
  types/
    form.ts                Schema, tipos e payload do formulario
```

## Fluxo da Aplicacao

1. O usuario preenche o formulario.
2. O React Hook Form usa o schema Zod para validar os campos.
3. O payload e normalizado antes do envio.
4. O client envia os dados para `/api/submit`.
5. A rota interna valida novamente os dados e envia para o webhook.
6. Com o envio concluido, o client gera o link do WhatsApp.
7. A tela de resultado exibe o link e permite copiar, abrir ou gerar outro.

## Validacoes

- Nome: minimo de 2 caracteres.
- WhatsApp: 10 ou 11 digitos nacionais apos normalizacao.
- Email: formato valido.
- Cargo: obrigatorio e limitado as opcoes definidas no desafio/Figma.
- Mensagem: opcional.

## Acessibilidade e Semantica

- Estrutura com `header`, `main`, `footer`, `section`, `form`, `label`, `button`, `output` e headings.
- Campos obrigatorios com `required` e `aria-required`.
- Mensagens de erro associadas aos campos com `aria-describedby`.
- Erros anunciados com `role="alert"`.
- Feedback de copia anunciado com `role="status"` e `aria-live`.
- Foco movido para a tela de resultado apos a geracao do link.

## Documentacao Tecnica

Para estudar o codigo com mais detalhe, consulte:

[docs/SPEC.md](docs/SPEC.md)
