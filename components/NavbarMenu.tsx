"use client";
import UserMenuButton from "@/app/Navbar/UserMenuButton";
import Link from "next/link";
import { useState } from "react";
import { BiMenuAltRight, BiX } from "react-icons/bi";
import { useSession } from "next-auth/react";
import CartButton from "@/app/Navbar/CartButton";
import { ShoppingCart } from "@/lib/db/cart";

interface CartButtonProps {
  cart: ShoppingCart | null;
}

const NavbarMenu = ({cart} : CartButtonProps) => {
  const [nav, setNav] = useState(false);
  const { data: session } = useSession();
  
  return (
    <>
      <div
        className="cursor-pointer lg:hidden relative z-50"
        onClick={() => setNav(!nav)}
      >
        {nav ? <BiX size={50} /> : <BiMenuAltRight size={50} />}
      </div>

      <nav
        className={`${
          nav
            ? "max-h-max py-12 px-4 xl:py-0 xl:px-0 right-0 "
            : "max-h-max py-12 px-4 xl:py-0 xl:px-0 -right-[100%] "
        }
        flex flex-col justify-center items-center bg-base-100 text-zinc-800 overflow-hidden font-bold
         transition-all duration-300 text-center xl:text-center 
        uppercase text-4xl absolute w-[75%] min-h-[100vh] top-0 lg:hidden
        `}
      >
        <div className="absolute top-3 left-14 flex items-center gap-5">
          <UserMenuButton session={session} />
        
          <CartButton cart={cart} />
        </div>

        <ul className="flex flex-col gap-4 justify-center items-center">
          <span className="divider divider-primary w-[100vh]"></span>
          <li>
            <Link href="/store">Store</Link>
          </li>
          <span className="divider divider-primary w-[100vh]"></span>
          <li>
            <Link href="/store/Jackets">Jackets</Link>
          </li>
          <span className="divider divider-primary w-[100vh]"></span>
          <li className="whitespace-nowrap">
            <Link href="/store/T-Shirts">T-Shirts</Link>
          </li>
          <span className="divider divider-primary w-[100vh]"></span>
          <li>
            <Link href="/store/Hoodies">Hoodies</Link>
          </li>
          <span className="divider divider-primary w-[100vh]"></span>
          <li>
            <Link href="/store/Hats">Hats</Link>
          </li>
          <span className="divider divider-primary w-[100vh]"></span>
        </ul>
      </nav>
    </>
  );
};

export default NavbarMenu;
