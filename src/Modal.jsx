import React from "react";

function Modal({ isOpen, onClose, title, content, onAction, actionLabel }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 px-4 py-4 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-blue-100 rounded-lg p-6 max-w-md w-full">
        <h2 className="text-lg font-semibold text-customBlue mb-4">{title}</h2>
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
