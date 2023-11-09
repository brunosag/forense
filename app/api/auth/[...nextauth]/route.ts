import Credentials from 'next-auth/providers/credentials';
import NextAuth, { NextAuthOptions } from 'next-auth';

const baseUrl = 'https://sbcb.inf.ufrgs.br/forense/api/v1';

const handler = NextAuth({
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

        const response = await fetch(`${baseUrl}/login/access-token`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email, password }),
        });
        const data = await response.json();

        if (response.ok) {
          const accessToken = data.access_token;
          const userResponse = await fetch(`${baseUrl}/login/test-token`, {
            method: 'POST',
            headers: { Authorization: `Bearer ${accessToken}` },
          });
          const userData = await userResponse.json();

          return Promise.resolve({ ...userData, accessToken });
        } else {
          return Promise.reject(data);
        }
      },
    }),
  ],
  callbacks: {
    jwt: async ({ token, user }: { token: any; user: any }) => {
      if (user) {
        const { accessToken, ...userData } = user;
        return {
          ...token,
          accessToken,
          user: userData,
        };
      }
      return token;
    },
    session: async ({ session, token }: { session: any; token: any }) => {
      if (token) {
        session.accessToken = token.accessToken;
        session.user = token.user;
      }
      return session;
    },
  },
  pages: {
    signIn: '/login',
  },
}) satisfies NextAuthOptions;

export { handler as GET, handler as POST };
