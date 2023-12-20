"use client";
import Link from "next/link";
import React, { FormEvent, useState } from "react";
import { signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";
import Image from "next/image";
import cut from '/assets/hero.jpg'
import { useRouter } from "next/navigation";

const loginPage = () => {
  const router = useRouter()
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const loginUser = (e: FormEvent) => {
    e.preventDefault();
    signIn("credentials", {
      ...data,
      callbackUrl: '/cart'
    });
  };

  const googleLogin = (e: FormEvent) => {
    e.preventDefault();
    signIn("google", {
      callbackUrl : '/'
    });
  };

  return (
    <div>
      {/* component */}
      <div className="bg-gray-100 flex justify-center items-center h-screen">
        <div className="w-1/2 h-screen hidden lg:block">
          <Image src={cut} alt="Login hero" height={300} width={300}
          className=" w-auto h-full object-cover"
           priority 
          />
        </div>

        <div className="lg:p-36 md:p-52 sm:p-20 p-8 w-full lg:w-1/2">
          <h1 className="text-3xl font-semibold mb-6 text-black text-center">
            Login
          </h1>

          <form onSubmit={loginUser}>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email" 
                name="email"
                value={data.email}
                onChange={(e) => {
                  setData({ ...data, email: e.target.value });
                }}
                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                autoComplete="off"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={data.password}
                onChange={(e) => setData({ ...data, password: e.target.value })}
                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                autoComplete="off"
              />
            </div>

            <div className="mb-4 flex items-center">
              <input
                type="checkbox"
                id="remember"
                name="remember"
                className="text-blue-500"
              />
              <label htmlFor="remember" className="text-gray-600 ml-2">
                Remember Me
              </label>
            </div>

            <div className="mb-6 text-gray-600">
              <a href="#" className="hover:underline">
                Forgot Password?
              </a>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full bg-black text-white p-2 rounded-md hover:bg-gray-800 focus:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 transition-colors duration-300"
            >
              Login
            </button>
          </form>

          <div className="mt-6">
            <span className="divider divider-info text-gray-600">OR</span>
            <div className="w-full mb-2 lg:mb-0">
              <button
                type="button"
                onClick={googleLogin}
                className="w-full flex justify-center items-center gap-2 bg-white text-sm text-gray-600 p-2 rounded-md hover:bg-gray-100 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-200 transition-colors duration-300"
              >
                <FcGoogle size={20} />
                Continue with Google
              </button>
            </div>
          </div>

          {/* Sign up  Link  */}
          <div className="mt-6 text-sm text-gray-600 text-center">
            <p>
              Don't have an account?{" "}
              <Link href="/register" className="text-black hover:underline">
                {" "}
                Sign up Here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default loginPage;
