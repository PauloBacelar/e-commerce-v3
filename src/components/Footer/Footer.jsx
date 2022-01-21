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
          <a href="#">
            <AiFillInstagram className="footer__icon" />
          </a>
          <a href="#">
            <AiOutlineTwitter className="footer__icon" />
          </a>
          <a href="#">
            <AiFillFacebook className="footer__icon" />
          </a>
          <a href="#">
            <AiFillYoutube className="footer__icon" />
          </a>
        </div>

        <div className="footer__list">
          <ul>
            <li className="footer__list-item">
              <a href="#">About</a>
            </li>
            <li className="footer__list-item">
              <a href="#">Contact</a>
            </li>
            <li className="footer__list-item">
              <a href="#">Privacy policy</a>
            </li>
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
