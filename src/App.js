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
  const [cart, setCart] = useState({
    products: [],
    totalPrice: 0,
    quantity: 0,
  });

  return (
    <CartProvider>
      <BrowserRouter>
        <Navbar />

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
