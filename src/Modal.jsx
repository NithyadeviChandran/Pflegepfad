import React from "react";

function Modal({ isOpen, onClose, title, content, onAction, actionLabel }) {
  if (!isOpen) return null;

  return (
    <div className=" fixed inset-0 px-4 py-4 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-blue-100 rounded-lg relative p-6 max-w-md w-full">
      <button
            className=" absolute top-4 right-4 text-gray-900 "
            onClick={onClose} aria-label="Close the pop-up"
          >
            X
          </button>
      
      <div className="flex items-center">
     
        <h2 className="text-lg font-semibold text-customBlue mb-4">{title}</h2>
       
          </div>
        <div>{content}</div>
        
        <div className="flex justify-center mt-4">
          <button
            className="bg-customBlue font-rem text-white py-2 px-4 rounded-full "
            onClick={onAction} 
          >
            {actionLabel}
          </button>
         
        </div>
      </div>
    </div>
  );
}

export default Modal;
