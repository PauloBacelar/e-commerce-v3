import "./Navbar.css";
import React from "react";
import { AiOutlineShopping } from "react-icons/ai";
import { Badge } from "@mui/material";

const Navbar = ({ shadow }) => {
  return (
    <header className={`header ${shadow ? "header__shadow" : ""}`}>
      <div className="header__content">
        <h1 className="header__title">Shoes</h1>

        <Badge badgeContent={4} color="primary">
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
