import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import Products from "../Components/Products";
import Newsletter from "../Components/Newsletter";
import Footer from "../Components/Footer";
import { RiFilterLine } from "react-icons/ri";
import { MdSort } from "react-icons/md";
import { useLocation } from "react-router-dom";

const ProductList = () => {
  const location = useLocation();
  const category = location.pathname.split("/")[2];
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState("newest");
  const handleSelected = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <Navbar />
      <div className="w-full relative h-8 bg-[#33a7b5] flex justify-center items-center text-white text-base">
        Super Deal! Free Shipping on Orders over £40
      </div>
      <div className="flex flex-col p-7">
        <h1 className="text-3xl font-bold antialiased text-center">DRESSES</h1>
        <div className="flex flex-row justify-between items-center">
          <div className="flex flex-row justify-center items-center gap-x-2 ">
            <RiFilterLine size={20} />
            <h3 className="text-xl font-bold">Filter Products:</h3>
            <select
              name="color"
              onChange={handleSelected}
              className="outline-none border border-black p-1"
              defaultValue={"Color"}
            >
              <option disabled selected>
                Color
              </option>
              <option value="white">White</option>
              <option value="black">Black</option>
              <option value="red">Red</option>
              <option value="blue">Blue</option>
              <option value="yellow">Yellow</option>
              <option value="green">Green</option>
            </select>
            <select
              name="size"
              onChange={handleSelected}
              className="outline-none border border-black  p-1"
              defaultValue={"Size"}
            >
              <option selected disabled>
                Size
              </option>
              <option value="xs">XS</option>
              <option value="s">S</option>
              <option value="m">M</option>
              <option value="l">L</option>
              <option value="xl">XL</option>
            </select>
          </div>
          <div className="flex flex-row justify-center items-center gap-x-2">
            <MdSort size={20} />
            <h3 className="text-xl font-bold">Sort Products:</h3>
            <select
              onChange={(e) => setSort(e.target.value)}
              className="outline-none border border-black p-1"
            >
              <option selected disabled>
                Sort by
              </option>
              <option value="newest">Newest</option>
              <option value="asc">Price(asc)</option>
              <option value="desc">Price(desc)</option>
            </select>
          </div>
        </div>
      </div>
      <Products cat={category} filters={filters} sort={sort} />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default ProductList;
