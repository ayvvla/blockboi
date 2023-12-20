import ProductCard from "@/components/ProductCard";
import Pagination from "@/components/pagination";
import prisma from "@/lib/db/prisma";
import { Suspense } from "react";

interface searchPageProps {
  searchParams: { query: string; page: string };
}

export const generateMetadata = ({
  searchParams: { query },
}: searchPageProps) => {
  return {
    title: `Search: ${query} - Blockboi`,
  };
};

const Search = async ({ searchParams: { query } }: searchPageProps) => {
  const products = await prisma.product.findMany({
    where: {
      OR: [
        { name: { contains: query, mode: "insensitive" } },
        { description: { contains: query, mode: "insensitive" } },
        {category : {contains: query, mode: 'insensitive'}}
      ],
    },

    orderBy: { id: "desc" },
  });

  if (products.length === 0) {
    return <div className="text-center">No products found</div>;
  }

  return (
    <div className="flex flex-col w-[90%] mx-auto my-6">
      <h1 className="">
        Search result for - '<span className="font-semibold"> {query} </span> '
      </h1>
      <div className=" my-5 grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-6 gap-y-10">
        <Suspense fallback={<p className="loading loading-spinner"/>}>
        {products.map((product) => {
          return <ProductCard product={product} key={product.id} />;
        })}
        </Suspense>
      </div>
    </div>
  );
};

export default Search;
