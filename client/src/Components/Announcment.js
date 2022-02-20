import React, { useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";

const Announcment = () => {
  const [isOpen, setisOpen] = useState("true");
  function handleClose() {
    setisOpen(!isOpen);
    console.log(isOpen);
  }
  return (
    <div
      className={`fixed w-full bottom-0 z-50 bg-black h-10 ${
        isOpen ? "flex" : "hidden"
      } justify-center items-center`}
    >
      <marquee>
        <div className="flex flex-row justfiy-center gap-x-4 items-center text-center">
          <span className="uppercase text-green-600 font-bold">
            Free delivery from £30.00
          </span>
          <p className="text-white">
            On all your orders for home or collection point delivery{" "}
          </p>
        </div>
      </marquee>
      <AiOutlineCloseCircle color="white" size={25} onClick={handleClose} />
    </div>
  );
};

export default Announcment;
