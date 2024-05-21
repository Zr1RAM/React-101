import React, { useEffect } from "react";

const Modal = ({ modalContent, closeModal }) => {
  console.log(modalContent);
  useEffect(() => {
    setTimeout(() => {
      closeModal();
    }, 3000);
  });
  return (
    <div className="modal">
      <p>{modalContent}</p>
    </div>
  );
};

export default Modal;
