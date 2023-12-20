import { error } from "console";
import React from "react";
import { LiaQuestionCircle } from "react-icons/lia";

export const metadata = {
  title: "Checkout - Blockboi",
};

const getCheckoutInfo = async (formData: FormData) => {
  "use server";
  const name = formData.get("name")?.toString();
  const email = formData.get("email")?.toString();
  const phone = formData.get("phone")?.toString();
  const address = formData.get("address")?.toString();
  const city = formData.get("city")?.toString();
  const state = formData.get("state")?.toString();

  console.log(name, email, phone, address, city, state);

  if (!email || !email || !address || !city || !state) {
    try {
      throw new Error("One of the required fields is missing");
    } catch (e: any) {
      console.log(e.message);
    }
  }

  console.log(error.name);
  console.log(name, email, phone, address, city, state);
};

const Checkout = () => {
  return (
    <>
      <div className="h-screen grid grid-cols-3">
        <div className="lg:col-span-2 col-span-3 bg-indigo-50 space-y-8 px-12">
          <div className="mt-8 p-4 relative flex flex-col sm:flex-row sm:items-center bg-white shadow rounded-md">
            <div className="flex flex-row items-center border-b sm:border-b-0 w-full sm:w-auto pb-4 sm:pb-0">
              <div className="text-yellow-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 sm:w-5 h-6 sm:h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div className="text-sm font-medium ml-3">Checkout</div>
            </div>
            <div className="text-sm tracking-wide text-gray-500 mt-4 sm:mt-0 sm:ml-4">
              Complete your shipping and payment details below.
            </div>
            <div className="absolute sm:relative sm:top-auto sm:right-auto ml-auto right-4 top-4 text-gray-400 hover:text-gray-800 cursor-pointer">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </div>
          </div>
          <div className="rounded-md">
            <form action={getCheckoutInfo}>
              <section>
                <h2 className="uppercase tracking-wide text-lg font-semibold text-gray-700 my-2">
                  Shipping & Billing Information
                </h2>
                <fieldset className="mb-3 bg-white shadow-lg rounded text-gray-600">
                  <label className="flex border-b border-gray-200 h-12 py-3 items-center">
                    <span className="text-right px-2">Name</span>
                    <input
                      name="name"
                      className="focus:outline-none px-3"
                      placeholder="Adekola"
                      required
                    />
                  </label>
                  <label className="flex border-b border-gray-200 h-12 py-3 items-center">
                    <span className="text-right px-2">Email</span>
                    <input
                      name="email"
                      type="email"
                      className="focus:outline-none px-3 w-3/6"
                      placeholder="email@example.com"
                      required
                    />
                  </label>
                  <label className="flex border-b border-gray-200 h-12 py-3 items-center">
                    <span className="text-right px-2">Address</span>
                    <input
                      name="address"
                      className="focus:outline-none px-3 w-5/6"
                      placeholder="10 Street XYZ 654"
                    />
                  </label>
                  <label className="flex border-b border-gray-200 h-12 py-3 items-center">
                    <span className="text-right px-2">City</span>
                    <input
                      name="city"
                      className="focus:outline-none px-3"
                      placeholder="Ikorodu"
                    />
                  </label>

                  <label className="flex border-t border-gray-200 h-12 py-3 items-center select pl-0 relative">
                    <span className="text-right px-2">State</span>
                    <select
                      name="state"
                      className="border-none bg-transparent flex-1 cursor-pointer appearance-none pl-3 focus:outline-none"
                      placeholder="Lagos"
                    >
                      <option value="" disabled>
                        {" "}
                      </option>
                      <option value="Abia">Abia</option>
                      <option value="FCT">Federal Capital Territory</option>
                      <option value="Adamawa">Adamawa</option>
                      <option value="Ibom">Akwa Ibom</option>
                      <option value="Bauchi">Bauchi</option>
                      <option value="Bauchi">Bauchi</option>
                      <option value="Benue">Benue</option>
                      <option value="Borno">Borno</option>
                      <option value="Cross River">Cross River</option>
                      <option value="Cross River">Cross River</option>
                      <option value="Ebonyi">Ebonyi</option>
                      <option value="Edo">Edo</option>
                      <option value="Enugu">Enugu</option>
                      <option value="Gombe">Gombe</option>
                      <option value="Imo">Imo</option>
                      <option value="Jigawa">Jigawa</option>
                      <option value="Kaduna">Kaduna</option>
                      <option value="Kano">Kano</option>
                      <option value="Katsina">Katsina</option>
                      <option value="Kebbi">Kebbi</option>
                      <option value="Kogi">Kogi</option>
                      <option value="Kwara">Kwara</option>
                      <option value="Lagos">Lagos</option>
                      <option value="Nasarawa">Nasarawa</option>
                      <option value="Niger">Niger</option>
                      <option value="Ogun">Ogun</option>
                      <option value="Ondo">Ondo</option>
                      <option value="Osun">Osun</option>
                      <option value="Oyo">Oyo</option>
                      <option value="Plateau">Plateau</option>
                      <option value="Rivers">Rivers</option>
                      <option value="Sokoto">Sokoto</option>
                      <option value="Taraba">Taraba</option>
                      <option value="Yobe">Yobe</option>
                      <option value="Zamfara">Zamfara</option>
                    </select>
                  </label>

                  <label className="flex border-b border-gray-200 h-12 py-3 items-center ">
                    <span className="text-right px-2">Phone Number</span>
                    <input
                      type="tel"
                      name="phone"
                      className="focus:outline-none focus:bg-none px-3 flex-1"
                      placeholder="812-3456-789"
                      pattern="[0-9]{4}-[0-9]{4}-[0-9]{3}"
                      maxLength={11}
                    />
                    <div
                      className="tooltip justify-self-end pr-6 block before:w-[10rem]"
                      data-tip="In case we need to contact you about your order"
                    >
                      <LiaQuestionCircle
                        size={20}
                        className="hover:cursor-pointer"
                      />
                    </div>
                  </label>
                </fieldset>
              </section>

              <div className="rounded-md">
                <section>
                  <h2 className="uppercase tracking-wide text-lg font-semibold text-gray-700 my-2">
                    Payment Information
                  </h2>
                  <fieldset className="mb-3 bg-white shadow-lg rounded text-gray-600">
                    <label className="flex border-b border-gray-200 h-12 py-3 items-center">
                      <span className="text-right px-2">Card</span>
                      <input
                        name="card"
                        className="focus:outline-none px-3 w-full"
                        placeholder="Card number MM/YY CVC"
                        required
                      />
                    </label>
                  </fieldset>
                </section>
              </div>
              <button className="submit-button px-4 py-3 mt-8 rounded-full bg-pink-400 text-white focus:ring focus:outline-none w-full text-xl font-semibold transition-colors">
                Pay €846.98
              </button>
            </form>
          </div>
        </div>

        <div className="col-span-1 bg-white lg:block hidden">
          <h1 className="py-6 border-b-2 text-xl text-gray-600 px-8">
            Order Summary
          </h1>
          <ul className="py-6 border-b space-y-6 px-8">
            <li className="grid grid-cols-6 gap-2 border-b-1">
              <div className="col-span-1 self-center">
                <img
                  src="https://bit.ly/3oW8yej"
                  alt="Product"
                  className="rounded w-full"
                />
              </div>
              <div className="flex flex-col col-span-3 pt-2">
                <span className="text-gray-600 text-md font-semi-bold">
                  Studio 2 Headphone
                </span>
                <span className="text-gray-400 text-sm inline-block pt-2">
                  Red Headphone
                </span>
              </div>
              <div className="col-span-2 pt-3">
                <div className="flex items-center space-x-2 text-sm justify-between">
                  <span className="text-gray-400">2 x €30.99</span>
                  <span className="text-pink-400 font-semibold inline-block">
                    €61.98
                  </span>
                </div>
              </div>
            </li>
            <li className="grid grid-cols-6 gap-2 border-b-1">
              <div className="col-span-1 self-center">
                <img
                  src="https://bit.ly/3lCyoSx"
                  alt="Product"
                  className="rounded w-full"
                />
              </div>
              <div className="flex flex-col col-span-3 pt-2">
                <span className="text-gray-600 text-md font-semi-bold">
                  Apple iPhone 13
                </span>
                <span className="text-gray-400 text-sm inline-block pt-2">
                  Phone
                </span>
              </div>
              <div className="col-span-2 pt-3">
                <div className="flex items-center space-x-2 text-sm justify-between">
                  <span className="text-gray-400">1 x €785</span>
                  <span className="text-pink-400 font-semibold inline-block">
                    €785
                  </span>
                </div>
              </div>
            </li>
          </ul>
          <div className="px-8 border-b">
            <div className="flex justify-between py-4 text-gray-600">
              <span>Subtotal</span>
              <span className="font-semibold text-pink-500">€846.98</span>
            </div>
            <div className="flex justify-between py-4 text-gray-600">
              <span>Shipping</span>
              <span className="font-semibold text-pink-500">Free</span>
            </div>
          </div>
          <div className="font-semibold text-xl px-8 flex justify-between py-8 text-gray-600">
            <span>Total</span>
            <span>€846.98</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
