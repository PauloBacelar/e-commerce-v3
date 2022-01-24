import React, { useState, useEffect } from "react";
import {
  Navbar,
  Footer,
  ProductsPage,
  CartPage,
  ScrollTop,
} from "./components";
import { BrowserRouter, Route, Routes } from "react-router-dom";
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
      <BrowserRouter>
        <Navbar shadow={headerShadow} />

        <main>
          <ScrollTop />
          <Routes>
            <Route path="/" element={<ProductsPage />} exact />
            <Route path="/cart" element={<CartPage />} exact />
          </Routes>
        </main>
      </BrowserRouter>

      <Footer />
    </CartProvider>
  );
};

export default App;
