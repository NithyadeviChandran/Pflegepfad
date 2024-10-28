import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useSlideData } from "./SlideContext";
import { HiOutlineShare } from "react-icons/hi";
import arrow from "./assets/arrow.png";
import {
  FaFacebook,
  FaWhatsapp,
  FaEnvelope,
  FaSms,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

function Slidepage() {
  const navigate = useNavigate();
  const { slideData } = useSlideData();
  const { title, slides } = slideData || {};

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isShareOpen, setIsShareOpen] = useState(false);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slides.length - 1 : prevSlide - 1
    );
  };

  const handleBack = () => {
    navigate(-1);
  };

  const url = window.location.href;

  const toggleShareOptions = () => {
    setIsShareOpen((prev) => {
      if (!prev) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "auto";
      }
      return !prev;
    });
  };

  useEffect(() => {
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div className="p-4 mt-16 md:p-16" style={{ position: "relative" }}>
      <Link
        className="text-gray-500 flex items-center font-rem py-2 px-4 py-2 px-4"
        onClick={handleBack}
      >
        <img className="h-4 w-4" src={arrow} />
        Zurück
      </Link>

      <h2 className="text-lg font-semibold text-blue-900 mt-4 mb-4 text-center sm:text-2xl md:text-3xl ">
        {title || "No Title"}
      </h2>

      {slides && slides.length > 0 ? (
        <div className="relative max-w-3xl mx-auto">
          {currentSlide > 0 && (
            <button
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
              onClick={prevSlide}
              aria-label="Previous slide"
            >
              <FaChevronLeft size={28} />
            </button>
          )}

          <div className="text-center p-4 mb-4 flex items-center justify-center  h-[40 rem] md:h-[45rem]">
            {slides[currentSlide]}
          </div>

          {currentSlide < slides.length - 1 && (
            <button
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
              onClick={nextSlide}
              aria-label="Next slide"
            >
              <FaChevronRight size={28} />
            </button>
          )}

          <div className="absolute bottom-4 left-0 right-0 flex justify-center items-center space-x-4">
            <div className="flex p-2 space-x-2">
              {slides &&
                slides.map((_, index) => (
                  <button
                    key={index}
                    className={`h-3 w-3 rounded-full ${
                      currentSlide === index ? "bg-blue-900" : "bg-gray-300"
                    }`}
                    onClick={() => setCurrentSlide(index)}
                    aria-label={`Go to slide ${index + 1}`}
                  ></button>
                ))}
            </div>

            <button
              className="text-customBlue hover:text-gray-700 ml-48"
              onClick={toggleShareOptions}
              aria-label="Share this page"
            >
              <HiOutlineShare size={28} />
            </button>
          </div>
        </div>
      ) : (
        <p className="text-center mt-4">No slides available.</p>
      )}

      {isShareOpen && (
        <div className="fixed bottom-35 rounded-lg left-8 right-8 mt-2 bg-blue-100  z-50">
          <div className="flex justify-between items-center">
            <p className="text-center text-blue-900 font-rem font-semibold mb-4">
              Share this page:
            </p>
            <button
              onClick={toggleShareOptions}
              aria-label="Close share options"
            >
              X
            </button>
          </div>
          <div className="flex justify-around">
            {/* Email */}
            <a
              href={`mailto:?subject=Check out this page: ${title}&body=I found this page and thought you might like it: ${url}`}
              className="flex flex-col items-center text-blue-900"
              aria-label="Share via Email"
            >
              <FaEnvelope size={24} />
              <span className="text-sm">Email</span>
            </a>

            {/* SMS */}
            <a
              href={`sms:?body=Check out this page: ${url}`}
              className="flex flex-col items-center text-blue-900"
              aria-label="Share via SMS"
            >
              <FaSms size={24} />
              <span className="text-sm">Message</span>
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/04915730106001"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center text-blue-900"
              aria-label="Share via WhatsApp"
            >
              <FaWhatsapp size={24} />
              <span className="text-sm">WhatsApp</span>
            </a>

            {/* Facebook */}
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${url}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center text-blue-900"
              aria-label="Share via Facebook"
            >
              <FaFacebook size={24} />
              <span className="text-sm">Facebook</span>
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

export default Slidepage;
