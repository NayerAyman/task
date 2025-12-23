"use client";

import Logo from "@/app/_components/ui/Logo";
import { useState, useRef, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Image from "next/image";
import { FiChevronDown } from "react-icons/fi";
import useLockBodyScroll from "@/app/_hooks/useLockBodyScroll";

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [userOpen, setUserOpen] = useState(false);

  const langRef = useRef<HTMLDivElement>(null);
  const userRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  useLockBodyScroll(menuOpen);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(event.target as Node))
        setLangOpen(false);
      if (userRef.current && !userRef.current.contains(event.target as Node))
        setUserOpen(false);
      if (menuRef.current && !menuRef.current.contains(event.target as Node))
        setMenuOpen(false);
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const urls = [
    { img: "/icon/interface/outline/home 04.svg", label: "Home" },
    { img: "/icon/interface/outline/category.svg", label: "Our Category" },
    { img: "/icon/interface/outline/about.svg", label: "About Us" },
    { img: "/icon/communication/outline/contact.svg", label: "Contact Us" },
    { img: "/icon/communication/outline/FAQs.svg", label: "FAQs" },
  ];

  return (
    <nav className="w-full bg-white shadow-xs px-4 py-2 sm:py-5 lg:px-20 lg:py-4 flex items-center justify-between transition-all duration-300 h-20">
      {/* LEFT (Logo + Links) */}
      <div className="hidden lg:flex items-center gap-6 lg:gap-8">
        <Logo width={60} height={13} />
        {urls.map((item) => (
          <NavItem
            key={item.label}
            icon={
              <Image src={item.img} alt={item.label} width={20} height={20} />
            }
            text={item.label}
          />
        ))}
      </div>

      {/* RIGHT (Icons) */}
      <div className="hidden lg:flex items-center gap-4 lg:gap-5">
        <Image
          src="/icon/interface/outline/bag.svg"
          width={18}
          height={20}
          alt="cart"
          className="cursor-pointer text-[#8A8A8A] hover:text-orange-900 transition-colors"
        />
        <Image
          src="/icon/interface/outline/bill.svg"
          width={18}
          height={20}
          alt="bill"
          className="cursor-pointer text-xl text-[#8A8A8A] hover:text-orange-900  transition-colors"
        />
        <Image
          src="/icon/interface/outline/heart.svg"
          width={18}
          height={20}
          alt="heart"
          className="cursor-pointer text-xl text-[#8A8A8A] hover:text-orange-900  transition-colors"
        />

        {/* Language Dropdown */}
        <div className="relative" ref={langRef}>
          <button
            onClick={() => setLangOpen(!langOpen)}
            className="flex items-center gap-1 text-black hover:text-orange-900  transition-colors"
            aria-label="Select Language"
            aria-expanded={langOpen}
          >
            <span className="text-xs font-semibold">EN</span>
            <FiChevronDown className="text-lg" />
          </button>
          {langOpen && (
            <div className="absolute right-0 mt-2 w-28 bg-white border border-gray-200 rounded-md overflow-hidden z-10">
              <button className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50 hover:text-orange-900  transition-colors">
                EN
              </button>
              <button className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50 hover:text-orange-900  transition-colors">
                AR
              </button>
            </div>
          )}
        </div>

        {/* User Dropdown */}
        <div className="relative" ref={userRef}>
          <button
            onClick={() => setUserOpen(!userOpen)}
            className="text-gray-600 hover:text-orange-900 flex transition-colors"
            aria-label="User Menu"
            aria-expanded={userOpen}
          >
            <Image
              src="/icon/interface/outline/user.svg"
              alt="user"
              width={14}
              height={14}
              className="text-xl"
            />
            <FiChevronDown className="text-lg text-black" />
          </button>
          {userOpen && (
            <div className="absolute right-0 mt-2 w-32 bg-white border border-gray-200 rounded-md overflow-hidden z-10">
              <button className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50 hover:text-orange-900  transition-colors">
                Login
              </button>
              <button className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50 hover:text-orange-900  transition-colors">
                Logout
              </button>
            </div>
          )}
        </div>
      </div>

      {/* MOBILE */}
      <div className="flex lg:hidden w-full items-center justify-between">
        <Logo width={60} height={32} />
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-gray-800 hover:text-orange-900  transition-colors"
          aria-label="Toggle Menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/30 z-1000"
            onClick={() => setMenuOpen(false)}
          />
          <div
            ref={menuRef}
            className="absolute top-15 left-0 w-full bg-white border-t border-gray-200 p-4 flex flex-col gap-4 lg:hidden z-1001 transition-all duration-300 ease-in-out"
          >
            {urls.map((item) => (
              <NavItem
                key={item.label}
                icon={
                  <Image src={item.img} alt={item.label} width={20} height={20} />
                }
                text={item.label}
                mobile
              />
            ))}

            <hr className="border-gray-200" />

            <div className="flex gap-6 justify-center">
              <Image
                src="/icon/interface/outline/bag.svg"
                alt=""
                width={18}
                height={20}
                className="text-xl text-gray-600 hover:text-orange-900  transition-colors"
              />
              <Image
                src="/icon/interface/outline/bill.svg"
                alt=""
                width={18}
                height={20}
                className="text-xl text-gray-600 hover:text-orange-900  transition-colors"
              />
              <Image
                src="/icon/interface/outline/heart.svg"
                alt=""
                width={18}
                height={20}
                className="text-xl text-gray-600 hover:text-orange-900  transition-colors"
              />
            </div>

            <div className="flex gap-4 justify-center">
              <button className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-indigo-50 hover:text-orange-900  transition-colors">
                EN
              </button>
              <button className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-indigo-50 hover:text-orange-900  transition-colors">
                AR
              </button>
            </div>

            <div className="flex gap-4 justify-center">
              <button className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-indigo-50 hover:text-orange-900  transition-colors">
                Login
              </button>
              <button className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-indigo-50 hover:text-orange-900  transition-colors">
                Logout
              </button>
            </div>
          </div>
        </>
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
      className={`flex items-center gap-2 cursor-pointer text-[#918e8e] hover:text-orange-900  transition-colors ${
        mobile ? "py-2 text-base font-medium" : "text-sm"
      }`}
    >
      {icon}
      <span>{text}</span>
    </div>
  );
}