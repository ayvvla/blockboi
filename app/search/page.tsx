import ProductCard from "@/components/ProductCard";
import Pagination from "@/components/pagination";
import prisma from "@/lib/db/prisma";

interface searchPageProps {
  searchParams: { query: string; page: string };
}

export const generateMetadata = ({searchParams : {query}} : searchPageProps) => {
  return {
    title: `Search: ${query} - Blockboi`
  }
}

const Search = async ({
  searchParams: { query},
}: searchPageProps) => {
  const products = await prisma.product.findMany({
    where: {
      OR: [
        { name: { contains: query, mode: "insensitive" } },
        { description: { contains: query, mode: "insensitive" } },
      ],
    },

    orderBy: { id: "desc" },
  });

  if (products.length === 0) {
    return <div className="text-center">No products found</div>;
  }

  return (
    <div className="flex flex-col text-center gap-6">
      <div className=" grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
        {products.map((product) => {
          return <ProductCard product={product} key={product.id} />;
        })}
      </div>
    </div>
  );
};

export default Search;
