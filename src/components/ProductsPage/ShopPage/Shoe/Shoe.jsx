import "./Shoe.css";
import React, { useContext } from "react";
import CartContext from "../../../../context/Context";

const Shoe = ({ id, image, name, price }) => {
  const cartContext = useContext(CartContext);
  const addToCartHandler = (amount) => {
    cartContext.addItem({
      id,
      name,
      amount,
      price,
    });
  };

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
        <button className="btn shoe__btn" onClick={() => addToCartHandler(1)}>
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default Shoe;
