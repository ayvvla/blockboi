import ProductCard from "@/components/ProductCard";
import prisma from "@/lib/db/prisma";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Pagination from "@/components/pagination";

interface AppProp {
  searchParams: { page: string };
}

const Home = async ({ searchParams: { page = "1" } }: AppProp) => {
  const currrentPage = parseInt(page);

  const pageSize = 9;
  const heroItemCount = 1;

  const totalItemCount = await prisma.product.count();

  const totalPages = Math.ceil((totalItemCount - heroItemCount) / pageSize);

  const products = await prisma.product.findMany({
    orderBy: { id: "desc" },
    skip:
      (currrentPage - 1) * pageSize + (currrentPage === 1 ? 0 : heroItemCount),
    take: pageSize + (currrentPage === 1 ? heroItemCount : 0),
  });

  return (
    <div className="flex flex-col items-center">
      {currrentPage === 1 && (
        <div className="hero rounded-xl bg-base-200">
          <div className="hero-content flex-col lg:flex-row">
            <Image
              src={products[0].imageUrl}
              alt={products[0].name}
              width={400}
              height={800}
              className="w-full max-w-sm rounded-lg shadow-2xl"
              priority
            />
            <div>
              <h1 className="text-5xl font-bold">{products[0].name}</h1>
              <p className="py-6">{products[0].description}</p>
              <Link
                href={"/products/" + products[0].id}
                className="btn btn-primary"
              >
                Check it out
              </Link>
            </div>
          </div>
        </div>
      )}
      <div className="my-4 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {(currrentPage === 1 ? products.slice(1) : products).map((product) => {
          return <ProductCard product={product} key={product.id} />;
        })}
      </div>
      {totalPages > 1 && (
        <Pagination currentPage={currrentPage} totalPages={totalPages} />
      )}
    </div>
  );
};

export default Home;
