import prisma from "@/lib/db/prisma";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    const cart = await prisma.cartItem.findMany({
        orderBy : {id : 'desc'},
        include : {product : true }
    })
    return NextResponse.json(cart);
  } catch (err) {
    console.log("Cart error", err);
    return NextResponse.error();
  }
}
