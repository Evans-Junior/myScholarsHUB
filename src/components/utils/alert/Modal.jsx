import React from 'react';
import './Modal.css'; // Create Modal.css for styling

const Modal = ({ message, onClose }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <p>{message}</p>
      </div>
    </div>
  );
};

export default Modal;