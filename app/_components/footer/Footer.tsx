import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
  FaTelegramPlane,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer
      className="relative mt-40 text-white w-full "
      style={{
        backgroundImage: "url('/imgs/footer-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70 " />

      {/* Content */}
      <div className="relative  z-10  mx-auto md:px-26 lg:px-30 px-7 py-17">
        <div className="flex justify-between gap-10 flex-col lg:flex-row">
          {/* Logo & Description */}
          <div className="lg:max-w-1/4">
            <div className="flex items-center gap-2 mb-4">
              <Image src="/Logo-1.png" alt="tinytales" width={80} height={35} />
            </div>
            <p className="text-sm text-white/80 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
              sed diam nonummy dolor sit amet, consectetuer adipiscing elit, sed
              diam nonummy
            </p>
          </div>

          <div className="flex lg:flex-row flex-row-reverse gap-10 justify-between md:justify-evenly lg:justify-between">
            {/* Help */}
            <div>
              <h4 className="mb-6 text-xl font-semibold">Let Us Help</h4>
              <ul className="space-y-3 text-sm text-white/80">
                <li>
                  <Link href="#">My Account</Link>
                </li>
                <li>
                  <Link href="#">FAQs</Link>
                </li>
                <li>
                  <Link href="#">Contact & Support</Link>
                </li>
                <li>
                  <Link href="#">Categories</Link>
                </li>
                <li>
                  <Link href="#">All Products</Link>
                </li>
              </ul>
            </div>

            {/* Policies */}
            <div className="hidden lg:block">
              <h4 className="mb-6 text-2xl font-semibold">Policies</h4>
              <ul className="space-y-3 text-sm text-white/80">
                <li>
                  <Link href="#">Refund Policy</Link>
                </li>
                <li>
                  <Link href="#">About Us</Link>
                </li>
                <li>
                  <Link href="#">Cancellation Policy</Link>
                </li>
                <li>
                  <Link href="#">Terms & Conditions</Link>
                </li>
                <li>
                  <Link href="#">Privacy Policy</Link>
                </li>
              </ul>
            </div>

            {/* Contact Us - Mobile only */}
            <div className="block lg:hidden">
              <h4 className="mb-6 text-2xl font-semibold">Contact Us</h4>
              <ul className="space-y-4 text-sm text-white/80">
                <li className="flex items-center gap-3">
                  <FaWhatsapp /> <Link href="#">+87 01928491</Link>
                </li>
                <li className="flex items-center gap-3">
                  <FaTelegramPlane /> <Link href="#">named@gmail.com</Link>
                </li>
                <li className="flex items-center gap-3">
                  <FaLinkedinIn /> <Link href="#">381, Cairo, Egypt</Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Email */}
          <div className=" w-full lg:w-1/3 xl:w-1/4">
            <h4 className="mb-6 text-2xl font-semibold">Send Email</h4>

            <div className="flex relative items-center w-full bg-white rounded-2xl  ">
              <input
                type="email"
                placeholder="Email address"
                className="flex-1 px-3 py-5 text-sm text-black outline-none"
              />
              <button className="bg-[#c8a39b] px-10 font-semibold py-3 text-md  rounded-2xl absolute right-2 top-1/2 -translate-y-1/2">
                Send
              </button>
            </div>

            {/* Social */}
            <div className="mt-6">
              <p className="mb-3 md:text-lg text-2xl font-semibold">Follow Us</p>
              <div className="flex gap-4  text-2xl font-semibold">
                <FaFacebookF />
                <FaTwitter />
                <FaInstagram />
                <FaLinkedinIn />
                <FaWhatsapp />
                <FaTelegramPlane />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
