import React from "react";
import Lo from "./assets/Vector.png";

function Header() {
  return (
    <div className="navbar  z-10 fixed top-0 left-0 w-full py-1 ">
      <div className="container mx-auto flex items-center justify-between px-6 py-2 md:px-12">
        <img src={Lo} alt="Logo" className="h-12 w-12" />
        <h1 className="text-2xl md:text-4xl font-rem text-customBlue text-center flex-1">
          PflegePfad Bayern
        </h1>
      </div>
      <h4 className="text-xs  md:text-4xl font-sans text-customBlue text-center flex-1">
        {/* Der Wegbegleiter für Betroffenen und Interessierte */}
      </h4>
    </div>
  );
}

export default Header;
