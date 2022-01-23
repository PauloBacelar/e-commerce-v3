import React, { useState, useEffect } from "react";
import { Navbar, Home, ShopPage, Footer } from "./components";
import { CartContext } from "./context/Context";

const App = () => {
  const [headerShadow, setHeaderShadow] = useState(false);
  const [cart, setCart] = useState({
    products: [],
    totalPrice: 0,
    quantity: 0,
  });

  useEffect(() => {
    const scrollListener = () => {
      if (window.scrollY > 10) {
        setHeaderShadow(true);
      } else {
        setHeaderShadow(false);
      }
    };

    window.addEventListener("scroll", scrollListener);

    return () => {
      window.removeEventListener("scroll", scrollListener);
    };
  }, []);

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      <Navbar shadow={headerShadow} />

      <main>
        <Home />
        <ShopPage />
      </main>

      <Footer />
    </CartContext.Provider>
  );
};

export default App;
