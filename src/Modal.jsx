import React from "react";
import { useNavigate } from "react-router-dom";
import slidepage from "./Slidepage";

function Modal({ isOpen, onClose }) {
  const navigate = useNavigate();

  const handleClick = () => {
    onClose();
    navigate("/slidepage");
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-md w-full shadow-lg">
        <h2 className="text-lg font-semibold text-blue-900 mb-4">
          Erkennung von Pflegebedürftigkeit
        </h2>

        <ul className="list-disc pl-5 space-y-2 text-gray-700">
          <li>Wie erkenne ich Pflegebedürftigkeit?</li>
          <li>Welche Anzeichen gibt es?</li>
          <li>Wer kann helfen, das festzustellen?</li>
        </ul>

        <div className="flex justify-between mt-4">
          <button
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
            onClick={handleClick}
          >
            Mehr Erfahren
          </button>
          <button
            className="bg-gray-300 text-gray-800 py-2 px-4 rounded hover:bg-gray-400"
            onClick={onClose}
          >
            Schließen
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
