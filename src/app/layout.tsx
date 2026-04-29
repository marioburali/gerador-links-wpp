import type { Metadata } from 'next';
import { DM_Sans, Geist, Geist_Mono, Red_Hat_Display } from 'next/font/google';
import './globals.css';

const redHatDisplay = Red_Hat_Display({
  variable: "--font-red-hat-display",
  subsets: ["latin"],
  weight: ["700"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: 'Gerador de Links do WhatsApp',
  description:
    'Gere links personalizados do WhatsApp para facilitar o contato com seus clientes. Preencha o formulário e obtenha um link pronto para usar em suas campanhas de marketing, redes sociais ou site.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${redHatDisplay.variable} ${dmSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
