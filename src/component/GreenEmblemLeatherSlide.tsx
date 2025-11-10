import { useState } from "react";
import pic1 from "../assets/slide4.avif";
import { MdKeyboardArrowDown, MdKeyboardArrowRight } from "react-icons/md";
import { PiShareFatLight } from "react-icons/pi";
import Customer from "./Customer";
import Recent from "./Recent";
import { useCart } from "../context/CartContext";

const pictures = [pic1];

const GreenEmblemLeatherSlide = () => {
  const [display, setDisplay] = useState(pic1);
  const [count, setCount] = useState(1);
  const [openDesc, setOpenDesc] = useState(false);
  const [openSpec, setOpenSpec] = useState(false);
  const [openShip, setOpenShip] = useState(false);

  // ✅ Use global cart context
  const { addToCart } = useCart();

  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => Math.max(prev - 1, 1));

  const handleAddToCart = () => {
    const product = {
      id: 1,
      name: "Ashluxe Emblem Leather Slides",
      price: 207,
      quantity: count,
      image: display,
    };

    addToCart(product);
    alert(`${product.name} added to cart ✅`);
  };
  return (
    <div className="bg-[#F8F8F8]">
      {/* Breadcrumb */}
      <div className="flex pt-14 pb-5 pl-10 items-center gap-3">
        <p>Home</p>
        <MdKeyboardArrowRight />
        <p className="text-sm">Ashluxe Emblem Leather Slides Green</p>
      </div>

      {/* Product Display */}
      <div className="w-full lg:flex grid lg:flex-row justify-center items-center lg:items-start">
        {/* Left Image Section */}
        <div className="w-full lg:w-[40%] h-auto  flex flex-col lg:flex-row justify-center items-center gap-5 px-5">
          <div className="flex lg:grid lg:h-[90%] lg:w-[25%] gap-3">
            {pictures.map((picture, i) => (
              <img
                key={i}
                src={picture}
                alt=""
                onClick={() => setDisplay(picture)}
                className={`w-[100px] h-[130px] border rounded-lg mt-1 cursor-pointer ${
                  display === picture ? "border-black" : "border-gray-300"
                }`}
              />
            ))}
          </div>
          <div className="h-[90%] w-[75%]">
            <img
              src={display}
              alt="Product"
              className="w-full max-w-[400px] h-auto border border-black rounded-2xl bg-[#DDDDDD] object-cover"
            />
          </div>
        </div>

        {/* Right Info Section */}
        <div className="w-full lg:w-[50%] pt-5 px-5 lg:pr-10">
          <p className="text-black opacity-75">Ashluxe</p>
          <h1 className="text-4xl pb-3">Ashluxe Emblem Leather Slides Green</h1>
          <b className="text-2xl opacity-70">$207</b>

          {/* Color */}
          <p className="pt-5 opacity-40 pb-2">Colour</p>
          <div className="bg-green-600 w-7 h-7 rounded-full border-black border-2"></div>
          <p className="pt-2 text-sm opacity-80">Green</p>

          {/* Size */}
          <p className="opacity-40 pt-4">Size</p>
          <div className="pt-3 flex flex-wrap gap-2">
            {[
              "37",
              "38",
              "39",
              "40",
              "41",
              "42",
              "43",
              "44",
              "45",
              "46",
              "47",
            ].map((size) => (
              <button
                key={size}
                className="bg-[#F8F8F8] w-8 h-8 rounded-md opacity-60 border border-gray-400 hover:bg-gray-200"
              >
                {size}
              </button>
            ))}
          </div>

          <p className="underline text-sm pt-5 cursor-pointer">Size Chart</p>

          {/* Quantity & Add to Cart */}
          <div className="pt-7 flex flex-col sm:flex-row gap-5 w-full">
            <div className="relative">
              <input
                type="text"
                value={count}
                readOnly
                className="w-full sm:w-[15rem] h-[3rem] rounded-lg bg-[#FFFFFF] border border-black text-center"
              />
              <button
                onClick={increment}
                className="absolute top-1/2 right-4 -translate-y-1/2 text-xl"
              >
                +
              </button>
              <button
                onClick={decrement}
                className="absolute top-1/2 left-4 -translate-y-1/2 text-xl"
              >
                -
              </button>
            </div>
            <button
              onClick={handleAddToCart}
              className="w-full sm:w-[20rem] h-[3rem] rounded-lg border text-white border-black bg-black hover:bg-gray-800 transition"
            >
              Add to cart
            </button>
          </div>

          {/* Wishlist & Share */}
          <div className="flex flex-col sm:flex-row pt-5 gap-5 w-full">
            <button className="w-full sm:w-[25rem] h-[3rem] rounded-lg border text-black border-black bg-white hover:bg-black hover:text-white">
              Add to wishlist
            </button>
            <div className="relative">
              <button className="w-[6rem] h-[3rem] rounded-lg border text-black border-black bg-white hover:bg-black hover:text-white">
                Share
              </button>
              <PiShareFatLight
                color="black"
                size={12}
                className="absolute top-3 left-3"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Product Description */}
      <div className="px-5 sm:px-10 lg:px-16 pt-10 w-full mx-auto">
        <button
          onClick={() => setOpenDesc(!openDesc)}
          className="flex items-center justify-between w-full px-4 py-4 bg-[#F8F8F8] text-black rounded-lg shadow hover:bg-gray-100"
        >
          <span>Product Description</span>
          <MdKeyboardArrowDown
            className={`text-xl transition-transform duration-300 ${
              openDesc ? "rotate-180" : "rotate-0"
            }`}
          />
        </button>

        {openDesc && (
          <div>
            <p className="mt-10 text-gray-700 pb-5 leading-relaxed">
              The Nigeria x Brazil Football Shirt brings clean energy to a story
              rooted in passion. With a breathable build, retro collar, and
              standout design, this jersey celebrates unity and play across
              continents.
            </p>
            <ul className="list-disc list-inside space-y-2 pt-5 px-8">
              <li>High-performance vintage-inspired fabric</li>
              <li>Sublimated design with rich details</li>
              <li>Ribbed collar for comfort</li>
              <li>Embroidered Nigeria and Brazil crests</li>
              <li>Ashluxe logo and number prints</li>
            </ul>
          </div>
        )}
      </div>

      {/* Product Spec */}
      <div className="px-16 pt-5 w-full mx-auto">
        <button
          onClick={() => setOpenSpec(!openSpec)}
          className="flex items-center justify-between w-full px-4 py-4 bg-[#F8F8F8] text-black rounded-lg shadow hover:bg-gray-100"
        >
          <span>Product Specification</span>
          <MdKeyboardArrowDown
            className={`text-xl transition-transform duration-300 ${
              openSpec ? "rotate-180" : "rotate-0"
            }`}
          />
        </button>
        {openSpec && (
          <div>
            <p className="mt-10 text-gray-700 pb-5">Made in Portugal</p>
            <p>100% Polyester</p>
          </div>
        )}
      </div>

      {/* Shipping */}
      <div className="px-16 pt-5 w-full mx-auto">
        <button
          onClick={() => setOpenShip(!openShip)}
          className="flex items-center justify-between w-full px-4 py-4 bg-[#F8F8F8] text-black rounded-lg shadow hover:bg-gray-100"
        >
          <span>Shipping & Returns</span>
          <MdKeyboardArrowDown
            className={`text-xl transition-transform duration-300 ${
              openShip ? "rotate-180" : "rotate-0"
            }`}
          />
        </button>
        {openShip && (
          <div className="text-gray-600 mt-5">Ships in 3–5 days</div>
        )}
      </div>

      <Customer />
      <Recent />
    </div>
  );
};

export default GreenEmblemLeatherSlide;
