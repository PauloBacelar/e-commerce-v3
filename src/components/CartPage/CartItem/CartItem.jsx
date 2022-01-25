import "./CartItem.css";
import React from "react";

const CartItem = ({ name, amount, price, image, onRemove, onAdd }) => {
  console.log(amount);

  return (
    <div className="shoe">
      <div className="shoe__image-container">
        <img className="shoe__image" src={image} alt={name} />
      </div>

      <div className="shoe__info">
        <h3 className="shoe__name">{name}</h3>
        <h4 className="shoe__price">
          ${price} (x{amount})
        </h4>
      </div>

      <div className="shoe__btn-container">
        <button className="btn shoe__btn cart__btn" onClick={onAdd}>
          +
        </button>
        <button className="btn shoe__btn" onClick={onRemove}>
          -
        </button>
      </div>
    </div>
  );
};

export default CartItem;
