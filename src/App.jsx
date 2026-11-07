import { useState } from "react";
import "./App.css";
import products from "./data.js";
import promos from "./promo.js";
import Navigation from "./components/navigation/Navigation.jsx";
import Slider from "./components/slider/Slider.jsx";
import Products from "./components/products/Products.jsx";
import Ads from "./components/ads/Ads.jsx";
import Favourites from "./components/favourites/Favourites.jsx";
import Download from "./components/download-app/Download.jsx";
import Community from "./components/community/Community.jsx";
import Footer from "./components/footer/Footer.jsx";
function App() {
  const [carts, setCarts] = useState(products);
  const Increase = (id) => {
    setCarts((carts) => {
      return carts.map((cart) => {
        if (cart.id === id) {
          return {
            ...cart,
            count: ++cart.count,
          };
        }
        return cart;
      });
    });
  };
  const Dicrease = (id) => {
    setCarts((carts) => {
      return carts.map((cart) => {
        if (cart.id === id) {
          return {
            ...cart,
            count: cart.count > 1 ? --cart.count : 0,
          };
        }
        return cart;
      });
    });
  };
  return (
    <>
      <Navigation
        productСount={carts.reduce((total, cart) => total + cart.count, 0)}
      />
      <Slider />
      <div className="container">
        <Products carts={carts} Increase={Increase} Dicrease={Dicrease} />
      </div>
      <Ads />
      <div className="container">
        <Favourites promos={promos} />
        <Download />
      </div>
      <Community />
      <Footer />
    </>
  );
}

export default App;
