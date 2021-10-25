import PropTypes from "prop-types";
import { useEffect } from "react";
import { createPortal } from "react-dom";

const modalRoot = document.querySelector("#modal-root");

function Modal({ onClose, img }) {
  useEffect(() => {
    window.addEventListener("keydown", handleKeyDownESC);
    window.addEventListener("keydown", handleBackdropClick);
  });
  const handleKeyDownESC = (e) => {
    if (e.code === "Escape") {
      onClose();
    }
  };
  const handleBackdropClick = (e) => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  return createPortal(
    <div className="Overlay" onClick={handleBackdropClick}>
      <div className="Modal">
        <img src={img} alt="" />
      </div>
    </div>,
    modalRoot
  );
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
};
export default Modal;
