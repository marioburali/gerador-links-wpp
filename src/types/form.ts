import { z } from 'zod';
import { normalizePhone } from '../constants/masks';

// Valores válidos para o campo cargo
export const jobRoles = [
  'Sócio(a) / CEO / Proprietário(a)',
  'Diretor(a) de Vendas',
  'Diretor(a) de Marketing',
  'Diretor(a) Outras Áreas',
  'Gerente de Marketing',
  'Gerente de Vendas',
  'Coordenador(a)/Supervisor(a) de Marketing',
  'Coordenador(a)/Supervisor(a) de Vendas',
  'Analista/Assistente de Marketing',
  'Analista/Assistente de Vendas',
  'Vendedor(a) / Executivo(a) de Contas',
  'Estudante',
  'Outros Cargos',
] as const;

export type JobRole = (typeof jobRoles)[number];

const phoneSchema = z
  .string()
  .trim()
  .min(1, 'Informe o telefone')
  .refine((value) => {
    const digits = normalizePhone(value);
    return digits.length === 10 || digits.length === 11;
  }, 'Telefone deve ter 10 ou 11 dígitos');

const roleSchema = z
  .union([z.enum(jobRoles), z.literal('')])
  .refine((value): value is JobRole => value !== '', {
    message: 'Selecione um cargo',
  });

export const formSchema = z.object({
  name: z.string().trim().min(2, 'Informe pelo menos 2 caracteres'),
  phone: phoneSchema,
  email: z.string().trim().email('Informe um email válido'),
  role: roleSchema,
  message: z.string().trim().optional().default(''),
});

export type FormValues = z.input<typeof formSchema>;

export type SubmissionPayload = {
  name: string;
  phone: string;
  phoneRaw: string;
  email: string;
  role: JobRole;
  message: string;
};

export const buildSubmissionPayload = (
  values: FormValues,
): SubmissionPayload => ({
  name: values.name.trim(),
  phone: values.phone,
  phoneRaw: normalizePhone(values.phone),
  email: values.email.trim(),
  role: values.role as JobRole,
  message: values.message?.trim() ?? '',
});

export type WhatsAppLinkParams = {
  phoneRaw: string;
  message: string;
};
