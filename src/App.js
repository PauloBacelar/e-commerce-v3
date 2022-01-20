import React from "react";
import { Navbar, Home, ShopPage } from "./components";

const App = () => {
  return (
    <>
      <Navbar />

      <main>
        <Home />

        <ShopPage />
      </main>
    </>
  );
};

export default App;
