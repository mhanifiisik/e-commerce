import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { AiOutlineShopping, AiOutlineSearch } from "react-icons/ai";

const Navbar = () => {
  const cardQuantity = useSelector((state) => state.card.quantity);
  return (
    <div className="relative w-full h-20 border-b border-black flex flex-row justify-between items-center px-10 ">
      <Link to="/">
        <h1 className="text-3xl tracking-widest	font-bold antialiased">
          AnxelSchiffman
        </h1>
      </Link>
      <div className="flex flex-row justify-center items-center gap-x-5">
        <div className="flex flex-row-reverse justify-center items-center gap-x-1 border border-black p-1">
          <input type="text" className="outline-none" />
          <AiOutlineSearch className="w-6 h-6" />
        </div>
        <button>REGISTER</button>
        <button>SIGN IN</button>
        <Link to="/chart">
          <span className="relative inline-block ">
            <AiOutlineShopping className="h-6 w-6 cursor-pointer" />
            <span className="absolute bot-0 right-0  inline-flex items-center justify-center   text-center text-[14px] p-1 w-5 h-5 font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-green-600 border border-white rounded-full">
              {cardQuantity}
            </span>
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
