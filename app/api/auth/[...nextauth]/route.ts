import prisma from "@/lib/db/prisma";
import { env } from "@/lib/env";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { NextAuthOptions, Account, Profile } from "next-auth";
import { Adapter } from "next-auth/adapters";
import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { mergeAnonymousCart } from "@/lib/db/cart";

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60,
    updateAge: 24 * 60 * 60,
  },
  secret: process.env.NEXTAUTH_SECRET,
  adapter: PrismaAdapter(prisma) as Adapter,
  providers: [
    GoogleProvider({
      clientId: env.GOOGLE_CLIENT_ID,
      clientSecret: env.GOOGLE_CLIENT_SECRET,
      profile(profile) {
        return {
          id: profile.sub,
          image: profile.picture,
          name: `${profile.given_name} ${profile.family_name}`,
          email: profile.email,
          role: profile.role ? profile.role : "user",
        };
      },
    }),

    CredentialsProvider({
      name: "credentials",
      credentials: {
        username: { label: "username", type: "text", placeholder: "Username" },
        password: {
          label: "password",
          type: "password",
          placeholder: "Password",
        },
      },
      async authorize(credentials, req) {
        const user = await prisma.user.findUnique({
          where :{id:this.id }
        })
      },
    }),
  ],

  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role;
      }
      return token;
      // return { ...token, ...user, };
    },

    async session({ session, token, user }) {
      if (session) {
        session.user.role = token.role;
        session.user.id = token.id;
      }
      return session;
    },
  },

  events: {
    async signIn({ user }) {
      await mergeAnonymousCart(user.id);
    },
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
