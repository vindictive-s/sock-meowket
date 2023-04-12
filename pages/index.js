import React from "react";

import { Product, FooterBanner, HeroBanner } from "@/components";

const Home = () => {
  return (
    <>
      HeroBanner
      <div className="products-heading">
        <h2>Sock Exchange Meowket</h2>
        <p>- follow the trend -</p>
      </div>
      <div className="products-container">
        {["Product1", "Product 2"].map((product) => product)}
      </div>
      Footer
    </>
  );
};

export default Home;
