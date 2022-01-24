import "./ShopPage.css";
import shoes from "../../../shoes.js";
import React, { useContext } from "react";
import Shoe from "./Shoe/Shoe";

const ShopPage = () => {
  return (
    <section className="shop" id="shop">
      <div className="shop__content">
        <h2>Our offers</h2>

        <div className="shop__grid">
          {shoes.map((shoe) => {
            return (
              <Shoe
                key={shoe.id}
                id={shoe.id}
                image={shoe.image}
                name={shoe.name}
                price={shoe.price}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ShopPage;
