import { useState } from "react";
import pic1 from "../assets/NIGERIA_X_BRAZIL_4.avif";
import pic2 from "../assets/nigxbra2.avif";
import pic3 from "../assets/nigxbra3.avif";
import short from "../assets/NIGERIAXBRAZILFOOTBALL SHORTS.png";
import slide from "../assets/slide4.avif";
import { MdKeyboardArrowDown, MdKeyboardArrowRight } from "react-icons/md";
import { PiShareFatLight } from "react-icons/pi";
import Customer from "./Customer";
import Recent from "./Recent";

const pictures = [pic1, pic2, pic3];

const NigeriaXBrazil = () => {
  const [display, setDisplay] = useState(pic1);
  const [count, setCount] = useState(1);
  const [value, setValue] = useState("");
  const [openDesc, setOpenDesc] = useState(false);
  const [openSpec, setOpenSpec] = useState(false);
  const [openShip, setOpenShip] = useState(false);

  function increament() {
    setCount(count + 1);
  }

  function decreament() {
    setCount(Math.max(count - 1, 0));
  }
  return (
    <div className="bg-[#F8F8F8]">
      <div className="flex pt-14 pb-5 pl-10 items-center gap-3">
        <p>Home</p> <MdKeyboardArrowRight />{" "}
        <p className="text-sm">Nigeria X Brazil Football Shirt White</p>
      </div>
      <div className="w-full flex justify-center">
        <div className="w-[40%] h-[70vh] flex justify-center items-center gap-5 px-10">
          <div className="h-[90%] w-[25%]">
            {pictures.map((picture, i) => (
              <div key={i}>
                <img
                  src={picture}
                  alt=""
                  onClick={() => setDisplay(picture)}
                  className="w-[100px] h-[130px] border border-black rounded-lg mt-1 cursor-pointer bg-[#DDDDDD]"
                />
              </div>
            ))}
          </div>
          <div className="h-[90%] w-[75%]">
            <img
              src={display}
              alt=""
              className="w-[60vh] border border-black h-full rounded-2xl cursor-pointer bg-[#DDDDDD]"
            />
          </div>
        </div>
        <div className="w-[50%]">
          <div className="pt-5">
            <p className="text-black opacity-75">Ashluxe</p>
            <h1 className="text-4xl pb-3">
              Nigeria X Brazil Football Shirt White
            </h1>
            <b className="text-2xl opacity-70">$198</b>
            <p className="pt-5 opacity-40 pb-2">Colour</p>
            <div className="bg-white w-7 h-7 rounded-full border-black border-2"></div>
            <p className="pt-2 text-sm opacity-80">white</p>
            <p className="opacity-40 pt-4">size</p>
            <div className="pt-3">
              <button className="bg-[#F8F8F8] w-8 h-8 rounded-md opacity-60 border border-gray-400">
                XS
              </button>
              <button className="bg-[#F8F8F8] w-8 h-8 ml-2 rounded-md opacity-60 border border-gray-400">
                S
              </button>
              <button className="bg-[#F8F8F8] w-8 h-8 ml-2 rounded-md opacity-60 border border-gray-400">
                M
              </button>
              <button className="bg-[#F8F8F8] w-8 h-8 ml-2 rounded-md opacity-60 border border-gray-400">
                L
              </button>
              <button className="bg-[#F8F8F8] w-8 h-8 ml-2 rounded-md opacity-60 border border-gray-400">
                XL
              </button>
              <button className="bg-[#F8F8F8] w-8 h-8 ml-2 rounded-md opacity-60 border border-gray-400">
                2XL
              </button>
              <button className="bg-[#F8F8F8] w-8 h-8 ml-2 rounded-md opacity-60 border border-gray-400">
                3XL
              </button>
            </div>
            <p className="underline text-sm pt-5">Size Chart</p>
            <div className="pt-7 flex gap-5">
              <div>
                <input
                  type="button"
                  value={count}
                  className="w-[15rem] h-[3rem] rounded-lg bg-[#FFFFFF] border border-black relative"
                />
                <p
                  onClick={increament}
                  className="absolute text-2xl bottom-9 left-1/2 px-36 cursor-pointer"
                >
                  +
                </p>
                <p
                  onClick={decreament}
                  className="absolute text-3xl bottom-9 px-4 cursor-pointer"
                >
                  -
                </p>
              </div>
              <div>
                <button className="w-[20rem] h-[3rem] rounded-lg border text-white border-black bg-black">
                  Add to cart
                </button>
              </div>
            </div>
            <div className="flex pt-5 gap-5">
              <button className="w-[25rem] h-[3rem] rounded-lg border text-black border-black bg-white hover:bg-black hover:text-white">
                Add to wishlist
              </button>
              <div className="relative">
                <button className="w-[6rem] h-[3rem] rounded-lg border text-black border-black bg-white hover:bg-black hover:text-white">
                  Share
                </button>
                <PiShareFatLight
                  color="black"
                  size={12}
                  className="absolute top-5 left-3"
                />
              </div>
            </div>
            <div className="pt-5">
              <h1 className="text-center text-xl font-semibold">
                Pairs well with
              </h1>
              <div className="flex w-full justify-between pt-5">
                <input type="checkbox" name="" id="" className="w-5" />
                <img src={pic1} alt="" className="w-28" />
                <div className="flex flex-col items-center">
                  <h2 className="opacity-80">Nigeria X Brazil Football</h2>
                  <h2 className="opacity-80">Shirt White</h2>
                  <select
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    className="w-28 py-1 border border-gray-300 rounded-md text-sm text-center focus:ring-blue-500 my-3"
                  >
                    <option value="">White / XS</option>
                    <option value="s">White / S</option>
                    <option value="m">White / M</option>
                    <option value="l">White / L</option>
                    <option value="xl">White / XL</option>
                    <option value="2xl">White / 2XL</option>
                    <option value="3xl">White / 3XL</option>
                  </select>
                  <p className="font-medium">$198.00</p>
                </div>
              </div>
              <div className="bg-gray-300 h-[0.5px]"></div>
              <div className="flex w-full justify-between pt-5">
                <input type="checkbox" name="" id="" className="w-5" />
                <img src={short} alt="" className="w-28" />
                <div className="flex flex-col items-center">
                  <h2 className="opacity-80">Nigeria X Brazil Football</h2>
                  <h2 className="opacity-80">Shorts Green</h2>
                  <select
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    className="w-28 py-1 border border-gray-300 rounded-md text-sm text-center focus:ring-blue-500 my-3"
                  >
                    <option value="">Green / XS</option>
                    <option value="s">Green / S</option>
                    <option value="m">Green / M</option>
                    <option value="l">Green / L</option>
                    <option value="xl">Green / XL</option>
                    <option value="2xl">Green / 2XL</option>
                    <option value="3xl">Green / 3XL</option>
                  </select>
                  <p className="font-medium">$183.00</p>
                </div>
              </div>
              <div className="bg-gray-300 h-[0.5px]"></div>
              <div className="flex w-full justify-between pt-5">
                <input type="checkbox" name="" id="" className="w-5" />
                <img src={slide} alt="" className="w-28" />
                <div className="flex flex-col items-center">
                  <h2 className="opacity-80">Ashluxe Emblem</h2>
                  <h2 className="opacity-80">Leather Slides Green</h2>
                  <select
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    className="w-28 py-1 border border-gray-300 rounded-md text-sm text-center focus:ring-blue-500 my-3"
                  >
                    <option value="">Green / 37</option>
                    <option value="s">Green / 38</option>
                    <option value="m">Green / 39</option>
                    <option value="l">Green / 40</option>
                    <option value="xl">Green / 41</option>
                    <option value="2xl">Green / 42</option>
                    <option value="3xl">Green / 43</option>
                  </select>
                  <p className="font-medium">$204.00</p>
                </div>
              </div>
              <div className="bg-gray-300 h-[0.5px]"></div>
              <p className="text-gray-600 text-center pt-3">
                All, for only:{" "}
                <span className="font-medium text-black">$581.00</span>
              </p>
              <button className="w-full bg-white border border-black rounded-lg h-12 mt-2 hover:bg-black hover:text-white">
                Get the bundle
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="px-16 pt-20 w-full mx-auto">
        {/* Button with arrow */}
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

        {/* Hidden/Visible Text */}
        {openDesc && (
          <div>
            <p className="mt-10 text-gray-700 pb-5 leading-relaxed">
              The White Nigeria x Brazil Football Shirt brings clean energy to a
              story rooted in passion. With a breathable pro-quality build,
              retro collar, and standout embellishments, this jersey elevates
              the spirit of unity and play across continents.
            </p>
            <b>Features</b>
            <ul className="list-disc list-inside space-y-2 pt-5 px-8">
              <li>High-performance vintage-inspired jersey fabric</li>
              <li>Sublimated allover design with rich detail</li>
              <li>Ribbed collar for comfort and retro structure</li>
              <li>Nigeria and Brazil embroidered flag crests</li>
              <li>Ashluxe logo and number prints</li>
              <li>Athletic silhouette</li>
            </ul>
            <p className="pt-5">
              <span className="font-bold">Model Sizing:</span> Model is wearing
              Size "M"
            </p>
            <ul className="list-disc list-inside space-y-2 pt-5 px-8">
              <li>Height: 6'2</li>
              <li>Chest: 33"</li>
              <li>Waist: 28"</li>
              <li>Hips: 37"</li>
            </ul>
          </div>
        )}
      </div>
      <div className="px-16 pt-5 w-full mx-auto">
        {/* Button with arrow */}
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

        {/* Hidden/Visible Text */}
        {openSpec && (
          <div>
            <p className="mt-10 text-gray-700 pb-5 leading-relaxed">
              Made in Portugal
            </p>
            <p>100% Polyester</p>
          </div>
        )}
      </div>
      <div className="px-16 pt-5 w-full mx-auto">
        {/* Button with arrow */}
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

        {/* Hidden/Visible Text */}
        {openShip && <div></div>}
      </div>
      <Customer />
      <Recent />
    </div>
  );
};

export default NigeriaXBrazil;
