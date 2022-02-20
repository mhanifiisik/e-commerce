import React from "react";
import { BsArrowRight } from "react-icons/bs";

const Newsletter = () => {
  return (
    <div className="newsletter relative w-full h-[350px] flex justify-center items-center bg-[#bbe6e4]">
      <div className="flex flex-col gap-y-4 justify-center items-center">
        <h2 className="text-3xl font-bold">Newsletter</h2>
        <p>Get timely updates from your favorite product.</p>
        <div className="flex flex-row w-full justify-center items-center border bg-white">
          <input
            className="w-full px-2 py-2 outline-none bg-transparent"
            type="text"
            placeholder="Your Email Address"
          />
          <button className="flex flex-row pr-2 font-bold justify-center items-center gap-x-2 group">
            SEND
            <BsArrowRight
              className="hidden group-hover:block"
              color="black"
              size={20}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
