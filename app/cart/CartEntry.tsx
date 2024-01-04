"use client";

import { CartItemWithProduct } from "@/lib/db/cart";
import formatPrice from "@/lib/format";
import Image from "next/image";
import Link from "next/link";
import { useTransition } from "react";

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
  const [isPending, startTransition] = useTransition();

  return (
    <div>
      <div className="flex flex-wrap gap-6 items-center">
        <Image
          src={product.imageUrl}
          alt={product.name}
          width={200}
          height={200}
        />
        <div className="flex flex-col gap-2">
          <Link href={"/product/" + product.id} className="font-bold">
            {product.name}
          </Link>
          <div>Price : {formatPrice(product.price)} </div>
          <div className=" flex items-center gap-2">
            Quantity :
            {/* <select
              className="select w-full max-w-[80px]"
              defaultValue={quantity}
              onChange={(e) => {
                const newQuantity = parseInt(e.target.value)
                startTransition(async () => {
                  await setProductQuantity(product.id, newQuantity)
                })
              }}
            >
              {quantityOptions}
            </select> */}
            <input
              type="number"
              name="quantity"
              defaultValue={quantity}
              max={30}
              className=" select-primary rounded-md px-2 w-full max-w-[80px] text-center focus:outline-none"
              onChange={(e) => {
                const newQuantity = parseInt(e.currentTarget.value);
                startTransition(async () => {
                  await setProductQuantity(product.id, newQuantity);
                });
              }}
            />
          </div>
          <div className="flex items-center gap-4">
            Total: {formatPrice(product.price * quantity)}
            {isPending && (
              <span className="loading loading-spinner loading-sm" />
            )}
          </div>
          <button
            className="btn btn-sm btn-error"
            onClick={() => {
              startTransition(async () => {
                await setProductQuantity(product.id, 0);
              });
            }}
          >
            Remove from cart
          </button>
        </div>
      </div>
      <div className="divider divider-neutral" />
    </div>
  );
};

export default CartEntry;
