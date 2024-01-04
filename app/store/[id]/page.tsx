import ProductCard from "@/components/ProductCard";
import prisma from "@/lib/db/prisma";

interface categoryPageProp {
  params: {
    id: string;
  };
}

const categoryPage = async ({ params: { id } }: categoryPageProp) => {
  const products = await prisma.product.findMany({
    where: { category: id },
  });

  return (
    <div className="flex flex-col items-center w-[90%] mx-auto">
        <span className="text-3xl font-bold mt-5 mb-14">{id}</span>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5">
        {products.map((product) => {
          return <ProductCard product={product} key={product.id}/>;
        })}
      </div>
    </div>
  );
};

export default categoryPage;
