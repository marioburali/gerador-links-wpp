import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import Input from './ui/Input';
import PhoneInput from './ui/PhoneInput';
import Select from './ui/Select';
import Textarea from './ui/Textarea';
import Button from './ui/Button';
import useWhatsAppForm from '../hooks/useWhatsAppForm';
import { JOB_ROLES, JobRole, FormData as FormDataType } from '../types/form';
import { normalizePhone, PHONE_DIGITS_REGEX, PHONE_FORMAT_REGEX } from '../constants/masks';

type FormValues = {
  name: string;
  phone: string;
  role: JobRole | '';
  message: string;
};

type Props = {
  onSuccess?: (waLink: string) => void;
};

export default function FormStep({ onSuccess }: Props) {
  const { register, handleSubmit, formState, setError, clearErrors, reset } = useForm<FormValues>({
    defaultValues: { name: '', phone: '', role: '', message: '' },
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
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-4">
      {submitError ? (
        <div role="alert" className="text-sm text-red-600">
          {submitError}
        </div>
      ) : null}

      <Input
        label="Nome"
        {...register('name', { required: 'Informe seu nome', minLength: { value: 2, message: 'Informe pelo menos 2 caracteres' } })}
        error={errors.name?.message ?? null}
        placeholder="Seu nome"
      />

      <PhoneInput
        label="Telefone"
        {...register('phone', {
          required: 'Informe o telefone',
          pattern: { value: PHONE_FORMAT_REGEX, message: 'Formato de telefone inválido' },
          validate: (v) => PHONE_DIGITS_REGEX.test(normalizePhone(v)) || 'Telefone deve ter 10 ou 11 dígitos',
        })}
        error={errors.phone?.message ?? null}
      />

      <Select label="Cargo" {...register('role', { required: 'Selecione um cargo', validate: (v) => (JOB_ROLES.includes(v as JobRole) ? true : 'Selecione um cargo válido') })} error={errors.role?.message ?? null}>
        <option value="">Selecione...</option>
        {JOB_ROLES.map((r) => (
          <option key={r} value={r}>
            {r}
          </option>
        ))}
      </Select>

      <Textarea
        label="Mensagem"
        {...register('message', { required: 'Escreva uma mensagem' })}
        error={errors.message?.message ?? null}
        rows={4}
      />

      <div className="flex items-center gap-2">
        <Button type="submit" disabled={loading}>
          {loading ? 'Enviando...' : 'Gerar link'}
        </Button>
        <Button type="button" variant="ghost" onClick={() => reset()}>
          Limpar
        </Button>
      </div>
    </form>
  );
}
