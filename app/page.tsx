'use client';

import { Button } from '@/app/components/ui/button';
import { redirect } from 'next/navigation';
import { signOut, useSession } from 'next-auth/react';

export default function Home() {
  const session = useSession();

  if (!(session.status === 'authenticated')) {
    redirect('/login');
  }

  return (
    <div className="container min-h-screen flex flex-col gap-8 items-center justify-center text-center">
      <div>
        <p className="text-2xl">
          Logged in as <span className="font-medium">{session.data.user?.name || '?'}</span>
        </p>
      </div>
      <Button onClick={() => signOut()} size="sm">
        Logout
      </Button>
    </div>
  );
}
