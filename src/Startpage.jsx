import React, { useState, useEffect } from "react";
import "./Startpage.css";
import { Link, useNavigate } from "react-router-dom";
import { useSlideData } from "./SlideContext";
import image from "./assets/carepic.png";
import Path from "./assets/Path.svg";
import Modal from "./Modal";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import image1 from './assets/firstcircle.png'
import image2 from './assets/secondcircle.png'
import image3 from './assets/thirdcircle.png'

function Startpage() {
  const [activeModal, setActiveModal] = useState(null);
  const navigate = useNavigate();
  const { setSlideData } = useSlideData();

  const openModal = (modalId) => setActiveModal(modalId);
  const closeModal = () => setActiveModal(null);

  const handleNavigateToSlide = (slideData) => {
    setSlideData(slideData);
    closeModal();
    navigate("/slidepage");
  };
  const handleBack = () => {
    navigate("/");
  };
  // const [isModalOpen, setModalOpen] = useState(false);
  // const openModal = () => setModalOpen(true);
  // const closeModal = () => setModalOpen(false);
  const [isAtBottom, setIsAtBottom] = useState(false);

  const handleScroll = () => {
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const scrollTop = window.scrollY || document.documentElement.scrollTop;

    if (windowHeight + scrollTop >= documentHeight - 50) {
      setIsAtBottom(true);
    } else {
      setIsAtBottom(false);
    }
    if (scrollTop > lastScrollTop) {
  
      setIsHeaderVisible(false);
    } else {
     
      setIsHeaderVisible(true);
  };

  setLastScrollTop(scrollTop);
};

  const handleScrollToggle = () => {
    if (isAtBottom) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } else {
      window.scrollTo({
        top: window.innerHeight,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      <main className="flex-grow mt-12 mb-16 ">
        <div className="container relative w-full max-w-4xl  px-4 py-8 md:px-16 py-16 w-full md:mt-10">
          <div className="flex justify-between mx-auto mb-6 border rounded border-blue-200 bg-blue-100 w-full md:w-full lg:w-full ">
            <div className="flex flex-col justify-center flex-1 ">
              <h2 className="text-lg ml-1 sm:text-2xl md:text-3xl  text-customBlue font-semibold">
                Die Reise geht los!
              </h2>
              <p className="whitespace-normal px-2 text-sm sm:text-lg md:text-xl text-customBlue font-rem">
                Hier sehen Sie, wie ein beispielhafter Verlauf von Pflege
                aussehen könnte:
              </p>
            </div>

            <div className="flex-shrink-0">
              <img
                className="w-36 h-28 object-cover rounded-full"
                src={image}
                alt="Description"
              />
            </div>
          </div>

          <div
            className="path-container relative flex justify-center items-center bg-cover bg-center min-h-[900px] z-0 md:min-h-[1200px]"
            style={{
              backgroundImage: `url(${Path})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "contain",
            }}
          >
            <Link
              onClick={() => openModal("modal1")}
              className="absolute underline text-customBlue75 font-rem text-sm sm:text-lg md:text-xl w-auto sm:w-auto w-full "
              style={{ top: "0.2%", left: "9%" }}
            >
              <span className="block sm:inline">Erkennung von</span>
              <span className="block sm:inline">Pflegebedürftigkeit</span>
            </Link>
            <Modal 
              isOpen={activeModal === "modal1"}
              onClose={closeModal}
              title="Erkennung von Pflegebedürftigkeit"
              content={
                <ul className="list-disc pl-5 font-rem text-sm sm:text-lg md:text-xl space-y-2 text-customBlue75">
                  <li>Wie erkenne ich Pflegebedürftigkeit?</li>
                  <li>Welche Anzeichen gibt es?</li>
                  <li>Wer kann helfen, das festzustellen?</li>
                </ul>
              }
              actionLabel="Mehr erfahren"
              onAction={() =>
                handleNavigateToSlide({
                  title:(<span className="flex items-center ">
                    <img 
                      src={image1}
                      alt="number icon" 
                      className="w-8 h-8 mr-2" 
                    />
                    <span className="-ml-1">Erkennung von </span>
                    <span > Pflegebedürftigkeit</span>
                  </span>),
                  slides: [
                    <div key="slide-1">
                      <div className="border bg-blue-100 shadow-lg rounded-lg text-center p-4 ">
                        <h3 className="text-lg text-left font-rem font-semibold mb-2 text-customBlue">
                          Wie erkenne ich Pflegebedürftigkeit?
                        </h3>
                        <p className="text-base font-rem leading-relaxed text-justify text-sm sm:text-lg md:text-xl space-y-2 text-customBlue75">
                          Pflegebedürftigkeit erkennst du daran, dass
                          alltägliche Aktivitäten wie Anziehen, Essen oder
                          Körperpflege zunehmend schwerfallen. Auch
                          Veränderungen im Verhalten, wie Vergesslichkeit oder
                          Orientierungsprobleme, sind oft erste Anzeichen. Es
                          ist wichtig, darauf zu achten, ob sich die Mobilität
                          oder die geistige Verfassung einer Person
                          verschlechtert.
                        </p>
                      </div>
                    </div>,
                    <div key="slide-2">
                      <div className="border bg-blue-100 shadow-lg rounded-lg text-center p-4">
                        <h3 className="text-lg text-left font-rem font-semibold mb-2 text-customBlue">
                          Welche Anzeichen gibt es?
                        </h3>
                        <p className="text-base font-rem leading-relaxed text-justify text-sm sm:text-lg md:text-xl space-y-2 text-customBlue75">
                          Typische Anzeichen sind körperliche Einschränkungen,
                          zum Beispiel beim Gehen oder Aufstehen, sowie
                          Schwierigkeiten im Umgang mit dem Haushalt.
                          Vernachlässigte Hygiene oder Probleme beim Essen und
                          Trinken sind ebenfalls Warnsignale. Auch emotionale
                          Veränderungen wie Verwirrung oder Apathie können auf
                          Pflegebedürftigkeit hindeuten.
                        </p>
                      </div>
                    </div>,
                    <div key="slide-3">
                      <div className="border bg-blue-100 shadow-lg rounded-lg text-center p-4">
                        <h3 className="text-lg text-left font-rem font-semibold mb-2 text-customBlue">
                          Wer kann helfen, das festzustellen?
                        </h3>
                        <p className="text-base font-rem leading-relaxed text-justify text-sm sm:text-lg md:text-xl space-y-2 text-customBlue75">
                          Pflegeberater, Hausärzte und Pflegedienste können eine
                          erste Einschätzung vornehmen. Sie bieten Beratung und
                          Unterstützung bei der Beurteilung des Pflegebedarfs
                          an. Der Medizinische Dienst der Krankenkassen führt
                          eine offizielle Begutachtung durch, um den Pflegegrad
                          zu ermitteln.
                        </p>
                      </div>
                    </div>,
                    <div key="slide-4">
                      <div className="border bg-blue-100 shadow-lg rounded-lg text-center p-4">
                        <button
                          className="bg-customBlue text-white font-rem py-2 px-4 rounded-full mt-20 mb-20"
                          onClick={handleBack}
                        >
                          Zurück zum PflegePfad
                        </button>
                      </div>
                    </div>,
                  ],
                })
              }
            />

            <Link
              onClick={() => openModal("modal2")}
              className="absolute underline text-customBlue75 font-rem text-sm sm:text-lg md:text-xl sm:w-auto w-full"
              style={{ top: "10%", left: "50%" }}
            >
              
              <span className="block sm:inline">Pflegegrad Einstufung</span>
              <span className="block sm:inline"></span>
            </Link>
            <Modal
              isOpen={activeModal === "modal2"}
              onClose={closeModal}
              title="Pflegegrad Einstufung"
              content={
                <ul className="list-disc font-rem text-sm sm:text-lg md:text-xl space-y-2 text-customBlue75">
                  <li>Wie beantrage ich einen Pflegegrad?</li>
                  <li>Welche Unterlagen brauche ich?</li>
                  <li>Wie lange dauert die Bearbeitung?</li>
                </ul>
              }
              actionLabel="Mehr erfahren"
              onAction={() =>
                handleNavigateToSlide({
                  title:(<span className="flex ml-4">
                    <img 
                      src={image2}
                      alt="number icon" 
                      className="w-8 h-8 mr-4" 
                    />
                    Pflegegrad Einstufung
                  </span>),
                  slides: [
                    <div key="slide-1">
                      <div className="border bg-blue-100 shadow-lg rounded-lg text-center p-4">
                        <h3 className="text-lg text-left font-rem font-semibold mb-2 text-customBlue75">
                          Wie beantrage ich einen Pflegegrad?
                        </h3>
                        <p className="text-base font-rem leading-relaxed text-justify text-sm sm:text-lg md:text-xl space-y-2 text-customBlue75">
                          Den Pflegegrad beantragst du bei der Pflegekasse der
                          Krankenkasse der pflegebedürftigen Person. Der Antrag
                          kann formlos gestellt werden, meist per Brief oder
                          Anruf. Anschließend erfolgt eine Begutachtung durch
                          den Medizinischen Dienst, um den Grad der
                          Pflegebedürftigkeit festzustellen.
                        </p>
                      </div>
                    </div>,
                    <div key="slide-2">
                      <div className="border  bg-blue-100 shadow-lg rounded-lg text-center p-4">
                        <h3 className="text-lg text-left font-rem font-semibold mb-2 text-customBlue75">
                          Welche Unterlagen brauche ich?
                        </h3>
                        <p className="text-base font-rem leading-relaxed text-justify text-sm sm:text-lg md:text-xl space-y-2 text-customBlue75">
                          Für den Antrag benötigst du ärztliche Befunde,
                          Krankenhausberichte und eventuell Berichte von
                          Pflegediensten. Auch eine eigene Dokumentation des
                          Gesundheitszustands und der Pflegebedürfnisse kann
                          hilfreich sein. Die Pflegekasse informiert dich über
                          die genauen Anforderungen.
                        </p>
                      </div>
                    </div>,
                    <div key="slide-3">
                      <div className="border  bg-blue-100 shadow-lg rounded-lg text-center p-4">
                        <h3 className="text-lg text-left font-rem font-semibold mb-2 text-customBlue75">
                          Wie lange dauert die Bearbeitung?
                        </h3>
                        <p className="text-base font-rem leading-relaxed text-justify text-sm sm:text-lg md:text-xl space-y-2 text-customBlue75">
                          Die Bearbeitung eines Antrags auf Pflegegrad dauert in
                          der Regel etwa 3 bis 5 Wochen. Der Medizinische Dienst
                          muss die Begutachtung innerhalb von 20 Arbeitstagen
                          nach Antragstellung durchführen. In dringenden Fällen
                          kann der Prozess beschleunigt werden.
                        </p>
                      </div>
                    </div>,
                  ],
                })
              }
            />

            <Link
              onClick={() => openModal("modal3")}
              className="absolute font-rem underline text-customBlue75 text-sm sm:text-lg md:text-xl sm:w-auto w-full md:px-24"
              style={{ top: "24%", left: "8%" }}
            >
              <span className="block sm:inline"> Planung der Pflege</span>
              <span className="block sm:inline"> </span>
            </Link>
            <Modal
              isOpen={activeModal === "modal3"}
              onClose={closeModal}
              title="Planung der Pflege
"
              content={
                <ul className="list-disc font-rem pl-5 space-y-2 text-customBlue75">
                  <li>Wie erstelle ich einen Pflegeplan?</li>
                  <li>Was muss ich dabei beachten?</li>
                  <li>Wie oft sollte ich den Plan anpassen?</li>
                </ul>
              }
              actionLabel="Mehr erfahren"
              onAction={() =>
                handleNavigateToSlide({
                  title:(<span className="flex items-center ">
                    <img 
                      src={image3}
                      alt="number icon" 
                      className="w-8 h-8 mr-2 ml-2" 
                    />
                    <span className="-ml-1">Planung der</span>
                    <span > Pflege</span>
                  </span>),
                  slides: [
                    <div key="slide-1">
                      <div className="border  bg-blue-100 shadow-lg rounded-lg text-center p-4">
                        <h3 className="text-lg text-left font-rem font-semibold mb-2 text-customBlue75">
                          Wie erstelle ich einen Pflegeplan?
                        </h3>
                        <p className="text-base font-rem leading-relaxed text-justify text-sm sm:text-lg md:text-xl space-y-2 text-customBlue75">
                          Ein Pflegeplan wird oft in Zusammenarbeit mit einem
                          Pflegedienst oder Pflegeberater erstellt. Er
                          berücksichtigt die individuellen Bedürfnisse der
                          pflegebedürftigen Person und legt fest, welche
                          Maßnahmen wann und durch wen durchgeführt werden. So
                          kann eine strukturierte und bedarfsgerechte Versorgung
                          sichergestellt werden.
                        </p>
                      </div>
                    </div>,
                    <div key="slide-2">
                      <div className="border  bg-blue-100 shadow-lg rounded-lg text-center p-4">
                        <h3 className="text-lg text-left font-rem font-semibold mb-2 text-customBlue75">
                          Was muss ich dabei beachten?
                        </h3>
                        <p className="text-base font-rem leading-relaxed text-justify text-sm sm:text-lg md:text-xl space-y-2 text-customBlue75">
                          Bei der Erstellung eines Pflegeplans ist es wichtig,
                          die körperlichen und emotionalen Bedürfnisse der
                          Person zu berücksichtigen. Du solltest realistische
                          Ziele setzen und sowohl professionelle Pflege als auch
                          familiäre Unterstützung einplanen. Auch der Zugang zu
                          Hilfsmitteln und Pflegediensten spielt eine zentrale
                          Rolle.
                        </p>
                      </div>
                    </div>,
                    <div key="slide-3">
                      <div className="border bg-blue-100 shadow-lg rounded-lg text-center p-4">
                        <h3 className="text-lg text-left font-rem font-semibold mb-2 text-customBlue75">
                          Wie oft sollte ich den Plan anpassen?
                        </h3>
                        <p className="text-base font-rem leading-relaxed text-justify text-sm sm:text-lg md:text-xl space-y-2 text-customBlue75">
                          Ein Pflegeplan sollte regelmäßig überprüft und bei
                          Bedarf angepasst werden. Vor allem bei
                          gesundheitlichen Veränderungen oder neuen
                          Anforderungen ist eine Aktualisierung notwendig. Auch
                          Änderungen in der Pflegesituation oder bei den
                          verfügbaren Ressourcen sollten berücksichtigt werden.
                        </p>
                      </div>
                    </div>,
                  ],
                })
              }
            />

            <Link
              onClick={() => openModal("modal4")}
              className="absolute underline font-rem text-customBlue75 text-sm sm:text-lg md:text-xl sm:w-auto w-full"
              style={{ top: "37%", left: "5%" }}
            >
              <span className="block sm:inline"> Praktische Unter-</span>
              <span className="block sm:inline"> stützung im Alltag </span>
            </Link>
            <Modal
              isOpen={activeModal === "modal4"}
              onClose={closeModal}
              title="Praktische Unterstützung im Alltag
"
              content={
                <ul className="list-disc font-rem text-sm pl-5 space-y-2 text-customBlue75">
                  <li>Welche Hilfen gibt es im Alltag?</li>
                  <li>Wo finde ich Unterstützung in meiner Nähe?</li>
                  <li>Wie kann ich den Alltag erleichtern?</li>
                </ul>
              }
              actionLabel="Mehr erfahren"
              onAction={() =>
                handleNavigateToSlide({
                  title: "Praktische Unterstützung im Alltag",
                  slides: [
                    <div key="slide-1">
                      <div className="border bg-blue-100 shadow-lg rounded-lg text-center p-4">
                        <h3 className="text-lg text-left font-semibold mb-2 text-customBlue75">
                          Welche Hilfen gibt es im Alltag?
                        </h3>
                        <p className="text-base font-rem leading-relaxed text-justify text-sm sm:text-lg md:text-xl space-y-2 text-customBlue75">
                          Es gibt verschiedene Hilfen wie mobile Pflegedienste,
                          die bei der Körperpflege oder dem Haushalt
                          unterstützen. Auch Essen auf Rädern, Fahrdienste oder
                          Hausnotrufsysteme bieten wertvolle Unterstützung.
                          Darüber hinaus gibt es ehrenamtliche Angebote oder
                          Nachbarschaftshilfen, die den Alltag erleichtern
                          können.
                        </p>
                      </div>
                    </div>,
                    <div key="slide-2">
                      <div className="border bg-blue-100 shadow-lg rounded-lg text-center p-4">
                        <h3 className="text-lg text-left font-rem font-semibold mb-2 text-customBlue75">
                          Wo finde ich Unterstützung in meiner Nähe?
                        </h3>
                        <p className="text-base font-rem leading-relaxed text-justify text-sm sm:text-lg md:text-xl space-y-2 text-customBlue75">
                          Unterstützung findest du bei Pflegestützpunkten,
                          Sozialverbänden oder lokalen Pflegeberatungsstellen.
                          Auch Online-Datenbanken bieten eine Übersicht über
                          Hilfsangebote in deiner Region. Pflegedienste und
                          kirchliche Organisationen wie Caritas oder Diakonie
                          sind oft gut vernetzt und können weiterhelfen.
                        </p>
                      </div>
                    </div>,
                    <div key="slide-3">
                      <div className="border bg-blue-100 shadow-lg rounded-lg text-center p-4">
                        <h3 className="text-lg text-left font-rem font-semibold mb-2 text-customBlue75">
                          Wie kann ich den Alltag erleichtern?
                        </h3>
                        <p className="text-base font-rem leading-relaxed text-justify text-sm sm:text-lg md:text-xl space-y-2 text-customBlue75">
                          Alltagshilfen wie Rollatoren, Haltegriffe im Bad oder
                          Treppenlifte können die Mobilität und Sicherheit zu
                          Hause erhöhen. Ein strukturierter Tagesablauf mit
                          festen Routinen und regelmäßiger Unterstützung durch
                          Angehörige oder Pflegedienste hilft, den Alltag zu
                          bewältigen. Auch technische Hilfsmittel wie
                          Sprachassistenten können nützlich sein.
                        </p>
                      </div>
                    </div>,
                  ],
                })
              }
            />

            <Link
              onClick={() => openModal("modal5")}
              className="absolute underline font-rem text-customBlue75 text-sm sm:text-lg md:text-xl sm:w-auto w-full"
              style={{ top: "48%", left: "44%" }}
            >
              <span className="block sm:inline"> Finanzielle</span>
              <span className="block sm:inline"> Unterstützung </span>
            </Link>
            <Modal
              isOpen={activeModal === "modal5"}
              onClose={closeModal}
              title="Finanzielle Unterstützung
"
              content={
                <ul className="list-disc font-rem pl-5 space-y-2 text-customBlue75">
                  <li>Welche finanziellen Hilfen gibt es?</li>
                  <li>Wie beantrage ich Pflegegeld?</li>
                  <li>Gibt es steuerliche Vorteile?</li>
                </ul>
              }
              actionLabel="Mehr erfahren"
              onAction={() =>
                handleNavigateToSlide({
                  title: "Finanzielle Unterstützung",
                  slides: [
                    <div key="slide-1">
                      <div className="border  bg-blue-100 shadow-lg rounded-lg text-center p-4">
                        <h3 className="text-lg text-left font-rem font-semibold mb-2 text-customBlue75">
                          Welche finanziellen Hilfen gibt es?
                        </h3>
                        <p className="text-base font-rem leading-relaxed text-justify text-sm sm:text-lg md:text-xl space-y-2 text-customBlue75">
                          Es gibt verschiedene finanzielle Hilfen wie
                          Pflegegeld, Pflegesachleistungen und Zuschüsse für
                          wohnumfeldverbessernde Maßnahmen. Auch Kurzzeit- und
                          Verhinderungspflege können finanziell unterstützt
                          werden. Die Pflegekasse bietet eine detaillierte
                          Übersicht der verfügbaren Leistungen.
                        </p>
                      </div>
                    </div>,
                    <div key="slide-2">
                      <div className="border bg-blue-100 shadow-lg rounded-lg text-center p-4">
                        <h3 className="text-lg text-left font-rem font-semibold mb-2 text-customBlue75">
                          Wie beantrage ich Pflegegeld?
                        </h3>
                        <p className="text-base font-rem leading-relaxed text-justify text-sm sm:text-lg md:text-xl space-y-2 text-customBlue75">
                          Pflegegeld beantragst du bei der Pflegekasse der
                          Krankenkasse der pflegebedürftigen Person. Nach der
                          Begutachtung durch den Medizinischen Dienst wird der
                          Pflegegrad festgelegt, und je nach Pflegegrad wird das
                          Pflegegeld ausgezahlt. Es ist wichtig, alle
                          notwendigen Unterlagen vollständig einzureichen, um
                          Verzögerungen zu vermeiden.
                        </p>
                      </div>
                    </div>,
                    <div key="slide-3">
                      <div className="border bg-blue-100 shadow-lg rounded-lg text-center p-4">
                        <h3 className="text-lg text-left font-rem font-semibold mb-2 text-customBlue75">
                          Gibt es steuerliche Vorteile?
                        </h3>
                        <p className="text-base font-rem leading-relaxed text-justify text-sm sm:text-lg md:text-xl space-y-2 text-customBlue75">
                          Ja, pflegende Angehörige können bestimmte Pflegekosten
                          steuerlich geltend machen, zum Beispiel Ausgaben für
                          Pflegepersonal oder Hilfsmittel. Auch ein
                          Pflege-Pauschbetrag kann unter bestimmten
                          Voraussetzungen in Anspruch genommen werden. Ein
                          Steuerberater kann helfen, die Vorteile optimal zu
                          nutzen.
                        </p>
                      </div>
                    </div>,
                  ],
                })
              }
            />
            <Link
              onClick={() => openModal("modal6")}
              className="absolute underline font-rem text-customBlue75 text-sm sm:text-lg md:text-xl sm:w-auto w-full"
              style={{ top: "62%", left: "17%" }}
            >
              <span className="block sm:inline"> Entlastung</span>
              <span className="block sm:inline"> für Angehörige</span>
            </Link>
            <Modal
              isOpen={activeModal === "modal6"}
              onClose={closeModal}
              title="Entlastung für Angehörige
"
              content={
                <ul className="list-disc font-rem pl-5 space-y-2 text-customBlue75">
                  <li>Welche Entlastungsmöglichkeiten gibt es?</li>
                  <li>Wie finde ich Kurzzeitpflege?</li>
                  <li>Gibt es Selbsthilfegruppen?</li>
                </ul>
              }
              actionLabel="Mehr erfahren"
              onAction={() =>
                handleNavigateToSlide({
                  title: "Entlastung für Angehörige",
                  slides: [
                    <div key="slide-1">
                      <div className="border  bg-blue-100 shadow-lg rounded-lg text-center p-4">
                        <h3 className="text-lg text-left font-rem font-semibold mb-2 text-blue-900">
                          Welche Entlastungsmöglichkeiten gibt es?
                        </h3>
                        <p className="text-base font-rem leading-relaxed text-justify text-sm sm:text-lg md:text-xl text-customBlue75 text-customBlue75">
                          Entlastung bieten Pflegedienste, Tagespflege oder
                          Kurzzeitpflege einrichtungen. Auch
                          Verhinderungspflege, bei der professionelle Kräfte
                          zeitweise die Pflege übernehmen, kann eine wertvolle
                          Hilfe sein. Beratungsstellen unterstützen pflegende
                          Angehörige dabei, passende Entlastungsangebote zu
                          finden.
                        </p>
                      </div>
                    </div>,
                    <div key="slide-2">
                      <div className="border bg-blue-100 shadow-lg rounded-lg text-center p-4">
                        <h3 className="text-lg text-left font-rem font-semibold mb-2 text-blue-900">
                          Wie finde ich Kurzzeitpflege?
                        </h3>
                        <p className="text-base font-rem leading-relaxed text-justify text-sm sm:text-lg md:text-xl space-y-2 text-customBlue75">
                          Kurzzeitpflege kann über die Pflegekasse organisiert
                          werden. Es gibt spezialisierte Einrichtungen, die
                          vorübergehende Pflege anbieten, wenn Angehörige eine
                          Auszeit benötigen. Pflegestützpunkte oder
                          Pflegeberater helfen dabei, geeignete Plätze in der
                          Nähe zu finden und die Kostenübernahme zu klären.
                        </p>
                      </div>
                    </div>,
                    <div key="slide-3">
                      <div className="border bg-blue-100 shadow-lg rounded-lg text-center p-4">
                        <h3 className="text-lg text-left font-rem font-semibold mb-2 text-blue-900">
                          Gibt es Selbsthilfegruppen?
                        </h3>
                        <p className="text-base font-rem leading-relaxed text-justify text-sm sm:text-lg md:text-xl space-y-2 text-customBlue75">
                          Ja, es gibt viele Selbsthilfegruppen für pflegende
                          Angehörige, die den Austausch und gegenseitige
                          Unterstützung ermöglichen. Diese Gruppen bieten Raum
                          für Gespräche, emotionale Entlastung und den Austausch
                          von Erfahrungen. Informationen dazu findest du bei
                          Pflegestützpunkten oder Online-Selbsthilfeportalen.
                        </p>
                      </div>
                    </div>,
                  ],
                })
              }
            />

            <Link
              onClick={() => openModal("modal7")}
              className="absolute underline text-customBlue75 font-rem text-sm sm:text-lg md:text-xl sm:w-auto w-full"
              style={{ top: "82%", left: "52%" }}
            >
              <span className="block sm:inline"> Umgang mit</span>
              <span className="block sm:inline"> Herausforderungen</span>
            </Link>
            <Modal
              isOpen={activeModal === "modal7"}
              onClose={closeModal}
              title="Umgang mit Herausforderungen
"
              content={
                <ul className="list-disc font-rem pl-5 space-y-2 text-customBlue75">
                  <li>Wie gehe ich mit Stress um?</li>
                  <li>Was mache ich bei Konflikten?</li>
                  <li>Wie bewältige ich Überforderung?</li>
                </ul>
              }
              actionLabel="Mehr erfahren"
              onAction={() =>
                handleNavigateToSlide({
                  title: "Umgang mit Herausforderungen",
                  slides: [
                    <div key="slide-1">
                      <div className="border  bg-blue-100 shadow-lg rounded-lg text-center p-4">
                        <h3 className="text-lg text-left font-rem font-semibold mb-2 text-blue-900">
                          Wie gehe ich mit Stress um?
                        </h3>
                        <p className="text-base font-rem leading-relaxed text-justify text-sm sm:text-lg md:text-xl space-y-2 text-customBlue75">
                          EnStress lässt sich durch klare Zeitplanung und
                          regelmäßige Pausen reduzieren. Entspannungstechniken
                          wie Atemübungen, Yoga oder Meditation können helfen,
                          den Stresslevel zu senken. Auch der Austausch mit
                          anderen pflegenden Angehörigen bietet oft emotionale
                          Entlastung.
                        </p>
                      </div>
                    </div>,
                    <div key="slide-2">
                      <div className="border  bg-blue-100 shadow-lg rounded-lg text-center p-4">
                        <h3 className="text-lg text-left font-rem font-semibold mb-2 text-blue-900">
                          Was mache ich bei Konflikten?
                        </h3>
                        <p className="text-base font-rem leading-relaxed text-justify text-sm sm:text-lg md:text-xl space-y-2 text-customBlue75">
                          Bei Konflikten ist es wichtig, offen und ruhig zu
                          kommunizieren. Professionelle Mediation oder
                          Beratungen durch Pflegeberatungsstellen können helfen,
                          Missverständnisse zu klären. Wenn es schwierig wird,
                          können externe Pflegedienste oder temporäre Entlastung
                          durch Kurzzeitpflege eine Lösung bieten.
                        </p>
                      </div>
                    </div>,
                    <div key="slide-3">
                      <div className="border  bg-blue-100 shadow-lg rounded-lg text-center p-4">
                        <h3 className="text-lg text-left font-rem font-semibold mb-2 text-blue-900">
                          Wie bewältige ich Überforderung?
                        </h3>
                        <p className="text-base font-rem leading-relaxed text-justify text-sm sm:text-lg md:text-xl space-y-2 text-customBlue75">
                          Bei Überforderung ist es wichtig, frühzeitig Hilfe
                          anzunehmen und sich selbst Grenzen zu setzen.
                          Entlastungsangebote wie Verhinderungspflege,
                          Tagespflege oder Kurzzeitpflege können Freiräume
                          schaffen. Psychologische Unterstützung oder
                          Selbsthilfegruppen sind ebenfalls gute Anlaufstellen.
                        </p>
                      </div>
                    </div>,
                  ],
                })
              }
            />
          </div>

          <div className="fixed bottom-16 left-1/2 transform -translate-x-1/2  z-50">
            {isAtBottom ? (
              <FaChevronUp
                size={24}
                className="text-black-500 cursor-pointer"
                onClick={handleScrollToggle}
              />
            ) : (
              <FaChevronDown
                size={24}
                className="text-black-500 cursor-pointer"
                onClick={handleScrollToggle}
              />
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

export default Startpage;
