import React, { useState, useEffect } from "react";
import axios from "axios";
import { productsData } from "../FakeData/data";
import Product from "./Product";

const Products = ({ cat, filters, sort }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setfilteredProducts] = useState([]);

  const getProducts = async () => {
    const res = await axios.get(
      cat
        ? `http://localhost:8080/api/products?category=${cat}`
        : `http://localhost:8080/api/products`
    );
    setProducts(res.data);
    console.log(res);
  };
  useEffect(() => {
    getProducts();
  }, [cat]);

  useEffect(() => {
    cat &&
      setfilteredProducts(
        products.filter((item) =>
          Object.entries(filters).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
  }, [products, cat, filters]);
  console.log(sort);
  useEffect(() => {
    if (sort === "newest") {
      setfilteredProducts((prev) =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      );
    } else if (sort === "asc") {
      setfilteredProducts((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
      );
    } else {
      setfilteredProducts((prev) =>
        [...prev].sort((a, b) => b.price - a.price)
      );
    }
  }, [sort]);
  return (
    <div className="relative grid grid-cols-4 w-full gap-8 p-5">
      {cat
        ? filteredProducts.map((item) => <Product data={item} />)
        : products.slice(0, 16).map((item) => <Product data={item} />)}
    </div>
  );
};

export default Products;
