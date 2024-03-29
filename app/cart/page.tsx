import { getCart } from "@/lib/db/cart";
import React from "react";
import CartEntry from "./CartEntry";
import { setProductQuantity } from "./action";
import formatPrice from "@/lib/format";
import Link from "next/link";

export const metadata = {
  title: "Your Shopping Cart - Blockboi",
};

const CartPage = async () => {
  const cart = await getCart();

  return (
    <div className="w-[90%] mx-auto my-6">
      <h1 className="text-3xl mb-6 font-bold ">Shopping Cart</h1>
      {cart?.items.map((cartItem) => {
        return (
          <CartEntry
            cartItem={cartItem}
            key={cartItem.id}
            setProductQuantity={setProductQuantity}
          />
        );
      })}

      {!cart?.items.length && <div className="h-[70vh]"> Your Cart is empty </div>}

      <div className="flex flex-col items-end sm:items-center"> 
        <p className="mb-3 font-bold">
          Total: {formatPrice(cart?.subtotal || 0)}
        </p>
          <Link href={"/checkout"} className="btn btn-primary sm:w-[250px]"> Checkout
          </Link>
      </div>
    </div>
  );
};

export default CartPage;
