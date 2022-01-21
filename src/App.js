import React, { useState, useEffect } from "react";
import { Navbar, Home, ShopPage, Footer } from "./components";

const App = () => {
  const [headerShadow, setHeaderShadow] = useState(false);

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
    <>
      <Navbar shadow={headerShadow} />

      <main>
        <Home />
        <ShopPage />
      </main>

      <Footer />
    </>
  );
};

export default App;
