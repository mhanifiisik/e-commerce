import React from "react";
import Navbar from "../Components/Navbar"
import Slider from "../Components/Carousel"
import Categories from "../Components/Categories"
import Products from "../Components/Products"
import Newsletter from "../Components/Newsletter"
import Footer from "../Components/Footer"
const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Slider />
      <Categories />
      <Products />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default HomePage;
