import "./Footer.css";
import {
  AiFillInstagram,
  AiOutlineTwitter,
  AiFillFacebook,
  AiFillYoutube,
} from "react-icons/ai";
import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__content">
        <div>
          <h2>Shoes</h2>
        </div>

        <div className="footer__icons">
          <AiFillInstagram className="footer__icon" />
          <AiOutlineTwitter className="footer__icon" />
          <AiFillFacebook className="footer__icon" />
          <AiFillYoutube className="footer__icon" />
        </div>

        <div className="footer__list">
          <ul>
            <li className="footer__list-item">About</li>
            <li className="footer__list-item">Contact</li>
            <li className="footer__list-item">Privacy policy</li>
          </ul>
        </div>

        <div className="footer__copy">
          <p className="footer__copy-text">&copy; Shoes. All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
