import "./CartPage.css";
import React from "react";

const ErrorMessage = () => {
  return (
    <p className="cart__error">
      Oops... you didn't add any product to your cart :( <br />
      <a href="/">Go to the shop</a> and check out our amazing products.
    </p>
  );
};

const CartPage = () => {
  return (
    <section className="cart">
      <div className="cart__content">
        <h2 className="cart__title">Cart</h2>

        <ErrorMessage />
      </div>
    </section>
  );
};

export default CartPage;
