import React from "react";
import image from "./assets/image.png";

function Header() {
  return (
    <div className="navbar bg-customBlue z-10 fixed top-0 left-0 w-full z-1 py-1">
      <div className="container mx-auto flex  items-center justify-between px-4 md:px-8">
        <img src={image} alt="Logo" className="h-12 w-12" />
        <h1 className="text-2xl md:text-4xl font-sans text-gray-100 text-center flex-1">
          PflegePfad Bayern
        </h1>
 
      </div>
      <h4 className="text-xs md:text-4xl font-sans text-gray-100 text-center flex-1">Der Wegbegleiter für Betroffenen und Interessierte</h4>
    </div>
  );
}

export default Header;
