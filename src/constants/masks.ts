// Máscaras e regex para validação/normalização do número de telefone.
export const PHONE_DISPLAY_MASK = "(99) 99999-9999";

// Aceita formatos: (99) 9999-9999 ou (99) 99999-9999, com ou sem parênteses/espaco
export const PHONE_FORMAT_REGEX = /^\(?\d{2}\)?\s?\d{4,5}-\d{4}$/;

// Apenas dígitos (usado após normalizar): 10 (fixo) ou 11 (celular com nono dígito)
export const PHONE_DIGITS_REGEX = /^\d{10,11}$/;

export const normalizePhone = (input: string) => input.replace(/\D/g, "");
