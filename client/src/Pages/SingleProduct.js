import React, { useState, useEffect } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { useLocation } from "react-router-dom";
import { publicRequest } from "../Components/request";
import { addProduct } from "../Redux/cardRedux";
import { useDispatch } from "react-redux";

const SingleProduct = () => {
  const location = useLocation();
  const productId = location.pathname.split("/")[2];

  const [product, setProduct] = useState([]);
  const [count, setCount] = useState(1);
  const [color, setColor] = useState();
  const [size, setSize] = useState();
  const dispatch = useDispatch();

  useEffect(() => {
    const getProductData = async () => {
      try {
        const response = await publicRequest.get("/products/find/" + productId);
        setProduct(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getProductData();
  }, [productId]);

  const AddToChart = () => {
    dispatch(addProduct({ ...product, count, color, size }));
  };
  return (
    <div>
      <Navbar />
      <div className="w-full h-[calc(100vh-6rem)]   flex flex-row">
        <div className="w-[800px]  flex justify-center items-center">
          <img
            src={`${product.image}`}
            alt="singleProduct"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-1 flex flex-col justify-start gap-y-10 p-16">
          <h2>{`${product.title}`}</h2>
          <p>{`${product.desc}`}</p>
          <h3>{`£${product.price}`}</h3>
          <div className="flex flex-row justify-start items-center gap-16">
            <div className="flex flex-row justify-start items-center gap-x-2">
              <h4>Color</h4>
              <ul className="flex flex-row justify-center items-center gap-x-3">
                {product.color?.map((color) => (
                  <li
                    className={`bg-${color}-500 w-7 h-7 rounded-full`}
                    onClick={(e) => setColor(color)}
                  ></li>
                ))}
              </ul>
            </div>
            <div className="flex flex-row justify-center items-center gap-x-3">
              <h4>Size</h4>
              <select
                className="outline-none border border-black px-2 py-1"
                onChange={(e) => setSize(e.target.value)}
              >
                {product.size?.map((size) => (
                  <option>{size}</option>
                ))}
              </select>
            </div>
          </div>
          <div className="flex flex-row gap-x-2 justify-start items-center">
            <button onClick={() => count > 1 && setCount(count - 1)}>-</button>
            <div>{count}</div>
            <button onClick={() => setCount(count + 1)}>+</button>
          </div>
          <div>
            <button
              onClick={() => AddToChart()}
              className="px-12 py-2 bg-black rounded  text-white"
            >
              ADD TO BASKET
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SingleProduct;
