import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSlideData } from "./SlideContext";
import { HiOutlineShare } from "react-icons/hi";
import { FaFacebook, FaWhatsapp, FaEnvelope, FaSms, FaChevronLeft, FaChevronRight } from "react-icons/fa";

function Slidepage() {
  const navigate = useNavigate();
  const { slideData } = useSlideData();
  const { title, slides } = slideData || {};

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isShareOpen, setIsShareOpen] = useState(false);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length); // Loop back to first slide
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
        document.body.style.overflow = 'hidden'; // Prevent scrolling when share options are open
      } else {
        document.body.style.overflow = 'auto'; // Allow scrolling when share options are closed
      }
      return !prev;
    });
  };

  useEffect(() => {
    return () => {
      document.body.style.overflow = 'auto'; // Reset overflow when component unmounts
    };
  }, []);

  return (
    <div className="p-4 md:p-16" style={{ position: 'relative' }}>
      <button
        className="bg-customBlue text-white py-2 px-4 rounded-full mt-20 py-2 px-4"
        onClick={handleBack}
      >
        Zurück
      </button>

      <h2 className="text-lg font-semibold text-blue-900 mt-4 mb-4 text-center sm:text-2xl md:text-3xl">
        {title || "No Title"}
      </h2>

      {/* Check if slides exist and have content */}
      {slides && slides.length > 0 ? (
        <div className="relative">
          {/* Slide navigation arrows */}
          {currentSlide > 0 && (
            <button
              className="absolute left-0 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
              onClick={prevSlide}
              aria-label="Previous slide"
            >
              <FaChevronLeft size={28} />
            </button>
          )}

          {/* Display the actual React element from slides */}
          <div className="text-center p-4">
            {slides[currentSlide]} {/* This renders the React element */}
          </div>

          {currentSlide < slides.length - 1 && (
            <button
              className="absolute right-0 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
              onClick={nextSlide}
              aria-label="Next slide"
            >
              <FaChevronRight size={28} />
            </button>
          )}
        </div>
      ) : (
        <p className="text-center mt-4">No slides available.</p>
      )}

      {/* Dots and Share Icon */}
      <div className="flex justify-center items-center mt-6 space-x-4">
        {/* Navigation dots */}
        <div className="flex space-x-2">
          {slides && slides.map((_, index) => (
            <button
              key={index}
              className={`h-3 w-3 rounded-full ${
                currentSlide === index ? "bg-blue-500" : "bg-gray-300"
              }`}
              onClick={() => setCurrentSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            ></button>
          ))}
        </div>

        {/* Share icon */}
        <button
          className="text-gray-500 hover:text-gray-700 ml-4"
          onClick={toggleShareOptions}
          aria-label="Share this page"
        >
          <HiOutlineShare size={28} />
        </button>
      </div>

      {/* Share options panel */}
      {isShareOpen && (
        <div className="fixed bottom-20 left-0 right-0 mt-4 p-4 bg-gray-100 rounded-lg shadow-lg z-50">
          <div className="flex justify-between items-center">
            <p className="text-center text-blue-900 font-semibold mb-4">
              Share this page:
            </p>
            <button onClick={toggleShareOptions} aria-label="Close share options">
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
              href="https://wa.me/yourphonenumber" // Replace with your actual phone number
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
