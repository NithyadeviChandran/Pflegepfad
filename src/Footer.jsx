import React from 'react'

function Footer() {
  return (
    <div className="navbar h-12 bg-customBlue z-10 fixed bottom-0 left-0 w-full py-1">
      <div className="container mx-auto flex  items-center justify-between px-4 md:px-8">
        <h6 className="text-sm md:text-lg font-rem text-gray-100 text-center flex-1">
        Datenschutz | Impressum | Hilfe | Kontakt 
        </h6>
      </div>
    </div>
  )
}

export default Footer