'use client'

import Link from "next/link";
import { useState } from "react";
import { CiMenuFries } from "react-icons/ci";


const Links = [
  { name: "Home", url: "/" },
  { name: "Recipes", url: "/recipe" },
  { name: "Contact", url: "/contactus" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="flex border-b border-gray-200 bg-white font-sans min-h-[70px] tracking-wide relative z-50 mx-5">
      <div className="w-full flex items-center justify-evenly px-6 py-3 sm:px-10">
        {/* Logo Section */}
        <div className="text-xl font-semibold text-gray-800 hover:text-slate-500">
          <Link href="/" className="great-vibes-regular">Bites & Bliss</Link>
        </div>

        {/* Hamburger Menu for Mobile */}
        <button
          aria-label="Toggle navigation"
          className="lg:hidden text-gray-800 focus:outline-none"
          onClick={toggleMenu}
        >
          <CiMenuFries/>
        </button>

        {/* Navbar Links */}
        <ul
          className={`${
            isMenuOpen ? "block" : "hidden"
          } lg:flex flex-col lg:flex-row items-start lg:items-center lg:space-x-10 space-y-4 lg:space-y-0 absolute lg:relative top-[70px] lg:top-auto left-0 lg:left-auto w-full lg:w-auto lg:bg-transparent bg-white lg:shadow-none shadow-md lg:p-0 p-4 z-40`}
        >
          {Links.map((link) => (
            <li key={link.name}>
              <Link
                href={link.url}
                className="text-gray-500 hover:text-gray-900 transition duration-300 ease-in-out"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
