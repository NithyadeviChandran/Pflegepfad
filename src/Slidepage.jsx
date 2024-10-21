import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSlideData } from "./SlideContext"; 
import { HiOutlineShare } from "react-icons/hi";

function Slidepage() {
  const navigate = useNavigate();
  const { slideData } = useSlideData(); // Access the shared data
  const { title, slides } = slideData;

  const [currentSlide, setCurrentSlide] = useState(0);

  const handleBack = () => {
    navigate(-1);
  };

  const handleShare = () => {
    const url = window.location.href;
    const text = `Check out this page: ${title}`;
    if (navigator.share) {
      navigator
        .share({
          title,
          text,
          url,
        })
        .then(() => console.log("Successful share"))
        .catch((error) => console.log("Error sharing", error));
    } else {
      alert("Sharing not supported on this browser");
    }
  };

  return (
    <div className="p-4 md:p-16">
      <button
        className="bg-gray-300 text-gray-800 mt-20 py-2 px-4 rounded-md shadow-md hover:bg-gray-400 transition duration-200 ease-in-out"
        onClick={handleBack}
      >
        Zurück
      </button>
      <h2 className="text-lg font-semibold text-blue-900 mt-4 mb-4 text-center">
        {title || "No Title"}
      </h2>
      <div className="flex flex-col justify-center items-center">
        <div className="w-full max-w-3xl">{slides[currentSlide]}</div>
        <div className="flex justify-center mt-6 space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`h-3 w-3 rounded-full ${
                currentSlide === index ? "bg-blue-500" : "bg-gray-300"
              }`}
              onClick={() => setCurrentSlide(index)}
            ></button>
          ))}
                <button
            className="text-gray-500  hover:text-gray-700"
            onClick={handleShare}
          >
            <HiOutlineShare size={28} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Slidepage;
