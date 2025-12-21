"use client";

import Logo from "@/app/_components/ui/Logo";
import { useState, useRef, useEffect } from "react";
import {
  FaHome,
  FaList,
  FaInfoCircle,
  FaPhone,
  FaQuestionCircle,
  FaShoppingBag,
  FaFileInvoice,
  FaHeart,
  FaUser,
  FaGlobe,
  FaBars,
  FaTimes,
} from "react-icons/fa";

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [userOpen, setUserOpen] = useState(false);

  const langRef = useRef<HTMLDivElement>(null);
  const userRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(event.target as Node)) {
        setLangOpen(false);
      }
      if (userRef.current && !userRef.current.contains(event.target as Node)) {
        setUserOpen(false);
      }
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="w-full bg-white shadow-md px-4 sm:py-3 md:px-20 md:py-4 flex items-center justify-between transition-all duration-300">
      {/* LEFT (Logo + Links) */}
      <div className="hidden md:flex items-center gap-6 lg:gap-8">
        <Logo width={60} height={13} />

        <NavItem icon={<FaHome className="text-lg" />} text="Home" />
        <NavItem icon={<FaList className="text-lg" />} text="Our Category" />
        <NavItem icon={<FaInfoCircle className="text-lg" />} text="About Us" />
        <NavItem icon={<FaPhone className="text-lg" />} text="Contact Us" />
        <NavItem icon={<FaQuestionCircle className="text-lg" />} text="FAQs" />
      </div>

      {/* RIGHT (Icons) */}
      <div className="hidden md:flex items-center gap-4 lg:gap-5">
        <FaShoppingBag
          className="cursor-pointer text-xl text-gray-600 hover:text-indigo-600 transition-colors"
          aria-label="Shopping Bag"
        />
        <FaFileInvoice
          className="cursor-pointer text-xl text-gray-600 hover:text-indigo-600 transition-colors"
          aria-label="Invoice"
        />
        <FaHeart
          className="cursor-pointer text-xl text-gray-600 hover:text-indigo-600 transition-colors"
          aria-label="Wishlist"
        />

        {/* Language Dropdown */}
        <div className="relative" ref={langRef}>
          <button
            onClick={() => setLangOpen(!langOpen)}
            className="flex items-center gap-1 text-gray-600 hover:text-indigo-600 transition-colors"
            aria-label="Select Language"
            aria-expanded={langOpen}
          >
            <FaGlobe className="text-xl" />
            <span className="text-sm font-medium">EN</span>
          </button>
          {langOpen && (
            <div className="absolute right-0 mt-2 w-28 bg-white border border-gray-200 shadow-lg rounded-md overflow-hidden z-10">
              <button className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition-colors">
                EN
              </button>
              <button className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition-colors">
                AR
              </button>
            </div>
          )}
        </div>

        {/* User Dropdown */}
        <div className="relative" ref={userRef}>
          <button
            onClick={() => setUserOpen(!userOpen)}
            className="text-gray-600 hover:text-indigo-600 transition-colors"
            aria-label="User Menu"
            aria-expanded={userOpen}
          >
            <FaUser className="text-xl" />
          </button>
          {userOpen && (
            <div className="absolute right-0 mt-2 w-32 bg-white border border-gray-200 shadow-lg rounded-md overflow-hidden z-10">
              <button className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition-colors">
                Login
              </button>
              <button className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition-colors">
                Logout
              </button>
            </div>
          )}
        </div>
      </div>

      {/* MOBILE */}
      <div className="flex md:hidden w-full items-center justify-between">
        <Logo width={60} height={32} />

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-gray-800 hover:text-indigo-600 transition-colors"
          aria-label="Toggle Menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div
          ref={menuRef}
          className="absolute top-13 left-0 w-full bg-white border-t border-gray-200 shadow-lg p-4 flex flex-col gap-4 md:hidden z-20 transition-all duration-300 ease-in-out"
        >
          <NavItem icon={<FaHome className="text-lg" />} text="Home" mobile />
          <NavItem
            icon={<FaList className="text-lg" />}
            text="Our Category"
            mobile
          />
          <NavItem
            icon={<FaInfoCircle className="text-lg" />}
            text="About Us"
            mobile
          />
          <NavItem
            icon={<FaPhone className="text-lg" />}
            text="Contact Us"
            mobile
          />
          <NavItem
            icon={<FaQuestionCircle className="text-lg" />}
            text="FAQs"
            mobile
          />

          <hr className="border-gray-200" />

          <div className="flex gap-6 justify-center">
            <FaShoppingBag
              className="text-xl text-gray-600 hover:text-indigo-600 transition-colors"
              aria-label="Shopping Bag"
            />
            <FaFileInvoice
              className="text-xl text-gray-600 hover:text-indigo-600 transition-colors"
              aria-label="Invoice"
            />
            <FaHeart
              className="text-xl text-gray-600 hover:text-indigo-600 transition-colors"
              aria-label="Wishlist"
            />
          </div>

          <div className="flex gap-4 justify-center">
            <button className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-indigo-50 hover:text-indigo-600 transition-colors">
              EN
            </button>
            <button className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-indigo-50 hover:text-indigo-600 transition-colors">
              AR
            </button>
          </div>

          <div className="flex gap-4 justify-center">
            <button className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-indigo-50 hover:text-indigo-600 transition-colors">
              Login
            </button>
            <button className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-indigo-50 hover:text-indigo-600 transition-colors">
              Logout
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

function NavItem({
  icon,
  text,
  mobile = false,
}: {
  icon: React.ReactNode;
  text: string;
  mobile?: boolean;
}) {
  return (
    <div
      className={`flex items-center gap-2 cursor-pointer text-gray-600 hover:text-indigo-600 transition-colors ${
        mobile ? "py-2 text-base font-medium" : "text-sm"
      }`}
    >
      {icon}
      <span>{text}</span>
    </div>
  );
}
