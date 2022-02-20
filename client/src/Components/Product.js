import React from "react";
import { Link } from "react-router-dom";
import { FiHeart, FiZoomIn, FiShoppingCart } from "react-icons/fi";

const Product = ({ data }) => {
  return (
    <div>
      <div
        key={data._id}
        className=" relative  border border-black  m-5 group hover:scale-110 flex justify-center items-center"
      >
        <img src={data.image} className="w-full h-full object-contain" />

        <div className="absolute text-2xl right-3 flex flex-col gap-y-3 text-gray-600 opacity-0 group-hover:opacity-100 cursor-pointer transition-all  ease-in delay-100">
          <div className="p-2 bg-white rounded  flex justify-center items-center">
            <Link to={`/product/${data._id}`}>
              <FiZoomIn size="30" />
            </Link>
          </div>
          <div className="p-2 bg-white rounded flex justify-center items-center">
            <FiHeart size="30" />
          </div>
          <div className="p-2 bg-white rounded flex justify-center items-center">
            <FiShoppingCart size="30" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
