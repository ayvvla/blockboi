import Link from "next/link";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { FaInstagram, FaTwitter, FaFacebook, FaWhatsapp } from "react-icons/fa";

const Footer = async () => {
  const session = await getServerSession(authOptions);

  return (
    <footer className="bg-neutral py-10 px-6 text-neutral-content">
      <div className="footer grid-cols-1 md:grid-cols-4 m-auto max-w-[90%]">
        <div>
          <span className="footer-title">Services</span>
          <a className="link-hover link">Branding</a>
          <a className="link-hover link">Design</a>
          <a className="link-hover link">Marketing</a>
          <a className="link-hover link">Advertisement</a>
          <a className="link-hover link">Privacy policy</a>
          <a className="link-hover link">Terms of use </a>

          {session && session?.user.role === "admin" && (
            <Link href="admin/add-product">Add product</Link>
          )}
        </div>

        <div className="">
          <span className="footer-title">Company</span>
          <a className="link-hover link">About us</a>
          <a className="link-hover link">Contact</a>
          <a className="link-hover link">Jobs</a>
          <a className="link-hover link">Press kit</a>
        </div>

        <div className="lg:footer-center gap-y-4 ">
          <span className="footer-title">Contact</span>
          <a
            href="mailto:blockboicouture@gmail.com"
            className="link-hover link text-xs lg:text-sm"
          >
            blockboicouture@gmail.com
          </a>
          <a href="tel:9021080632" className="link-hover link">
            +234 902 1080 632
          </a>
          <div className="flex gap-x-3">
            <a href="#" className="link">
              <FaInstagram size={30} />
            </a>
            <a>
              <FaFacebook size={30} />
            </a>
            <a>
              <FaTwitter size={30} />
            </a>
            <a href="https://wa.me/9021080632" target="_blank">
              <FaWhatsapp size={30} />
            </a>
          </div>
        </div>

        <div className="">
          <span className="footer-title">Newsletter</span>
          <h1>Get Product updates & Offers directly to your inbox now</h1>
          <form className="flex flex-col gap-y-5 w-full mt-5">
            <input
              name="name"
              type="text"
              placeholder="Name"
              className="input input-primary w-full"
            />
            <input
              name="mail"
              type="Email"
              placeholder="Email"
              className="input input-primary"
            />
            <button className="btn btn-info w-24">Subscribe</button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
