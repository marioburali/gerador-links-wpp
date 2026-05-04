'use client';
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import Button from '../ui/Button';
import useClipboard from '../../hooks/useClipboard';

export default function ResultLink({
  waLink,
  onNew,
}: {
  waLink: string;
  onNew?: () => void;
}) {
  const { copy, copied, error, reset } = useClipboard();
  const headingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    headingRef.current?.focus();
  }, []);

  const handleCopy = async () => {
    await copy(waLink);
  };

  const handleOpen = () => {
    // abrir em nova aba
    window.open(waLink, '_blank', 'noopener,noreferrer');
  };

  const handlePromoOpen = () => {
    window.open(
      'https://www.rdstation.com/produtos/conversas',
      '_blank',
      'noopener,noreferrer',
    );
  };

  const handleNew = () => {
    reset();
    if (onNew) onNew();
  };

  return (
    <section >
      <div>
        <button
          type="button"
          onClick={handleNew}
          className="inline-flex items-center justify-center rounded-full px-1 text-lg text-[#005A87] transition hover:underline"
        >
          ❮ Gerar outro link
        </button>
        <h1
          ref={headingRef}
          tabIndex={-1}
          className="text-2xl font-black tracking-tight text-[#000] py-8 outline-none"
        >
          Seu link de WhatsApp foi gerado com sucesso!
        </h1>
      </div>

      <output
        aria-label="Link de WhatsApp gerado"
        className="block whitespace-pre-wrap break-all rounded-2xl bg-white px-4 py-4 text-base text-[#3A4149] border-[#000] border"
      >
        <code>{waLink}</code>
      </output>

      <div className="flex flex-col sm:flex-row flex-wrap gap-3 mt-10 items-center justify-center xl:flex-row xl:justify-start">
        {/* Grupo esquerda — sempre junto */}
        <div className="flex flex-col sm:flex-row gap-3 items-center">
          <Button
            onClick={handleCopy}
            variant={copied ? 'copied' : 'white'}
            className="w-50 sm:w-auto md:!bg-[#003D5C] md:!text-white md:!border-transparent md:hover:!bg-[#0f1721]"
          >
            <span className="inline-flex items-center gap-2">
              {copied ? (
                <>
                  <Image src="/check.svg" alt="" width={16} height={16} />
                  Link copiado
                </>
              ) : (
                <>
                  <Image
                    src="/copy.svg"
                    alt=""
                    width={16}
                    height={16}
                    className="md:invert"
                  />
                  Copiar link
                </>
              )}
            </span>
          </Button>

          <Button
            onClick={handleOpen}
            variant="ghost"
            className="w-50 sm:w-auto text-[#005A87]"
          >
            Abrir no WhatsApp
          </Button>
        </div>

        {/* Versão desktop */}
        <div className="hidden xl:block ml-auto">
          <Button
            onClick={handlePromoOpen}
            variant="ghost"
            className=" xl:inline-flex ml-auto w-auto text-lg !text-[#000] bg-white border border-[#000] hover:bg-gray-50"
          >
            Adicione um Botão de WhatsApp no site ➔
          </Button>
        </div>
      </div>

      {/* Versão mobile/tablet */}
      <div className="mt-4 flex flex-col items-center text-center xl:hidden">
        <Button
          onClick={handlePromoOpen}
          variant="ghost"
          className="w-80 sm:w-auto text-lg text-[#005A87]"
        >
          Adicione um Botão de WhatsApp no site
        </Button>
      </div>

      <p className="mt-10 text-base text-[#000] text-center !xl:text-left">
        Faça isso com o teste grátis do{' '}
        <span className="font-bold">RD Station Marketing</span>
      </p>

      {error ? (
        <p role="alert" className="text-sm text-red-600">
          {error}
        </p>
      ) : null}
      <p role="status" aria-live="polite" className="sr-only">
        {copied ? 'Link copiado para a área de transferência.' : ''}
      </p>
    </section>
  );
}
