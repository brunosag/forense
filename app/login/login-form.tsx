'use client';

import { Button } from '@/app/components/ui/button';
import { Input } from '@/app/components/ui/input';
import { Loader2Icon } from 'lucide-react';
import { redirect } from 'next/navigation';
import { signIn, useSession } from 'next-auth/react';
import { useState } from 'react';
import LoginAlert from './login-alert';

export default function LoginForm() {
  const [alertOpen, setAlertOpen] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const session = useSession();

  if (session.status === 'authenticated') {
    redirect('/');
  }

  function handleAlertClose() {
    setAlertOpen(false);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target as HTMLFormElement);
    const { email, password } = Object.fromEntries(formData.entries());

    const response = await signIn('credentials', { redirect: false, email, password });

    if (!response?.ok) {
      setAlertOpen(true);
      setLoading(false);
    }
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)} className="flex flex-col gap-6">
      <div className="flex flex-col gap-3">
        {alertOpen && <LoginAlert handleAlertClose={handleAlertClose} />}
        <Input required type="email" name="email" placeholder="Email" />
        <Input required type="password" name="password" placeholder="Password" />
      </div>
      <Button disabled={loading} className="w-full flex gap-2">
        {loading && <Loader2Icon className="animate-spin h-4 w-4" />}Log in
      </Button>
    </form>
  );
}
