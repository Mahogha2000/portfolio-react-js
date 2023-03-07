import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bulma/css/bulma.min.css";
import "./App.css";
import NavBar from "./common/NavBar";
import Home from "./screens/Home";
import Aos from "aos";
import "aos/dist/aos.css";
import AboutMe from "./screens/AboutMe";
import Gallery from "./screens/Gallery";
import Contact from "./screens/Contact";

function App() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <>
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutMe />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
