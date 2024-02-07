import React from "react";

const Modal = ({ isOpen, onClose, children }) => {
  const modalStyle = {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    padding: "20px",
    background: "#fff",
    zIndex: 1000,
    display: isOpen ? "block" : "none",
  };

  const overlayStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "rgba(0, 0, 0, 0.5)",
    zIndex: 999,
    display: isOpen ? "block" : "none",
  };

  return (
    <>
      <div style={modalStyle}>
        {children}
        <button onClick={onClose}>Close Modal</button>
      </div>
      <div style={overlayStyle} onClick={onClose}></div>
    </>
  );
};

export default Modal;
