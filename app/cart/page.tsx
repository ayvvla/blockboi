import { getCart } from "@/lib/db/cart";
import React from "react";
import CartEntry from "./CartEntry";
import { setProductQuantity } from "./action";

export const metadata = {
  title : "Your Shopping Cart - Blockboi"
}

const CartPage = async() => {
  const cart = await getCart()

  return (
    <div>
      <h1 className="text-3xl mb-6font-bold ">Shopping Cart</h1>
      {cart?.items.map((cartItem) => {
        return <CartEntry cartItem={cartItem} key={cartItem.id} setProductQuantity={setProductQuantity}/>
      })}
    </div>
  );
};

export default CartPage;
