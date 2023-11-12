import { Avatar, AvatarFallback, AvatarImage } from '@/app/components/ui/avatar';
import { getInitials } from '@/app/lib/utils';
import { signOut, useSession } from 'next-auth/react';
import { Button } from '../ui/button';

export default function ProfileHeader() {
  const session = useSession();

  return (
    <div className="flex flex-col gap-3 md:gap-7 md:flex-row min-w-fit items-center my-7">
      <Avatar className="w-24 h-24">
        <AvatarImage src="" alt={session.data?.user.name} />
        <AvatarFallback className="text-4xl select-none">{getInitials(session.data?.user.name)}</AvatarFallback>
      </Avatar>
      <div className="flex flex-col">
        <p className="font-medium text-2xl">{session.data?.user.name}</p>
        <p className="text-sm">{session.data?.user.email}</p>
      </div>
      <Button size="sm" onClick={() => signOut()} className="md:ml-auto">
        Logout
      </Button>
    </div>
  );
}
