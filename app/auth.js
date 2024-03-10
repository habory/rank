import NextAuth, { getServerSession } from 'next-auth/next'
import prisma from "@/prisma/prisma"
import GoogleProvider from "next-auth/providers/google"
import { PrismaAdapter } from '@next-auth/prisma-adapter'

export const authOptions = {
  pages: {
    signIn: "/",
  },
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  session: {
    strategy: 'jwt',
    maxAge: 1 * 24 * 60 * 60 // ** 1day
  },
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      //로그인 할 때 이벤트
      return true
    },
    async jwt({ token, account, profile }) {
      if (account) {
        token.accessToken = account.access_token
      }
      
      return token // session 으로 전달
    },
    async session({ session, token }) {
      session.user.id = token.sub
      session.user.name = token.name
      session.user.email = token.email
      session.user.image = token.picture
      session.user.accessToken = token.accessToken
      // console.log(session)
      return session;
    },
  },
};

export default NextAuth(authOptions);

export function auth() {
  return getServerSession(authOptions);
};
