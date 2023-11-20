"use client";

import { CartItemWithProduct } from "@/lib/db/cart";
import formatPrice from "@/lib/format";
import Image from "next/image";
import Link from "next/link";
import { startTransition, useTransition } from "react";

interface CartEntryProps {
  cartItem: CartItemWithProduct;
  setProductQuantity: (productId: string, quantity: number) => void;
}

const CartEntry = ({
  cartItem: { product, quantity },
  setProductQuantity,
}: CartEntryProps) => {
  const quantityOptions: JSX.Element[] = [];
  for (let i = 1; i <= 99; i++) {
    quantityOptions.push(
      <option value={i} key={i}>
        {i}
      </option>
    );
  }
  const { isPending, startTransition } = useTransition();
  return (
    <div>
      <div className="flex flex-wrap gap-4 items-center">
        <Image
          src={product.imageUrl}
          alt={product.name}
          width={200}
          height={200}
          className="rounded-lg"
        />
        <div>
          <Link href={"/product/" + product.id} className="font-bold">
            {product.name}
          </Link>
          <div>Price : {formatPrice(product.price)} </div>
          <div className="my-1 flex items-center gap-2">
            Quantity :
            {/* <select
              className="select w-4 max-w-[80px]"
              defaultValue={quantity}
            ></select> */}
            <input
              type="number"
              name="quantity"
              defaultValue={quantity}
              max={30}
              className=" select-ghost w-full max-w-[80px] text-center focus:outline-none"
              onChange={(e) => {
                const newQuantity = parseInt(e.currentTarget.value);
                start
              }}
            />
          </div>
          <div className="flex items-center gap-3">
            Total: {formatPrice(product.price * quantity)}
          </div>
        </div>
        <div className="divider" />
      </div>
    </div>
  );
};

export default CartEntry;
