import "./CartPage.css";
import React, { useContext } from "react";
import CartContext from "../../context/Context";
import CartItem from "./CartItem/CartItem";

const ErrorMessage = () => {
  return (
    <p className="cart__error">
      Oops... you didn't add any product to your cart :( <br />
      <a href="/">Go to the shop</a> and check out our amazing products.
    </p>
  );
};

const CartProducts = () => {
  const cartContext = useContext(CartContext);
  const totalAmount = `$${cartContext.totalAmount.toFixed(2)}`;

  const cartItemRemoveHandler = (id) => {
    cartContext.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartContext.addItem({ ...item, amount: 1 });
  };

  return (
    <div>
      <div className="shop__grid">
        {cartContext.items.map((item) => (
          <CartItem
            key={Math.random()}
            name={item.name}
            amount={item.amount}
            price={item.price}
            image={item.image}
            onRemove={cartItemRemoveHandler.bind(null, item.id)}
            onAdd={cartItemAddHandler.bind(null, item)}
          />
        ))}
      </div>

      <div className="shop__info">
        <h3>Total amount: {totalAmount}</h3>

        <button
          className="btn shop__order-btn"
          onClick={() => console.log("Checkout!")}
        >
          Order
        </button>
      </div>
    </div>
  );
};

const CartPage = () => {
  const cartContext = useContext(CartContext);
  const isEmpty = cartContext.items.length === 0;

  return (
    <section className="cart">
      <div className="cart__content">
        <h2 className="cart__title">Cart</h2>

        {isEmpty ? <ErrorMessage /> : <CartProducts />}
      </div>
    </section>
  );
};

export default CartPage;
