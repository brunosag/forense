import { twMerge } from 'tailwind-merge';
import { type ClassValue, clsx } from 'clsx';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(dateString: string | undefined): string {
  if (!dateString) {
    return '';
  }
  const [year, month, day] = dateString.split('-');
  return `${day}/${month}/${year}`;
}

export function getInitials(name: string | undefined): string {
  if (!name) {
    return '?';
  }
  const names = name.split(' ');
  const initials = names
    .slice(0, 2)
    .map((n) => n.charAt(0))
    .join('');
  return initials;
}
