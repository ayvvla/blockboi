import CheckoutOrderEntry from "@/components/CheckoutOrderEntry";
import { getCart } from "@/lib/db/cart";
import formatPrice from "@/lib/format";
import { LiaQuestionCircle } from "react-icons/lia";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";

export const metadata = {
  title: "Checkout - Blockboi",
};

const Checkout = async () => {
  let cart = await getCart();
  const session = await getServerSession(authOptions);

  const onCheckout = async (formData: FormData) => {
    "use server";
    const name = session
      ? session?.user.name
      : formData.get("name")?.toString();
    const email = formData.get("email")?.toString();
    const phone_number = formData.get("number")?.toString();

    const config = {
      tx_ref: Date.now().toString(),
      amount: 50000,
      currency: "NGN",
      redirect_url: "http://localhost:3000/confirmation",
      payment_options: "card,mobilemoney,ussd",
      customer: {
        email: email,
        phone_number: phone_number,
        name: name,
      },
      customizations: {
        title: "Blockboi",
        description: "Payment for items in cart",
        logo: "https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg",
      },
    };

    const response = await fetch("https://api.flutterwave.com/v3/payments", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.FLW_SECRETKEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(config),
    });

    const result = await response.json();
    if (result) {
      console.log(result);
      redirect(result.data.link);
    }
    console.log(result);
  };

  return (
    <>
      <div className="h-screen grid grid-cols-3">
        <div className="lg:col-span-2 col-span-3 bg-indigo-50 space-y-8 md:px-12">
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
            <form action={onCheckout}>
              <section>
                <h2 className="uppercase tracking-wide text-lg font-semibold text-gray-700 my-2">
                  Shipping Information
                </h2>
                <p>Have an account? Log in</p>
                <fieldset className="mb-3 bg-white shadow-lg rounded text-gray-600">
                  <label className="flex border-b border-gray-200 h-12 py-3 items-center">
                    <span className="text-right px-2">Name</span>
                    <input
                      name="name"
                      defaultValue={`${session ? session?.user.name : ""}`}
                      className="focus:outline-none px-3"
                      placeholder="Adekola Chinedu"
                      required
                    />
                  </label>
                  <label className="flex border-b border-gray-200 h-12 py-3 items-center">
                    <span className="text-right px-2">Email</span>
                    <input
                      name="email"
                      type="email"
                      defaultValue={`${session ? session?.user.email : ""}`}
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
                      required
                    />
                  </label>
                  <label className="flex border-b border-gray-200 h-12 py-3 items-center">
                    <span className="text-right px-2">City</span>
                    <input
                      name="city"
                      className="focus:outline-none px-3"
                      placeholder="Ikorodu"
                      required
                    />
                  </label>

                  <label className="flex border-t border-gray-200 h-12 py-3 items-center select pl-0 relative">
                    <span className="text-right px-2">State</span>
                    <select
                      name="state"
                      className="border-none bg-transparent flex-1 cursor-pointer appearance-none pl-3 focus:outline-none"
                      placeholder="Lagos"
                      required
                    >
                      <option defaultValue="" disabled>
                        State
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
                      <option value="Cross River">Delta</option>
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
                      maxLength={20}
                      required
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

              <div className="rounded-md mt-8 shadow-md p-10">
                <p className="text-center text-gray-800">
                  After clicking “Pay now”, you will be redirected to
                  Flutterwave to complete your purchase securely.
                </p>
              </div>

              <div className="submit px-4 py-3 mt-24  rounded-md bg-accent hover:bg-secondary text-white text-center focus:ring focus:outline-none w-full text-xl font-semibold transition-colors cursor-pointer">
                <button>Pay Now</button>
              </div>
            </form>
          </div>
        </div>

        <div className="col-span-1 bg-white lg:block hidden">
          <h1 className="py-6 border-b-2 text-xl text-gray-600 px-8">
            Order Summary
          </h1>

          {cart?.items.map((item) => {
            return (
              <ul className="py-6 border-b space-y-6 px-8" key={item.id}>
                <CheckoutOrderEntry item={item} />
              </ul>
            );
          })}

          <div className="px-8 border-b">
            <div className="flex justify-between py-4 text-gray-600">
              <span>Subtotal</span>
              <span className="font-semibold text-pink-500">
                {formatPrice(cart?.subtotal || 0)}
              </span>
            </div>
            <div className="flex justify-between py-4 text-gray-600">
              <span>Shipping</span>
              <span className="font-semibold text-pink-500">Free</span>
            </div>
          </div>
          <div className="font-semibold text-xl px-8 flex justify-between py-8 text-gray-600">
            <span>Total</span>
            <span>{formatPrice(cart?.subtotal || 0)}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
