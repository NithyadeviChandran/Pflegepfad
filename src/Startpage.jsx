import React from "react";
import Frontpage from './assets/Frontpage.png'
import Path from './assets/Path.svg'

function Startpage() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow mt-12">
        <div className="container mx-auto px-4 py-8 md:py-16">
          <h2 className="text-xl sm:text-2xl md:text-3xl text-blue-900 font-bold mb-4">
            Ihr Weg durch die Pflege - Schritt für Schritt
          </h2>
          <div className="flex justify-between mt-2 mb-2 border rounded border-blue-900 p-2 bg-blue-100 w-full max-w-md md:max-w-2xl">
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
          className="relative w-full max-w-4xl mx-auto z-0"
            style={{
            minHeight: "700px",
            backgroundImage: `url(${Path})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "contain",
        }}
        >
          </div>
        </div>
      </main>
    </div>
  );
}

export default Startpage;
