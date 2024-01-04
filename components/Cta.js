import React from "react";
import tshirt from "../assets/tshirt.png";
import hoodie from "../assets/hoodie.png";
import jacket from "../assets/jacket.png";
import Image from "next/image";
import Link from "next/link";

const Cta = () => {
  return (
    <div className=" bg-base-100 py-24 px-3">
      <div className="flex flex-col md:flex-wrap lg:flex-row w-full justify-center items-center gap-16">
        <div className="card items-center overflow-hidden">
          <figure>
            <Image
              src={hoodie}
              height={300}
              width={300}
              alt="Block.boi Hoodies"
              className="h-96 w-auto"
            />
          </figure>

          <div className="absolute transform -rotate-45 bg-accent text-center text-neural font-semibold py-1 left-[-34px] top-[32px] w-[170px]">
            PREMIUM
          </div>

          <div className="card-body bg-info max-w-4xl lg:max-w-sm">
            <h1 className="card-title">Blockboi Luxe Hoodies</h1>
            <p>
              Wear this sweatshirt as your casual look, for Jogging and Gym.
            </p>
            <button className="btn btn-neutral rounded-md w-5/12 mt-4">
              <Link href={"/store/Hoodies"}> Shop Now </Link>
            </button>
          </div>
        </div>
        <div className="card items-center overflow-hidden">
          <Image
            src={tshirt}
            height={300}
            width={300}
            priority='false'
            className="h-96 w-auto"
            alt="Block.boi T-Shirt"
          />

          <div className="absolute transform rotate-45 bg-accent text-center text-neural font-semibold py-1 right-[-34px] top-[32px] w-[170px]">
            NEW ARRIVALS
          </div>

          <div className="card-body bg-info max-w-4xl lg:max-w-sm">
            <h1 className="card-title">Blockboi Matty T-Shirts</h1>
            <p>
              Wear this sweatshirt as your casual look, for Jogging and Gym.
            </p>
            <button className="btn btn-neutral rounded-md w-5/12 mt-4">
              <Link href={"/store/T-Shirts"}> Shop Now </Link>
            </button>
          </div>
        </div>
        <div className="card items-center overflow-hidden">
          <Image
            src={jacket}
            height={300}
            width={300}
            alt="Block.boi Jackets"
            className="h-96 w-auto"
          />
          <div className="card-body bg-info max-w-4xl lg:max-w-sm">
            <h1 className="card-title">Blockboi Striped Jacket</h1>
            <p>
              Wear this sweatshirt as your casual look, for Jogging and Gym.
            </p>
            <button className="btn btn-neutral rounded-md w-5/12 mt-4">
              <Link href={"/store/Jackets"}> Shop Now </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cta;
