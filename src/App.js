import React, { useState, useEffect } from "react";
import { Navbar, Home, ShopPage, Footer } from "./components";
import CartProvider from "./context/CartProvider";

const App = () => {
  const [headerShadow, setHeaderShadow] = useState(false);
  const [cart, setCart] = useState({
    products: [],
    totalPrice: 0,
    quantity: 0,
  });

  console.log(cart);

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
    <CartProvider>
      <Navbar shadow={headerShadow} />

      <main>
        <Home />
        <ShopPage />
      </main>

      <Footer />
    </CartProvider>
  );
};

export default App;
