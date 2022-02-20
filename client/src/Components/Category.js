import React from "react";
import { Link } from "react-router-dom";
const Category = ({ data }) => {
  const { image, title, category } = data;
  return (
    <div className="relative">
      <img
        className="w-full h-full object-cover"
        src={require(`../Images/${image}`)}
        alt=""
      />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col gap-y-2">
        <h2 className="text-white text-5xl whitespace-nowrap	 font-bold uppercase">
          {title}
        </h2>
        <Link
          to={`/products/${category} `}
          className="flex justify-center items-center"
        >
          <button className="border p-1 border-black">Shop Now</button>
        </Link>
      </div>
    </div>
  );
};

export default Category;
