import { normalizePhone, PHONE_DIGITS_REGEX } from '../constants/masks';

// Gera uma URL no formato: https://wa.me/55XXXXXXXXXX?text=Mensagem%20Formatada
export function buildWhatsAppLink(rawPhone: string, message: string): string {
  const digits = normalizePhone(rawPhone);
  if (!PHONE_DIGITS_REGEX.test(digits)) {
    throw new Error(
      'Invalid phone number: expected 10 or 11 digits after normalization.',
    );
  }

  // Remover zeros à esquerda por segurança
  const withCountry = `55${digits}`;
  const encoded = encodeURIComponent(message || '');
  return `https://wa.me/${withCountry}?text=${encoded}`;
}

export default buildWhatsAppLink;
