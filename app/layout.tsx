import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import { getServerSession } from "next-auth";
import SessionProvider from "./SessionProvider";
import { authOptions } from "./api/auth/[...nextauth]/route";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Blockboi",
  description: "Fashion meets adventure!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = getServerSession(authOptions);
  return (
    <html lang="en">
      <body className={`w-[100%]  ${inter.className}`}>
        <div className="overflow-hidden">
          <SessionProvider>
            <Navbar />
            <main className="px-2 ">{children}</main>
            <Footer />
          </SessionProvider>
        </div>
      </body>
    </html>
  );
}
