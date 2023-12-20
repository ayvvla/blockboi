import React from "react";
import { Montserrat, Poppins, Source_Sans_3 } from "next/font/google";
import prisma from "@/lib/db/prisma";
import ProductCard from "./ProductCard";

const fira = Montserrat({ subsets: ["latin"], weight: "700" });

const NewArrivals = async () => {
  const featuredProducts = await prisma.product.findMany({
    orderBy: { createdAt: "asc" },
    take: 15,
  });

  return (
    <>
      <h1
        className={`text-4xl mb-6 text-center text-gray-700  font-semibold relative ${fira.className}`}
      >
        Featured Products
      </h1>
      <div className="divider divider-neutral w-32 mx-auto"></div>
      <div className="my-10 grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-10 gap-y-10">
        {featuredProducts.map((product) => {
          return <ProductCard product={product} key={product.id} />;
        })}
      </div>
    </>
  );
};

export default NewArrivals;
