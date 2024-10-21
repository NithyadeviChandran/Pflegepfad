import React from "react";
import {Routes, Route } from "react-router-dom";
import Header from './Header'
import Startpage from "./Startpage";
import Slidepage from "./Slidepage";
import Footer from './Footer'
import { SlideProvider } from "./SlideContext"; // Import the provider

function App() {
  return (
    <SlideProvider>
    <Header/>
        <Routes>
          <Route path="/" element={<Startpage />} />
          <Route path="/slidepage" element={<Slidepage />} />
        </Routes>
        <Footer/>
     </SlideProvider>
  
  );
}

export default App;
