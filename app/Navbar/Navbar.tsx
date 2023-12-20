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

const searchProducts = async (formData: FormData) => {
  "use server";
  const searchQuery = formData.get("searchQuery")?.toString();

  if (searchQuery) {
    redirect("/search?query=" + searchQuery);
  }
};

const Navbar = async () => {
  const products = await prisma.product.findMany();
  /* Get array of unique product.categories items */
  let categories = products
    .map((product) => product.category)
    .filter((item, i, ar) => {
      return ar.indexOf(item) === i;
    });
    const category = categories.slice(0,4)

  const cart = await getCart();
  const session = await getServerSession(authOptions);

  return (
    <div className="bg-base-100 max-w-[100%] sticky top-0 z-10">
      <div className="navbar flex-col sm:flex-row gap-2 py-3 max-w-[90%] m-auto">
        <div className="flex-1">
          <Link href={"/"}>
            <Image src={logo} width={140} height={100} alt="Blockboi logo" />
          </Link>
        </div>
        <div className="flex-1">
          <ul className="flex gap-7">
            <li>
              <Link href="/store">Store</Link>
            </li>
            {category.map((cat, i) => {
              return (
                <li key={i}>
                  {" "}
                  <Link href={`/category/${cat}`}> {cat} </Link>{" "}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="flex-1 gap-4">
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
