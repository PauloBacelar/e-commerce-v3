import React from "react";
import { Navbar, Home, ShopPage, Footer } from "./components";

const App = () => {
  return (
    <>
      <Navbar />

      <main>
        <Home />
        <ShopPage />
      </main>

      <Footer />
    </>
  );
};

export default App;
