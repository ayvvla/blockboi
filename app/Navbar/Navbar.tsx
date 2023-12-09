import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/logo.svg";
import { redirect } from "next/navigation";
import { getCart } from "@/lib/db/cart";
import CartButton from "./CartButton";
import UserMenuButton from "./UserMenuButton";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth/next";

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
    <div className="bg-base-100">
      <div className="navbar max-w-7xl m-auto flex-col sm:flex-row gap-2">
        <div className="flex-1">
          <Link href={"/"}>
            <Image src={logo} width={140} height={100} alt="Blockboi logo" />
          </Link>
        </div>
        <div className="flex-gap-2">
          <form action={searchProducts}>
            <div className="form-control">
              <input
                name="searchQuery"
                placeholder="Search"
                className="input input-bordered w-full min-w-[200px] focus:outline-none"
              />
            </div>
          </form>
          <CartButton cart={cart} />
          <UserMenuButton session={session} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
