import React, { useState, useEffect } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { useSelector } from "react-redux";
import StripeCheckout from "react-stripe-checkout";
import { produceWithPatches } from "immer";
import { userRequest } from "../Components/request";
import { useNavigate } from "react-router-dom";

const Chart = () => {
  const cart = useSelector((state) => state.card);
  const [stripeToken, setStripeToken] = useState(null);
  const onToken = (token) => {
    setStripeToken(token);
  };

  const KEY = process.env.REACT_APP_STRIPE_KEY;
  const history = useNavigate();
  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await userRequest.post("/checkout/payment", {
          tokenId: stripeToken.id,
          amount: 500,
        });
        history.push("/success", {
          stripeData: res.data,
          products: cart,
        });
      } catch (err) {
        console.log(err);
      }
    };
    stripeToken && makeRequest();
  }, [stripeToken, cart.total, history]);
  return (
    <div>
      <Navbar />
      <div className="w-full relative h-8 bg-[#33a7b5] flex justify-center items-center text-white text-base">
        Super Deal! Free Shipping on Orders over £40
      </div>
      <div className="bg-red  w-full">
        <div className="p-20">
          <div className="flex flex-row justify-between items-center">
            <button>Continue Shopping</button>
            <div className="flex flex-row justify-center items-center gap-x-5">
              <a>Shopping Bag(2)</a>
              <a>Your Wishlist(0))</a>
            </div>
            <button className="border border-black">Checkout</button>
          </div>
          <div className="flex w-full gap-x-20  flex-row justify-between">
            <div className="grow-[3] flex flex-col gap-y-3 justify-center items-center">
              {cart.products.map((product) => (
                <div className=" w-full h-[200px] pb-5 flex flex-row justify-between items-center border-b border-black">
                  <div className="w-1/5 h-full">
                    <img
                      className="w-full h-full object-cover "
                      src={product.image}
                    />
                  </div>
                  <div className="relative flex-1 h-full flex flex-col justify-between items-left px-12">
                    <h4 className="font-bold">
                      Product Name <span>{product.title}</span>
                    </h4>
                    <p>
                      ID<span>{product._id}</span>
                    </p>
                    <p>
                      Color <span></span>
                    </p>
                    <div className="flex flex-row justify-between items-center">
                      <p>Size</p>
                      <div className="flex flex-row justify-center items-center border border-black">
                        <button>-</button>
                        <button>{product.count}</button>
                        <button>+</button>
                      </div>
                      <h4>£{product.price * product.count}</h4>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="grow">
              <div className="border border-black flex flex-col p-5">
                <h2>ORDER SUMMARY</h2>
                <div className="flex flex-row justify-between item-center">
                  <span>Subtotal</span>
                  <span>£{cart.total}</span>
                </div>
                <div className="flex flex-row justify-between item-center">
                  <span>Estimated Shipping</span>
                  <span>£5.90</span>
                </div>
                <div className="flex flex-row justify-between item-center">
                  <span>Shipping Discount</span>
                  <span>-£5.90</span>
                </div>
                <div className="flex flex-row justify-between item-center">
                  <span>Total</span>
                  <span>£{cart.total}</span>
                </div>
                <StripeCheckout
                  name="AnxelSchiffman"
                  billingAddress
                  shippingAddress
                  description={`Total amount is ${cart.total}`}
                  amount={1900}
                  token={onToken}
                  stripeKey={KEY}
                >
                  <button className="border border-black px-5 py-2">
                    Checkout
                  </button>
                </StripeCheckout>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Chart;
