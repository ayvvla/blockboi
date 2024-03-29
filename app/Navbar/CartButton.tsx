"use client";
import { ShoppingCart } from "@/lib/db/cart";
import formatPrice from "@/lib/format";
import Link from "next/link";

interface CartButtonProps {
  cart: ShoppingCart | null;
}
const CartButton = ({ cart }: CartButtonProps) => {
  const closeDropdown = () => {
    const elem = document.activeElement as HTMLElement
    if(elem) {
      elem.blur()
    }
  }
  return (
    <div className="dropdown lg:dropdown-end dropdown-bottom">
      <label tabIndex={0} className="btn-ghost btn-circle btn">
        <div className="indicator">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6 lg:w-9 lg:h-9"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
            />
          </svg>

          <span className="badge badge-sm indicator-item">
            {cart?.size || 0}
          </span>
        </div>
      </label>
      <div
        tabIndex={0}
        className="card dropdown-content card-compact mt-3 w-52 bg-base-100
      shadow z-30"
      >
        <div className="card-body">
          <span className="text-lg font-bold"> {cart?.size || 0} items</span>
          <span className="text-info">
            Subtotal : {formatPrice(cart?.subtotal || 0)}
          </span>
          <div className="card-actions">
            <Link href={"/cart"} className="btn btn-primary btn-block" onClick={closeDropdown}>
              View Cart
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartButton;
