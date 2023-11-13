'use client';

import { redirect } from 'next/navigation';
import { useSession } from 'next-auth/react';

export default function Admin() {
  const session = useSession();

  if (!(session.status === 'authenticated')) {
    redirect('/login');
  } else if (!session.data?.user.is_superuser) {
    redirect('/');
  }

  return (
    <div className="container min-w-fit w-full flex justify-center items-center text-4xl font-extrabold">Admin</div>
  );
}
