import { useState } from "react";
import { IoMdSearch } from "react-icons/io";
import { FiHeart, FiUser } from "react-icons/fi";
import { IoBagCheckOutline } from "react-icons/io5";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { Link } from "react-router-dom";

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);

  return (
    <header className="fixed top-0 w-full bg-white border-b border-gray-300 z-50 shadow-sm">
      <nav className="flex justify-between items-center px-4 sm:px-6 lg:px-10 h-[12vh] max-w-screen-xl mx-auto">
        {/* Logo + Desktop Nav */}
        <div className="flex items-center gap-10">
          <h1 className="text-2xl font-semibold">Rivara</h1>

          <ul className="hidden sm:flex items-center gap-7 text-[1.1rem]">
            <li className="cursor-pointer hover:underline">
              <a href="/shirt">MEN</a>
            </li>
            <li className="cursor-pointer hover:underline">
              <a href="/perfume">PERFUME</a>
            </li>
          </ul>
        </div>

        {/* Desktop Icons */}
        <div className="hidden sm:flex items-center gap-5 text-2xl">
          <IoMdSearch className="cursor-pointer" />
          <FiUser className="cursor-pointer" />
          <FiHeart className="cursor-pointer" />
          <IoBagCheckOutline className="cursor-pointer" />
        </div>

        {/* Hamburger (Mobile) */}
        <div className="sm:hidden flex items-center text-2xl">
          <button onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? <HiOutlineX /> : <HiOutlineMenu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="sm:hidden bg-white border-t border-gray-200 px-4 pb-4">
          <ul className="flex flex-col gap-3 pt-3 text-[1.1rem]">
            <li className="border-b py-2">
              <a href="/shirt" onClick={toggleMobileMenu}>MEN</a>
            </li>
            <li className="border-b py-2">
              <a href="/perfume" onClick={toggleMobileMenu}>PERFUME</a>
            </li>
            <li className="border-b py-2 flex items-center gap-2">
              <FiUser /> <span>Account</span>
            </li>
            <li className="border-b py-2 flex items-center gap-2">
              <FiHeart /> <span>Wishlist</span>
            </li>
            <li className="py-2 flex items-center gap-2">
              <IoBagCheckOutline /> <span>Cart</span>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

export default Navbar;
