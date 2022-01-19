import "./Home.css";
import shoeImage from "../../assets/home.png";
import React from "react";

const Home = () => {
  return (
    <section className="home">
      <div className="home__content">
        <div className="home__shoe">
          <div className="home__shoe-bg"></div>
          <img src={shoeImage} alt="Shoe image" className="home__shoe-img" />
        </div>

        <div className="home__text">
          <h2 className="home__title">Check out our shoes</h2>
          <p className="home__description">
            Add your favorite shoes to the cart and make a checkout
          </p>

          <a href="#" className="home__btn">
            Go shop
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
