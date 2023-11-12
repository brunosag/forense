'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/app/components/ui/card';
import { formatDate } from '@/app/lib/utils';
import { TabsContent, TabsTrigger } from '@/app/components/ui/tabs';
import { useSession } from 'next-auth/react';
import ProfileField from './profile-field';

export function useSections() {
  const { data: session } = useSession();

  const sections = {
    'dados-contato': {
      label: 'Dados de contato',
      fields: [
        { label: 'Nome', value: session?.user.name },
        { label: 'Email', value: session?.user.email },
        { label: 'Data de nascimento', value: formatDate(session?.user.date_of_birth) },
      ],
    },
    'dados-epidemiologicos': {
      label: 'Dados epidemiológicos',
      fields: [{ label: 'Sexo' }, { label: 'Origem' }, { label: 'Cidade de residência' }, { label: 'Cidade natal' }],
    },
    'dados-antropometricos': {
      label: 'Dados antropométricos',
      fields: [
        { label: 'Altura' },
        { label: 'Peso' },
        { label: 'Nº do calçado' },
        { label: 'Mão preferencial' },
        { label: 'Orelha saliente' },
        { label: 'Lóbulo da orelha solto' },
        { label: 'Lente de contato' },
        { label: 'Cabelo pintado/descolorido' },
        { label: 'Está bem bronzeado' },
      ],
    },
    'dados-biologicos': {
      label: 'Dados biológicos',
      fields: [
        { label: 'Tipo de cabelo' },
        { label: 'Cor do cabelo' },
        { label: 'Cor da pele' },
        { label: 'Cor do olho' },
        { label: 'Cabelo observado' },
        { label: 'Quantidade de cabelo' },
        { label: 'Quantidade de pelos' },
      ],
    },
  };
  const sectionNames = Object.keys(sections) as (keyof typeof sections)[];

  return { sections, sectionNames };
}

export function ProfileSectionTrigger({ section }: { section: keyof typeof sections }) {
  const sections = useSections().sections;

  return (
    <TabsTrigger value={section} className="w-full">
      {sections[section].label}
    </TabsTrigger>
  );
}

export function ProfileSection({ section }: { section: keyof typeof sections }) {
  const sections = useSections().sections;

  return (
    <TabsContent value={section}>
      <Card>
        <CardHeader>
          <CardTitle>{sections[section].label}</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          {sections[section].fields.map((field: { label: string; value?: string }) => (
            <ProfileField key={field.label} label={field.label} value={field.value || '-'} />
          ))}
        </CardContent>
      </Card>
    </TabsContent>
  );
}
