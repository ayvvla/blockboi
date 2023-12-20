import React from "react";
import { Product } from "@prisma/client";
import Link from "next/link";
import PriceTag from "./PriceTag";
import Image from "next/image";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const isNew =
    Date.now() - new Date(product.createdAt).getTime() <
    1000 * 60 * 60 * 24 * 7;

  return (
    <div className="card w-full">
      <Link
        href={"/product/" + product.id}
        className=" hover:shadow-lg transition-shadow"
      >
        <figure>
          <Image
            src={product.imageUrl}
            alt={product.name}
            width={800}
            height={300}
            className="h-80 w-80 object-contain"
          />
        </figure>
      </Link>
      <div className="card-body py-4 pl-2 bg-[#f9f9f9] gap-1">
        <div className="flex justify-between items-center">
          <Link href={"/product/" + product.id} className="card-title link-primary">{product.name}</Link>
          {isNew && <div className="badge badge-secondary text-[8px]">NEW</div>}
        </div>

        {/* <p>{product.description}</p> */}
        <p>{product.category}</p>
        <PriceTag price={product.price} />
        
      </div>
    </div>

    //
  );
};

export default ProductCard;
