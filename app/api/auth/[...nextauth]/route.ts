import { NextAuthOptions } from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import NextAuth from 'next-auth';

const apiLoginUrl = 'https://sbcb.inf.ufrgs.br/forense/api/v1/login/access-token';

const authOptions: NextAuthOptions = {
  session: { strategy: 'jwt' },
  pages: { signIn: '/login' },
  providers: [
    Credentials({
      name: 'Credentials',
      credentials: {
        email: { label: 'email', type: 'email' },
        password: { label: 'password', type: 'password' },
      },

      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return Promise.resolve(null);
        }

        const { email, password } = credentials;

        const response = await fetch(apiLoginUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email, password }),
        });
        const data = await response.json();

        if (response.ok) {
          return Promise.resolve(data);
        } else {
          return Promise.reject(data);
        }
      },
    }),
  ],
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
