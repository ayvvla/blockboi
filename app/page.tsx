import ProductCard from "@/components/ProductCard";
import prisma from "@/lib/db/prisma";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Pagination from "@/components/pagination";
import NewArrivals from "@/components/NewArrivals";
import FeaturedProducts from "@/components/FeaturedProducts";
import Hero from "@/components/Hero";
import { TbTruckDelivery } from "react-icons/tb";
import { GiWorld, GiClothes } from "react-icons/gi";
import { RiCustomerService2Line, RiSecurePaymentLine } from "react-icons/ri";

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
    <>
      <Hero />
      <div className="flex flex-col items-center w-[90%] mx-auto">
        {/* New Arrivals  */}

        <div className="mt-8">
          <NewArrivals />
        </div>

        {/* Featured Products */}
        <div className="mt-10">
          <FeaturedProducts />
        </div>

        {/* <h1 className="text-4xl font-extrabold">DUNNO</h1>
      <div className="my-4 grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 gap-y-10">
        {(currrentPage === 1 ? products.slice(1) : products).map((product) => {
          return <ProductCard product={product} key={product.id} />;
        })}
      </div>
      {totalPages > 1 && (
        <Pagination currentPage={currrentPage} totalPages={totalPages} />
      )} */}
      </div>
      <div className="flex flex-wrap md:flex-nowrap justify-center items-center gap-x-10 w-full bg-base-100 mt-10 py-16 text-gray-600">
        <div className="flex flex-col items-center gap-y-2">
          <div>
            <TbTruckDelivery size={70} />
          </div>
          <h1>Free Delivery</h1>
          <p>On orders worth above ₦50k above</p>
        </div>
        <div className="flex flex-col items-center gap-y-2">
          <div>
            <GiWorld size={70} />
          </div>
          <h1>Shipping</h1>
          <p>We ship locally and globally</p>
        </div>
        <div className="flex flex-col items-center gap-y-2">
          <div>
            <GiClothes size={70} />
          </div>
          <h1>Best Quality</h1>
          <p>We use high quality materials only</p>
        </div>
        <div className="flex flex-col items-center gap-y-2">
          <div>
            <RiCustomerService2Line size={70} />
          </div>
          <h1>24/7 Support</h1>
          <p>We offer 24/7 customer support</p>
        </div>
        <div className="flex flex-col items-center gap-y-2">
          <div>
            <RiSecurePaymentLine size={70}  />
          </div>
          <h1>Secure Payments</h1>
          <p>128bit secure payment gateway</p>
        </div>
      </div>
    </>
  );
};

export default Home;
