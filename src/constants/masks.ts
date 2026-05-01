// Máscaras e regex para validação/normalização do número de telefone.
export const PHONE_DISPLAY_MASK = '(00) 0 0000-0000';

export const formatPhoneDisplay = (input: string) => {
  const digits = normalizePhone(input).slice(0, 11);

  if (!digits) {
    return '';
  }

  const ddd = digits.slice(0, 2);
  const firstDigit = digits.slice(2, 3);
  const middle = digits.slice(3, 7);
  const last = digits.slice(7, 11);

  let formatted = `(${ddd}`;

  if (digits.length >= 2) {
    formatted += ')';
  }

  if (firstDigit) {
    formatted += ` ${firstDigit}`;
  }

  if (middle) {
    formatted += ` ${middle}`;
  }

  if (last) {
    formatted += `-${last}`;
  }

  return formatted;
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
