'use client';

import { Button } from '@/app/components/ui/button';
import { cn } from '@/app/lib/utils';
import { DnaIcon, Globe2Icon, HomeIcon, LogOutIcon, UserCogIcon } from 'lucide-react';
import { signOut, useSession } from 'next-auth/react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import logo from '@/public/logo.svg';
import NavMenuOption from './nav-menu-option';

export default function NavMenuContent({ className, closeSheet }: { className?: string; closeSheet?: () => void }) {
  const { data: session } = useSession();
  const path = usePathname();

  return (
    <div className={cn('w-64 min-h-0 md:min-h-screen p-3 flex-col gap-2', className)}>
      <Link href="/" className="flex items-center gap-2 p-2">
        <Image src={logo} alt="SBCB Lab Logo" className="w-7 h-7" />
        <h1 className="text-md font-bold">forense</h1>
      </Link>

      <div className="flex flex-col md:grow md:justify-between gap-[0.15rem]">
        <div className="flex flex-col gap-[0.15rem]">
          <NavMenuOption icon={HomeIcon} label="Início" path="/" active={path === '/'} onClick={closeSheet} />
          {session?.user.is_superuser && (
            <NavMenuOption
              icon={UserCogIcon}
              label="Admin"
              path="/admin"
              active={path.startsWith('/admin')}
              onClick={closeSheet}
            />
          )}
          <NavMenuOption
            icon={DnaIcon}
            label="Fenótipo"
            path="/fenotipo"
            active={path.startsWith('/fenotipo')}
            onClick={closeSheet}
          />
          <NavMenuOption
            icon={Globe2Icon}
            label="Ancestralidade"
            path="/ancestralidade"
            active={path.startsWith('/ancestralidade')}
            onClick={closeSheet}
          />
        </div>

        <Button
          variant="ghost"
          onClick={() => {
            closeSheet && closeSheet();
            signOut();
          }}
          className="w-full justify-start gap-2 text-destructive hover:text-destructive"
        >
          <LogOutIcon className="w-4 h-4" />
          Logout
        </Button>
      </div>
    </div>
  );
}
