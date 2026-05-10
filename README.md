# Gerador de Link para WhatsApp

Aplicação web para gerar links personalizados do WhatsApp no formato `https://wa.me/55XXXXXXXXXX?text=Mensagem%20Formatada`.

O projeto foi desenvolvido como desafio técnico, seguindo o layout proposto no Figma e priorizando responsividade, validação de formulário, acessibilidade, HTML semântico e boas práticas de SEO.

## Funcionalidades

- Formulário com nome, WhatsApp, email, cargo e mensagem padrão.
- Validação com mensagens de erro acessíveis.
- Máscara para telefone brasileiro com 10 ou 11 dígitos.
- Envio dos dados para webhook via rota interna da aplicação.
- Geração do link do WhatsApp somente após envio bem-sucedido.
- Tela de resultado com link gerado, cópia para área de transferência e abertura do WhatsApp.
- Fluxo para gerar outro link limpando os dados anteriores.
- Link para a política de privacidade da RD Station.

## Tecnologias

- Next.js
- React
- TypeScript
- Tailwind CSS
- React Hook Form
- Zod
- IMask / React IMask

## Requisitos

- Node.js compatível com Next.js 16
- npm

## Como Rodar

Instale as dependências:

```bash
npm install
```

Crie um arquivo `.env` na raiz do projeto com a URL do webhook. Use o `.env.example` como referência:

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

Gera a build de produção.

```bash
npm run start
```

Executa a aplicação em modo produção após a build.

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
    page.tsx               Composição principal da página
  components/
    form/                  Seções de formulário e conteúdo complementar
    result/                Componentes da tela de resultado
    ui/                    Componentes reutilizáveis de interface
    Flow.tsx               Controle do fluxo formulário/resultado
    Header.tsx             Cabeçalho
    Footer.tsx             Rodapé
  constants/
    masks.ts               Normalização de telefone
  hooks/
    useClipboard.ts        Lógica de cópia para área de transferência
    useWhatsAppForm.ts     Lógica de envio e geração do link
  lib/
    whatsapp.ts            Regra de criação do link do WhatsApp
    zapier.ts              Integração com o webhook
  types/
    form.ts                Schema, tipos e payload do formulário
```

## Fluxo da Aplicação

1. O usuário preenche o formulário.
2. O React Hook Form usa o schema Zod para validar os campos.
3. O payload é normalizado antes do envio.
4. O client envia os dados para `/api/submit`.
5. A rota interna valida novamente os dados e envia para o webhook.
6. Com o envio concluído, o client gera o link do WhatsApp.
7. A tela de resultado exibe o link e permite copiar, abrir ou gerar outro.

## Validações

- Nome: mínimo de 2 caracteres.
- WhatsApp: 10 ou 11 dígitos nacionais após normalização.
- Email: formato válido.
- Cargo: obrigatório e limitado às opções definidas no desafio/Figma.
- Mensagem: opcional.

## Acessibilidade e Semântica

- Estrutura com `header`, `main`, `footer`, `section`, `form`, `label`, `button`, `output` e headings.
- Campos obrigatórios com `required` e `aria-required`.
- Mensagens de erro associadas aos campos com `aria-describedby`.
- Erros anunciados com `role="alert"`.
- Feedback de cópia anunciado com `role="status"` e `aria-live`.
- Foco movido para a tela de resultado após a geração do link.
