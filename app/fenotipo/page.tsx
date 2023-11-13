'use client';

import { redirect } from 'next/navigation';
import { useSession } from 'next-auth/react';

export default function Fenotipo() {
  const session = useSession();

  if (!(session.status === 'authenticated')) {
    redirect('/login');
  }

  return (
    <div className="container min-w-fit w-full flex justify-center items-center text-4xl font-extrabold">Fenótipo</div>
  );
}
