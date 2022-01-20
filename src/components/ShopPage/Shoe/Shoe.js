import "./Shoe.css";
import React from "react";

const Shoe = ({ image, name, price }) => {
  return (
    <div className="shoe">
      <div className="shoe__image-container">
        <img className="shoe__image" src={image} alt={name} />
      </div>

      <div className="shoe__info">
        <h3 className="shoe__name">{name}</h3>
        <h4 className="shoe__price">${price}</h4>
      </div>

      <div className="shoe__btn-container">
        <a href="#" className="btn shoe__btn">
          Add to cart
        </a>
      </div>
    </div>
  );
};

export default Shoe;
