import React from "react";
import Navbar from "./components/Navbar";
import Card from "./components/RestaurantCard";
import Footer from "./components/Footer";
import Body from "./components/Body";

function App() {
  return (
    <>
      <Navbar />
      <Card/>
      <Body/>
      <Footer/>
    </>
  );
}

export default App;
