import { Button } from '../ui/button';
import { LucideIcon } from 'lucide-react';
import Link from 'next/link';

export default function NavMenuOption({
  icon: Icon,
  label,
  path,
  active,
  onClick,
}: {
  icon: LucideIcon;
  label: string;
  path: string;
  active?: boolean;
  onClick?: () => void;
}) {
  return (
    <Link href={path}>
      <Button
        variant={active ? 'secondary' : 'ghost'}
        className="w-full justify-start text-foreground gap-2"
        onClick={onClick}
      >
        <Icon className="w-4 h-4" />
        {label}
      </Button>
    </Link>
  );
}
