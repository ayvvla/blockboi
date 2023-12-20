import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import { getServerSession } from "next-auth";
import SessionProvider from "./SessionProvider"
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
  const session = getServerSession(authOptions)
  return (
    <html lang="en">
      <body className={`w-[100%] ${inter.className}`}>
        <SessionProvider>
          <Navbar />
          <main className="px-0 py-4 min-w-[300px]">{children}</main>
          <Footer />
        </SessionProvider>
      </body>
    </html>
  );
}
