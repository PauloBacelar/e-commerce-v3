import "./ShopPage.css";
import shoes from "../../shoes.js";
import React from "react";

const ShopPage = () => {
  return (
    <section className="shop" id="shop">
      <div className="shop__content">
        <h2>Our offers</h2>

        <img src={shoes[0].image} alt="QWIUEYPQWIUEYIU" />
      </div>
    </section>
  );
};

export default ShopPage;
