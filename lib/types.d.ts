import { User } from "@prisma/client";
import { DefaultSession } from "next-auth";
import { JWT } from "next-auth/jwt";
import NextAuth from "next-auth/next";

declare module "next-auth" {
  interface Session {
    user: User;
    role: string;
  }

  interface User {
    role: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: string;
    role: string;
  }
}
