import Navbar from "./components/Navbar";
import Body from "./components/Body";
import About from "./components/About";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import ErrorPage from "./components/Error";
import RestaurentManu from "./components/RestaurentManu";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


const App = () => {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/Body" element={<Body />}></Route>
        <Route exact path="/About" element={<About />}></Route>
        <Route exact path="/Contact" element={<Contact />}></Route>
        <Route exact path="/restaurent/:id" element={<RestaurentManu />}></Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </Router>
    </>
  );
};

export default App;
