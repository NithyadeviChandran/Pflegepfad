import React from "react";
import Logo from "./assets/logopflege.svg"

function Header() {
  return (
    <div className="navbar z-20 fixed top-0 left-0 w-full py-1  bg-white transition-transform duration-300">
      {/* md:-ml-36 lg:-ml-1 */}
    <div className="container flex gap-1 items-center px-4 py-2 sm:px-6 sm:py-2 ">
    {/* md:px-52 md:py-2 md:gap-2 lg:px-72 lg:py-4 lg:gap-2 */}
      <img src={Logo} alt="Logo" className="h-14 text-left  w-full " />
      {/* mt-2 -ml-8 md:-ml-8 md:h-16 md:w-full lg:w-full lg:-ml-52 */}
     </div>
  </div>
  );
}

export default Header;
