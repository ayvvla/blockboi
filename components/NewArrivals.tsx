import React from "react";
import { Montserrat, Poppins, Source_Sans_3 } from "next/font/google";
import prisma from "@/lib/db/prisma";
import ProductCard from "./ProductCard";

const fira = Montserrat({ subsets: ["latin"], weight: "700" });

const NewArrivals = async () => {
  const newProducts = await prisma.product.findMany({
    orderBy: { createdAt: "desc" },
    take: 10,
  });

  return (
    <>
      <h1
        className={`text-4xl text-center mb-6 text-gray-700 font-semibold relative ${fira.className}`}
      >
        New Arrivals
      </h1>
      <div className="divider divider-neutral w-20 mx-auto"></div>
      <div className="my-10 grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-6 gap-y-10">
        {newProducts.map((product) => {
          return <ProductCard product={product} key={product.id} />;
        })}
      </div>
    </>
  );
};

export default NewArrivals;
