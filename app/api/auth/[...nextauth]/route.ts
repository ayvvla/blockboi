import prisma from "@/lib/db/prisma";
import { env } from "@/lib/env";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { NextAuthOptions, Account, Profile } from "next-auth";
import { Adapter } from "next-auth/adapters";
import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60,
    updateAge: 24 * 60 * 60
  },
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

    // CredentialsProvider({
    //   name: "Username & Password",
    //   credentials: {
    //     username: {
    //       label: "Username",
    //       type: "text",
    //       placeholder: "Enter your username",
    //     },
    //     password: { label: "Password", type: "password" },
    //   },
    //   async authorize(credentials, req) {
    //     const user = { id: "1", name: "John", email: "jsmith@example.com" };

    //     if (user) {
    //       return user;
    //     } else {
    //       return null;
    //     }
    //   },
    // }),
  ],

  callbacks: {
    async jwt({ token, user }) {
      // if (user) {
      //   token.role = user.role;
      // }
      // return token;
      return { ...token, ...user };
    },

    async session({ session, token }) {
      if (session.user) {
        session.user.role = token.role;
      }
      return session;
    },
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
