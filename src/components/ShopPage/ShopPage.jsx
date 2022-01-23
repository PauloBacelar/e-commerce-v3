import "./ShopPage.css";
import shoes from "../../shoes.js";
import React, { useContext } from "react";
import Shoe from "./Shoe/Shoe";
import { CartContext } from "../../context/Context";

const ShopPage = () => {
  const { cart, setCart } = useContext(CartContext);

  return (
    <section className="shop" id="shop">
      <div className="shop__content">
        <h2>Our offers</h2>

        <div className="shop__grid">
          {shoes.map((shoe) => {
            return (
              <Shoe
                key={shoe.id}
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
