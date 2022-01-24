import "./Navbar.css";
import React, { useContext } from "react";
import { AiOutlineShopping } from "react-icons/ai";
import { Badge } from "@mui/material";
import CartContext from "../../context/Context";

const Navbar = ({ shadow }) => {
  const cartContext = useContext(CartContext);
  let numberOfItems = cartContext.items.reduce((currentNumber, item) => {
    return currentNumber + item.amount;
  }, 0);

  return (
    <header className={`header ${shadow ? "header__shadow" : ""}`}>
      <div className="header__content">
        <h1 className="header__title">Shoes</h1>

        <Badge badgeContent={numberOfItems} color="primary">
          <AiOutlineShopping
            color="white"
            style={{ fontSize: "24px", cursor: "pointer" }}
            className="header__icon"
          />
        </Badge>
      </div>
    </header>
  );
};

export default Navbar;
