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

  const pageSize = 12;
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
    <div className="flex flex-col items-center mx-auto w-[90%] mb-6">
      {/* Bread Crumb*/}
      <div className="text-sm breadcrumbs self-start">
        <ul>
          <li>
            <Link href={'/'}>Home</Link>
          </li>
          <li>
            Store
          </li>
        </ul>
      </div>

      {currrentPage === 1 && (
        <div className="hero rounded-xl bg-base-200">
          <div className="hero-content flex-col md:flex-row md:gap-10">
            <Image
              src={products[0].imageUrl}
              alt={products[0].name}
              width={400}
              height={800}
              className="w-full max-w-sm rounded-lg shadow-2xl"
              priority
            />
            <div className="text-center md:text-start">
              <h1 className="text-2xl md:text-4xl font-bold">{products[0].name}</h1>
              <p className="py-3 md:py-6">{products[0].description}</p>
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

      <div className="my-10 grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-6 gap-y-10">
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
