'use client';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import Input from '../ui/Input';
import PhoneInput from '../ui/PhoneInput';
import Select from '../ui/Select';
import Textarea from '../ui/Textarea';
import Button from '../ui/Button';
import PrivacyLink from '../PrivacyLink';
import RadialBackground from '@/components/ui/RadialBackground';
import useWhatsAppForm from '../../hooks/useWhatsAppForm';
import { JOB_ROLES, JobRole, FormData as FormDataType } from '../../types/form';
import {
  normalizePhone,
  PHONE_DIGITS_REGEX,
  PHONE_FORMAT_REGEX,
} from '../../constants/masks';

type FormValues = {
  name: string;
  phone: string;
  email: string;
  role: JobRole | '';
  message: string;
};

type Props = {
  onSuccess?: (waLink: string) => void;
};

export default function FormArea({ onSuccess }: Props) {
  const { register, handleSubmit, formState, clearErrors, reset } =
    useForm<FormValues>({
      defaultValues: { name: '', phone: '', email: '', role: '', message: '' },
      mode: 'onBlur',
      shouldFocusError: true,
    });

  const { errors } = formState;
  const { submit, loading, error: serverError, waLink } = useWhatsAppForm();
  const [submitError, setSubmitError] = useState<string | null>(null);

  useEffect(() => {
    if (waLink && onSuccess) onSuccess(waLink);
  }, [waLink, onSuccess]);

  const onSubmit = async (values: FormValues) => {
    clearErrors();
    setSubmitError(null);

    const phoneRaw = normalizePhone(values.phone);

    const payload: FormDataType = {
      name: values.name.trim(),
      phone: values.phone,
      phoneRaw,
      role: values.role as JobRole,
      message: values.message.trim(),
    };

    const res = await submit(payload);
    if (!res.ok) {
      setSubmitError(res.error || serverError || 'Falha ao enviar');
    }
  };

  return (
    <RadialBackground className="lg:px-10 lg:py-14 xl:py-16 2xl:py-18">
      <div id="form-area" className="lg:px-30 xl:px-50">
        <h1 className="text-heading-md text-[#0A0A0A] lg:text-[40px] xl:text-[48px]">
          Gerador de Link para WhatsApp
        </h1>
        <p className="text-body-sm-regular text-[#3D4A56] lg:text-xl">
          Crie seu link de WhatsApp e inicie conversas com um clique nos seus
          canais digitais!
        </p>

        <form
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          className="mt-5 space-y-4 lg:space-y-5"
        >
          {submitError ? (
            <div
              role="alert"
              className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
            >
              {submitError}
            </div>
          ) : null}

          <div className="grid gap-4 lg:grid-cols-2 lg:gap-5">
            <Input
              label="Nome*"
              placeholder="Seu nome"
              {...register('name', {
                required: 'Informe seu nome',
                minLength: {
                  value: 2,
                  message: 'Informe pelo menos 2 caracteres',
                },
              })}
              error={errors.name?.message ?? null}
            />

            <PhoneInput
              label="Numero do WhatsApp*"
              {...register('phone', {
                required: 'Informe o telefone',
                pattern: {
                  value: PHONE_FORMAT_REGEX,
                  message: 'Formato de telefone invalido',
                },
                validate: (v) =>
                  PHONE_DIGITS_REGEX.test(normalizePhone(v)) ||
                  'Telefone deve ter 10 ou 11 digitos',
              })}
              error={errors.phone?.message ?? null}
            />
          </div>

          <div className="grid gap-4 lg:grid-cols-2 lg:gap-5">
            <Input
              label="Email*"
              type="email"
              placeholder="nome@email.com"
              {...register('email', {
                required: 'Informe seu email',
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: 'Informe um email valido',
                },
              })}
              error={errors.email?.message ?? null}
            />

            <Select
              label="Cargo*"
              {...register('role', {
                required: 'Selecione um cargo',
                validate: (v) =>
                  JOB_ROLES.includes(v as JobRole)
                    ? true
                    : 'Selecione um cargo valido',
              })}
              error={errors.role?.message ?? null}
            >
              <option value="">Selecione</option>
              {JOB_ROLES.map((r) => (
                <option key={r} value={r}>
                  {r}
                </option>
              ))}
            </Select>
          </div>

          <Textarea
            label="Mensagem (Opcional)"
            rows={4}
            placeholder="Crie uma mensagem que facilite a interação com os contatos."
            {...register('message')}
          />

          <p className="mx-auto max-w-[660px] text-center text-xs leading-5 text-black">
            Ao preencher o formulário, concordo em receber comunicações de
            acordo com meus interesses. Ao informar meus dados, eu concordo com
            a <PrivacyLink fontSize="text-xs" />. *Você pode alterar suas permissões de comunicação
            a qualquer tempo.
          </p>

          <div className="relative flex flex-wrap items-center justify-center gap-3 pt-1 pb-10">
            <Button
              type="submit"
              disabled={loading}
              className="relative z-10"
            >
              {loading ? 'Gerando link...' : 'Gerar link gratis ➔'}
            </Button>
            <Button
              type="button"
              variant="ghost"
              onClick={() => reset()}
              className="relative z-10"
            >
              Limpar formulário
            </Button>
            <img
              src="/whatsapp.svg"
              alt="ícone do WhatsApp"
              className="pointer-events-none absolute bottom-[10px] left-5/6 z-0 h-35 -translate-x-1/2"
            />
          </div>
        </form>
      </div>
    </RadialBackground>
  );
}
