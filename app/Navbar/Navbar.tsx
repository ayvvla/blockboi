import Image from "next/image";
import logo from "@/assets/logo.svg";
import Link from "next/link";
import { redirect } from "next/navigation";
import { getCart } from "@/lib/db/cart";
import CartButton from "./CartButton";
import UserMenuButton from "./UserMenuButton";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth/next";
import prisma from "@/lib/db/prisma";
import NavbarMenu from "@/components/NavbarMenu";

const searchProducts = async (formData: FormData) => {
  "use server";
  const searchQuery = formData.get("searchQuery")?.toString();

  if (searchQuery) {
    redirect("/search?query=" + searchQuery);
  }
};

const Navbar = async () => {
  const cart = await getCart();
  const session = await getServerSession(authOptions);

  return (
    <div className="bg-base-100 sticky top-0 z-10">
      <div className="navbar justify-between gap-x-0 items-center md:flex-row py-3 max-w-[90%] m-auto">
        <div className="">
          <Link href={"/"} className="w-40">
            <Image
              src={logo}
              width={140}
              height={100}
              alt="Blockboi logo"
              priority
            />
          </Link>
        </div>

        <nav className="hidden lg:flex mx-9 text-center">
          <ul className="flex gap-10 justify-between items-center text-sm">
            <li>
              <Link href="/store">Store</Link>
            </li>
            <li>
              <Link href="/store/Jackets">Jackets</Link>
            </li>
            <li className="whitespace-nowrap">
              <Link href="/store/T-Shirts">T-Shirts</Link>
            </li>
            <li>
              <Link href="/store/Hoodies">Hoodies</Link>
            </li>
            <li>
              <Link href="/store/Hats">Hats</Link>
            </li>
          </ul>
        </nav>

        <div className="hidden lg:flex gap-x-1 lg:gap-x-5">
          <form action={searchProducts}>
            <div className="form-control">
              <input
                name="searchQuery"
                placeholder="Search"
                className="input input-primary md:input-md w-[150px] md:min-w-[200px] focus:outline-none"
              />
            </div>
          </form>

          <CartButton cart={cart} />
          <UserMenuButton session={session} />
        </div>
        <NavbarMenu cart = {cart}/>
      </div>
    </div>
  );
};

export default Navbar;
