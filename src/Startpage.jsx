import React from "react";
import {Link} from "react-router-dom"
import Frontpage from './assets/Frontpage.png'
import Path from './assets/Path.svg'

function Startpage() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow mt-12">
        <div className="container relative w-full max-w-4xl  px-4 py-8 md:py-16">
          <h2 className="text-xl sm:text-2xl md:text-3xl text-blue-900 font-bold mb-4">
            Ihr Weg durch die Pflege - Schritt für Schritt
          </h2>
          <div className="flex justify-between mx-auto mt-2 mb-6 border rounded border-blue-900 p-2 bg-blue-100 w-full max-w-md md:max-w-2xl">
            <p className="whitespace-normal text-blue-900 font-sans">
              Die Reise geht los! Hier sehen Sie, wie ein beispielhafter Verlauf
              Ihrer Pflegetätigkeit als Angehöriger aussehen könnte:
            </p>
            <img
              className="h-24 fill-blue-900 bg-blue-100"
              src={Frontpage}
              alt="Description"
            />
          </div>
          
          <div 
          className="relative flex items-center bg-cover bg-center h-screen z-0"
            style={{
            minHeight: "700px",
            backgroundImage: `url(${Path})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "contain",
        }}
        >
   
              <Link
        to="/blank"
        className="absolute underline text-blue-900 text-sm sm:text-lg md:text-xl sm:w-auto w-full"
        style={{ top: '0.1%', left: '13%' }} 
      >
       <span className="block sm:inline">Erkennung von</span> 
       <span className="block sm:inline">Pflegebedürftigkeit</span>
      </Link>
      <Link
        to="/blank"
        className="absolute underline text-blue-900 text-sm sm:text-lg md:text-xl sm:w-auto w-full"
        style={{ top: '10%', left: '50%' }} 
      >
       <span className="block sm:inline">Pflegegrad</span> 
       <span className="block sm:inline">Einstufung</span>
      </Link>
      <Link
        to="/blank"
        className="absolute underline text-blue-900 text-sm sm:text-lg md:text-xl sm:w-auto w-full"
        style={{ top: '23%', left: '55%' }} 
      >
       <span className="block sm:inline">Planung der Pflege</span> 
       <span className="block sm:inline"></span>
      </Link>
      <Link
        to="/blank"
        className="absolute underline text-blue-900 text-sm sm:text-lg md:text-xl sm:w-auto w-full"
        style={{ top: '37%', left: '20%' }} 
      >
       <span className="block sm:inline">Unterstützung</span> 
       <span className="block sm:inline">im Alltag</span>
      </Link>
      <Link
        to="/blank"
        className="absolute underline text-blue-900 text-sm sm:text-lg md:text-xl sm:w-auto w-full"
        style={{ top: '47%', left: '47%' }} 
      >
       <span className="block sm:inline">Finanzielle</span> 
       <span className="block sm:inline">Unterstützung</span>
      </Link>
      <Link
        to="/blank"
        className="absolute underline text-blue-900 text-sm sm:text-lg md:text-xl sm:w-auto w-full"
        style={{ top: '62%', left: '20%' }} 
      >
       <span className="block sm:inline">Entlastung</span> 
       <span className="block sm:inline">für Angehörige</span>
      </Link>

      <Link
        to="/blank"
        className="absolute underline text-blue-900 text-sm sm:text-lg md:text-xl sm:w-auto w-full"
        style={{ top: '82%', left: '50%' }} 
      >
       <span className="block sm:inline">Umgang mit</span> 
       <span className="block sm:inline">Herausforderungen</span>
      </Link>
     
          </div>
        </div>
      </main>
    </div>
  );
}

export default Startpage;
