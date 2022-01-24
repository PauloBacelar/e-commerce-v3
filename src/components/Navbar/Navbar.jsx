import "./Navbar.css";
import React, { useContext, useState, useEffect } from "react";
import { AiOutlineShopping } from "react-icons/ai";
import { Badge } from "@mui/material";
import CartContext from "../../context/Context";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [shadow, setShadow] = useState(false);

  const cartContext = useContext(CartContext);
  let numberOfItems = cartContext.items.reduce((currentNumber, item) => {
    return currentNumber + item.amount;
  }, 0);

  useEffect(() => {
    const scrollListener = () => {
      if (window.scrollY > 10) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };

    window.addEventListener("scroll", scrollListener);

    return () => {
      window.removeEventListener("scroll", scrollListener);
    };
  }, []);

  return (
    <header className={`header ${shadow ? "header__shadow" : ""}`}>
      <div className="header__content">
        <Link to="/">
          <h1 className="header__title">Shoes</h1>
        </Link>

        <Link to="/cart">
          <Badge badgeContent={numberOfItems} color="primary">
            <AiOutlineShopping
              color="white"
              style={{ fontSize: "24px", cursor: "pointer" }}
              className="header__icon"
            />
          </Badge>
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
