import bcrypt from "bcrypt";
import prisma from "@/lib/db/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const body = await request.json();

  const { name, email, password } = body.data;
  console.log(body.data)

  if (!name || !email || !password) {
    return new NextResponse("Missing name, email or password", { status: 400 });
  }

  const exist = await prisma.user.findUnique({
    where: { 
        email: email 
    },
  });

  if (exist) {
    return new NextResponse("User already exists", { status: 400 });
  }

  const hashedPassword  = await bcrypt.hash(password , 10)

  const user = await prisma.user.create({
    data : {
        name : name,
        email : email,
        hashedPassword,
    }
  })

  return NextResponse.json(user)
}
