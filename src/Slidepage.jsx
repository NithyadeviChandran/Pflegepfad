import React, { useState } from "react";

const [currentSlide, setCurrentSlide] = useState(0);
function Slidepage() {
  const slides = [
    <div key="slide-1">
      <div className="border border-blue-900 bg-blue-100 shadow-lg rounded-lg p-6">
        <h3 className="text-lg font-semibold text-blue-900">
          Wie erkenne ich Pflegebedürftigkeit?
        </h3>
        <p className="text-base font-sans text-gray-900">
          Pflegebedürftigkeit erkennst du daran, dass alltägliche Aktivitäten
          wie Anziehen, Essen oder Körperpflege zunehmend schwerfallen. Auch
          Veränderungen im Verhalten, wie Vergesslichkeit oder
          Orientierungsprobleme, sind oft erste Anzeichen. Es ist wichtig,
          darauf zu achten, ob sich die Mobilität oder die geistige Verfassung
          einer Person verschlechtert.
        </p>
      </div>
    </div>,
    <div key="slide-2">
      <div className="border border-blue-900 bg-blue-100 shadow-lg rounded-lg p-6">
        <h3 className="text-lg font-semibold text-blue-900">
          Welche Anzeichen gibt es?
        </h3>
        <p className="text-base font-sans text-gray-900">
          Typische Anzeichen sind körperliche Einschränkungen, zum Beispiel beim
          Gehen oder Aufstehen, sowie Schwierigkeiten im Umgang mit dem
          Haushalt. Vernachlässigte Hygiene oder Probleme beim Essen und Trinken
          sind ebenfalls Warnsignale. Auch emotionale Veränderungen wie
          Verwirrung oder Apathie können auf Pflegebedürftigkeit hindeuten.
        </p>
      </div>
    </div>,
    <div key="slide-3">
      <div className="border border-blue-900 bg-blue-100 shadow-lg rounded-lg p-6">
        <h3 className="text-lg font-semibold text-blue-900">
          Wer kann helfen, das festzustellen?
        </h3>
        <p className="text-base font-sans text-gray-900">
          Pflegeberater, Hausärzte und Pflegedienste können eine erste
          Einschätzung vornehmen. Sie bieten Beratung und Unterstützung bei der
          Beurteilung des Pflegebedarfs an. Der Medizinische Dienst der
          Krankenkassen führt eine offizielle Begutachtung durch, um den
          Pflegegrad zu ermitteln.
        </p>
      </div>
    </div>,
  ];

  const handleSlideChange = (index) => {
    setCurrentSlide(index);
  };
  return (
    <div className="p-4 md:p-16">
      <h2 className="text-lg font-semibold text-blue-900 mt-4 mb-4 text-center">
        Erkennung von Pflegebedürftigkeit
      </h2>
    </div>
  );
}

export default Slidepage;
