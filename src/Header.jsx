import React from "react";
import Lo from "./assets/Vector.png";

function Header() {
  return (
    <div className="navbar z-20 fixed top-0 left-0 w-full py-1 md:-ml-36 lg:-ml-1 bg-white transition-transform duration-300">
    <div className="container mx-auto flex gap-1 items-center px-4 py-2 sm:px-6 sm:py-2 md:px-52 md:py-2 md:gap-2 lg:px-72 lg:py-4 lg:gap-2">
      <img src={Lo} alt="Logo" className="h-12 w-12 md:-ml-8 md:h-16 md:w-16" />
      <h1 className="text-2xl sm:text-2xl font-semibold md:text-4xl font-rem text-customBlue flex-1  whitespace-nowrap">
        PflegePfad Bayern
      </h1>
    </div>
    {/* <h4 className="text-xs sm:text-base ml-6 md:text-lg font-rem text-customBlue text-center flex-1 -mt-6 sm:px-12 md:ml-24 py-2 lg:px-96 lg:py-4">
      Der Wegbegleiter für Betroffene und Interessierte
    </h4> */}
  </div>
  );
}

export default Header;
