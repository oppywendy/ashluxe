import { IoCartOutline } from "react-icons/io5";
import logo from "../assets/logo.webp";
import { IoMdContact } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useState } from "react";
import { IoMdMenu, IoMdClose } from "react-icons/io";

const Header = () => {
  const { cart } = useCart();
  const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-black text-white w-full h-[12vh] flex items-center px-6 md:px-20">
      {/* LEFT SIDE - LOGO + NAV */}
      <div className="flex items-center justify-between w-full">
        {/* Logo */}
        <div className="flex items-center gap-10">
          <a href="/">
            <img src={logo} alt="Logo" className="w-[18vh]" />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:block">
            <ul className="flex gap-6 text-sm">
              <li className="hover:text-gray-400 cursor-pointer">
                New Arrivals
              </li>
              <li className="hover:text-gray-400 cursor-pointer">Men</li>
              <li className="hover:text-gray-400 cursor-pointer">Women</li>
              <li className="hover:text-gray-400 cursor-pointer">
                Collections
              </li>
            </ul>
          </nav>
        </div>

        {/* RIGHT SIDE - SEARCH + ICONS */}
        <div className="flex items-center gap-5">
          {/* Search hidden on mobile */}
          <div className="hidden sm:block">
            <input
              type="text"
              placeholder="Search..."
              className="rounded-lg h-8 pl-2 border border-white bg-transparent text-xs focus:outline-none"
            />
          </div>

          <div className="flex gap-3 items-center">
            <FaRegHeart
              size={22}
              className="cursor-pointer hover:text-gray-400"
            />
            <IoMdContact
              size={22}
              className="cursor-pointer hover:text-gray-400"
            />
            <Link to="/cartpage" className="relative">
              <IoCartOutline
                size={22}
                className="cursor-pointer hover:text-gray-400"
              />
              {itemCount > 0 && (
                <span className="absolute top-2 -right-2 bg-white text-black text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-2xl ml-3"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <IoMdClose /> : <IoMdMenu />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU DROPDOWN */}
      {menuOpen && (
        <div className="absolute top-[12vh] left-0 w-full bg-black border-t border-gray-700 md:hidden z-50">
          <ul className="flex flex-col items-center space-y-4 py-4 text-sm">
            <li className="hover:text-gray-400 cursor-pointer">New Arrivals</li>
            <li className="hover:text-gray-400 cursor-pointer">Men</li>
            <li className="hover:text-gray-400 cursor-pointer">Women</li>
            <li className="hover:text-gray-400 cursor-pointer">Collections</li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
