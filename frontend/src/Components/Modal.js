// TODO - Remove text area and diplay read only message more gracefully and make it look engaging, immersive and easy to read,
import React, { useRef } from 'react';

function Modal({ isOpen, onClose, message, title }) {
  const textRef = useRef(null);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="fixed inset-0 bg-black opacity-50"></div>
      <div className="relative bg-white rounded-lg w-80">
        <div className="p-4">
          <h2 className="text-lg font-bold mb-2">{title} Result</h2>
          <div className="relative">
            <textarea
              ref={textRef}
              className="w-full px-4 py-2 mb-4 leading-tight text-gray-700 border border-gray-300 rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              rows={4}
              readOnly
              value={message}
            ></textarea>
          </div>
        </div>
        <div className="flex justify-end p-4">
          <button
            onClick={onClose}
            className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
