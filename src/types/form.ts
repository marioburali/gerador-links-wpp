// Valores válidos para o campo cargo
export const JOB_ROLES = [
  "Sócio(a) / CEO / Proprietário(a)",
  "Diretor(a) de Vendas",
  "Diretor(a) de Marketing",
  "Diretor(a) Outras Áreas",
  "Gerente de Marketing",
  "Gerente de Vendas",
  "Coordenador(a)/Supervisor(a) de Marketing",
  "Coordenador(a)/Supervisor(a) de Vendas",
  "Analista/Assistente de Marketing",
  "Analista/Assistente de Vendas",
  "Vendedor(a) / Executivo(a) de Contas",
  "Estudante",
  "Outros Cargos",
] as const;

export type JobRole = (typeof JOB_ROLES)[number];

export interface FormData {
  name: string;
  phone: string;
  phoneRaw: string;
  message: string;
  role: JobRole;
}

export type WhatsAppLinkParams = {
  phoneRaw: string;
  message: string;
};