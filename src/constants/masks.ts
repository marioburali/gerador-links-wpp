// Máscaras e regex para validação/normalização do número de telefone.
export const PHONE_DISPLAY_MASK = '(00) 0 0000-0000';

export const formatPhoneDisplay = (input: string) => {
  const digits = normalizePhone(input).slice(0, 11);

  if (!digits) {
    return '';
  }

  const ddd = digits.slice(0, 2);
  const isLongNumber = digits.length === 11;

  if (isLongNumber) {
    // Para 11 dígitos: (XX) XXXXX-XXXX
    const firstPart = digits.slice(2, 7);
    const lastPart = digits.slice(7, 11);
    return `(${ddd}) ${firstPart}-${lastPart}`;
  } else {
    // Para 10 dígitos: (XX) XXXX-XXXX
    const firstPart = digits.slice(2, 6);
    const lastPart = digits.slice(6, 10);
    return `(${ddd}) ${firstPart}-${lastPart}`;
  }
};

// Aceita formatos: (00) 0000-0000 ou (00) 00000-0000, com ou sem parênteses/espaco
// Aceita variações comuns:
// - opcional prefixo de país (+55 ou 55)
// - parênteses opcionais no DDD
// - espaços ou hífen opcionais entre grupos
// Exemplos válidos: +55 (11) 91234-5678, 11 912345678, (11)9123-4567
export const PHONE_FORMAT_REGEX =
  /^(?:\+?55\s?)?\(?\d{2}\)?[\s-]?\d{4,5}[\s-]?\d{4}$/;

// Apenas dígitos (usado após normalizar): 10 (fixo) ou 11 (celular com nono dígito)
export const PHONE_DIGITS_REGEX = /^\d{10,11}$/;

export const normalizePhone = (input: string) => input.replace(/\D/g, '');
