import NextAuth from 'next-auth';

declare module 'next-auth' {
  interface Session {
    accessToken: string;
    user: {
      date_of_birth: string;
      email: string;
      id: number;
      is_active: boolean;
      is_superuser: boolean;
      name: string;
      sample: any;
      [key: string]: any;
    };
  }
}
