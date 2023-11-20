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
    <Link
      href={"/product/" + product.id}
      className="card w-full bg-base-100 hover:shadow-xl transition-shadow"
    >
      <figure>
        <Image
          src={product.imageUrl}
          alt={product.name}
          width={800}
          height={400}
          className="h-48 object-cover"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{product.name}</h2>
        {isNew && <div className="badge badge-secondary">NEW</div>}

        <p>{product.description}</p>
        <PriceTag price={product.price} />
      </div>
    </Link>
    // <div>
    //   <div className="card w-96 bg-base-100 shadow-xl">
    //     <figure>
    //       <img
    //         src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
    //         alt="Shoes"
    //       />
    //     </figure>
    //     <div className="card-body">
    //       <h2 className="card-title">
    //         Shoes!
    //         <div className="badge badge-secondary">NEW</div>
    //       </h2>
    //       <p>If a dog chews shoes whose shoes does he choose?</p>
    //       <div className="card-actions justify-end">
    //         <div className="badge badge-outline">Fashion</div>
    //         <div className="badge badge-outline">Products</div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default ProductCard;
