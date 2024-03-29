import prisma from "@/lib/db/prisma";
import { notFound } from "next/navigation";
import Image from "next/image";
import PriceTag from "@/components/PriceTag";
import { cache } from "react";
import AddToCartButton from "./AddToCartBtn";
import addCartButtonAction from "./actions";
import Link from "next/link";

interface ProductPageProps {
  params: {
    id: string;
  };
}

const getProduct = cache(async (id: string) => {
  const product = await prisma.product.findUnique({ where: { id } });
  if (!product) notFound();
  return product;
});

export const generateMetadata = async ({
  params: { id },
}: ProductPageProps) => {
  const product = await getProduct(id);
  return {
    title: product.name + "  ...Blockboi",
    description: product.description,
    openGraph: {
      images: [{ url: product.imageUrl }],
    },
  };
};

const ProductPage = async ({ params: { id } }: ProductPageProps) => {
  const product = await getProduct(id);
  return (
    <div className="flex flex-col gap-6 w-[90%] mx-auto my-6">
      {/*Bread crumb*/}
      <div className="text-sm breadcrumbs self-start">
        <ul>
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            <Link href={"/store"}>Store</Link>
          </li>
          <li>{product.name}</li>
        </ul>
      </div>

      <div className="flex flex-col lg:flex-row gap-5">
        <Image
          src={product.imageUrl}
          alt={product.name}
          width={500}
          height={500}
          className="rounded-lg self-center"
          priority
        />
        <div className="">
          <h1 className="text-3xl md:text-5xl font-bold">{product.name}</h1>
          <PriceTag price={product.price} className="mt-4" />
          <p className="py-6">{product.description}</p>
          <div className="flex justify-start items-center gap-10">
            <AddToCartButton
              productId={product.id}
              addCartButtonAction={addCartButtonAction}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
