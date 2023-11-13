'use client';

import { Sheet, SheetContent, SheetTrigger } from '@/app/components/ui/sheet';
import { usePathname } from 'next/navigation';
import NavMenuContent from './nav-menu-content';
import { MenuIcon } from 'lucide-react';
import { Button } from '../ui/button';
import { useState } from 'react';

export default function NavMenu() {
  const [open, setOpen] = useState<boolean>(false);
  const path = usePathname();

  function closeSheet() {
    setOpen(false);
  }

  return (
    !path.startsWith('/login') && (
      <>
        <Sheet open={open} onOpenChange={() => setOpen(!open)}>
          <SheetTrigger asChild className="md:hidden">
            <Button className="fixed top-4 left-4 p-3 h-auto shadow-md">
              <MenuIcon className="w-5 h-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-fit p-0 overflow-y-auto scroll">
            <NavMenuContent className="flex" closeSheet={closeSheet} />
          </SheetContent>
        </Sheet>

        <NavMenuContent className="hidden md:flex border" />
      </>
    )
  );
}
