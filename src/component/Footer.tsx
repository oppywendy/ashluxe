import { FaFacebook, FaInstagram, FaTiktok, FaTwitter } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { IoChatbubbleEllipses } from "react-icons/io5";
import { MdVerifiedUser } from "react-icons/md";
import { PiBasketFill, PiSailboatFill } from "react-icons/pi";
import visa from "../assets/visa.png";
import mastercard from "../assets/mastercard.png";
import paypal from "../assets/paypal.png";
import am from "../assets/am express.jpeg";
import discover from "../assets/discover.png";
import diner from "../assets/diners club.png";

const Footer = () => {
  return (
    <div>
      <div className="w-full lg:flex flex-col lg:flex-row pb-5 bg-[#FFFFFF] lg:h-[40vh] h-auto justify-center items-center">
        <div className="lg:w-[25%] lg:pt-0 pt-10 h-full justify-center items-center flex">
          <div className="w-[80%]">
            <div className="items-center justify-center flex">
              <MdVerifiedUser size={25} />
            </div>
            <h1 className="text-center pt-5 lg:font-medium text-xl">
              Secured Payment
            </h1>
            <p className="text-center pt-2 opacity-60">
              Enjoy peace of mind with our secured payment options!
            </p>
          </div>
        </div>
        <div className="lg:w-[25%] lg:pt-0 pt-16 h-full justify-center items-center flex">
          <div className="w-[80%]">
            <div className="items-center justify-center flex">
              <PiSailboatFill size={25} />
            </div>
            <h1 className="text-center pt-5 lg:font-medium text-xl">
              Shipping
            </h1>
            <p className="text-center pt-2 opacity-60">
              Get your order fast with our speedy shipping options!
            </p>
          </div>
        </div>
        <div className="lg:w-[25%] lg:pt-0 pt-16 h-full justify-center items-center flex">
          <div className="w-[80%]">
            <div className="items-center justify-center flex">
              <IoChatbubbleEllipses size={25} />
            </div>
            <h1 className="text-center pt-5 lg:font-medium text-xl">
              Live Chat
            </h1>
            <p className="text-center pt-2 opacity-60">
              Need help? Our live chat is here for instant support!
            </p>
          </div>
        </div>
        <div className="lg:w-[25%] lg:pt-0 pt-16 h-full justify-center items-center flex">
          <div className="w-[80%]">
            <div className="items-center justify-center flex">
              <PiBasketFill size={25} />
            </div>
            <h1 className="text-center pt-5 lg:font-medium text-xl">
              Checkout
            </h1>
            <p className="text-center pt-2 opacity-60">
              Easy checkout - complete your order in seconds!
            </p>
          </div>
        </div>
      </div>
      <div>
        <div className="bg-black text-[#8B8B8B] w-full lg:h-[50vh] lg:flex lg:flex-row flex-col justify-center py-10">
          <div className="lg:w-[15%] lg:px-5 px-10 pt-5 leading-7">
            <h1 className="text-white">Customer Services</h1>
            <p className="pt-1">Customer Care</p>
            <p>Shipping</p>
            <p>Orders & Payments</p>
            <p>Returns</p>
            <p>FAQ</p>
            <p>My Account</p>
          </div>
          <div className="lg:w-[15%] px-10 pt-5 leading-7">
            <h1 className="text-white">Company</h1>
            <p className="pt-1">About Us</p>
            <p>Careers</p>
            <p>Contact Us</p>
            <p>Editorial</p>
          </div>
          <div className="lg:w-[15%] px-10 pt-5 leading-7">
            <h1 className="text-white">Categories</h1>
            <p className="pt-1">New Arrivals</p>
            <p>Men</p>
            <p>Women</p>
            <p>T-shirts</p>
            <p>Pants</p>
          </div>
          <div className="lg:w-[15%] px-10 pt-5 leading-7">
            <h1 className="text-white">Policies</h1>
            <p className="pt-1">Exchange Policy</p>
            <p>Return Policy</p>
            <p>Refund Policy</p>
            <p>Privacy Policy</p>
            <p>Cookie Policy</p>
          </div>
          <div className="lg:w-[30%] px-10 pt-5">
            <h1 className="text-white">Join Our List</h1>
            <p className="pt-1">
              Receive updates on our latest products, releases and exclusive
              partnerships.
            </p>
            <div className="flex gap-5 pt-4 ">
              <div className="flex gap-2">
                <input type="checkbox" name="" id="" />
                <p>Men</p>
              </div>
              <div className="flex gap-2">
                <input type="checkbox" name="" id="" />
                <p>Women</p>
              </div>
            </div>
            <div className="pt-6 relative">
              <input
                type="email"
                name=""
                id=""
                placeholder="Enter Email"
                className="bg-transparent border border-gray-400 w-[90%] h-[50px] rounded-lg justify-center flex pl-3"
              />
              <IoIosArrowForward
                size={20}
                color="white"
                className="absolute right-10 bottom-4 "
              />
            </div>
            <div className="flex gap-3 pt-7">
              <FaFacebook />
              <FaInstagram />
              <FaTwitter />
              <FaTiktok />
            </div>
          </div>
        </div>
        <hr className="border-gray-500 w-full" />
        <div className="h-[20vh] w-full bg-black text-[#8B8B8B] pl-16 py-6">
          <div className="flex gap-2">
            <img src={visa} alt="" className="w-[30px] h-[20px]" />
            <img src={mastercard} alt="" className="w-[30px] h-[20px]" />
            <img src={am} alt="" className="w-[30px] h-[20px]" />
            <img src={paypal} alt="" className="w-[30px] h-[20px]" />
            <img src={diner} alt="" className="w-[30px] h-[20px]" />
            <img src={discover} alt="" className="w-[30px] h-[20px]" />
          </div>
          <h1 className="pt-5">
            Powered by ASHLUXURY FASHION AND BEAUTY LIMITED
          </h1>
          <p className="text-xs">© 2025, Ashluxe. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
