"use client";
import UserMenuButton from "@/app/Navbar/UserMenuButton";
import Link from "next/link";
import { FormEvent, useState } from "react";
import { BiMenuAltRight, BiX } from "react-icons/bi";
import { useSession } from "next-auth/react";
import CartButton from "@/app/Navbar/CartButton";
import { ShoppingCart } from "@/lib/db/cart";
import { CiSearch } from "react-icons/ci";
import { useRouter } from "next/navigation";
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa";

interface CartButtonProps {
  cart: ShoppingCart | null;
}

const NavbarMenu = ({ cart }: CartButtonProps) => {
  const router = useRouter();
  const [nav, setNav] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const { data: session } = useSession();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    router.push("/search?query=" + searchQuery);
  };

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
            ? "max-h-max py-12 px-4 right-0 "
            : "max-h-max py-12 px-4 -right-[100%] "
        } flex flex-col justify-center items-center bg-[#f1f2e4] text-zinc-800 overflow-hidden font-bold transition-all 
          duration-300 text-center xl:text-center uppercase text-4xl absolute w-[100%] h-[100vh] top-0 lg:hidden`}
      >
        <div className="absolute top-3 left-1 flex items-center px-2">
          <UserMenuButton session={session} />

          <CartButton cart={cart} />

          <div>
            <form
              className=" flex input input-primary input-sm focus:outline-0 focus:border-0 flex-1 ml-3"
              onSubmit={handleSubmit}
            >
              <input
                placeholder="Search..."
                type="text"
                name="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="  focus:outline-0 focus:border-0 max-w-[120px]"
              />
              <button>
                <CiSearch size={25} />
              </button>
            </form>
          </div>
        </div>

        <ul className="flex flex-col gap-1 justify-center items-center" onClick={() => setNav(false)}>
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
        </ul>

        <div className="flex gap-x-3 absolute bottom-8">
          <a href="https://instagram/boion.theblock" target="_blank" className="link">
            <FaInstagram size={30} />
          </a>
          <a href="https://facebook/boion.theblock" target="_blank">
            <FaFacebook size={30} />
          </a>
          <a href="https://twitter/boion.theblock" target="_blank">
            <FaTwitter size={30} />
          </a>
          <a href="https://wa.me/9021080632" target="_blank">
            <FaWhatsapp size={30} />
          </a>
        </div>
      </nav>
    </>
  );
};

export default NavbarMenu;
