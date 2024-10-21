import React from "react";

function Modal({ isOpen, onClose, title, content, onAction, actionLabel }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-md w-full shadow-lg">
        <h2 className="text-lg font-semibold text-blue-900 mb-4">{title}</h2>
        <div>{content}</div>
        <div className="flex justify-between mt-4">
          <button
            className="bg-customBlue font-rem text-white py-2 px-4 rounded-full "
            onClick={onAction} 
          >
            {actionLabel}
          </button>
          <button
            className="bg-customBlue font-rem text-white py-2 px-4 rounded-full"
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
