import '@/app/globals.css';
import { getServerSession } from 'next-auth';
import { Inter } from 'next/font/google';
import SessionProvider from '@/app/components/context/session-provider';
import type { Metadata } from 'next';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'forense',
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const session = await getServerSession();

  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider session={session}>{children}</SessionProvider>
      </body>
    </html>
  );
}
