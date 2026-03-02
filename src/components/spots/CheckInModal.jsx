import React from "react";
import { Modal, Button } from "react-bootstrap";

const CheckInModal = ({ show, handleClose }) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Check In</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Thanks for checking in! ⭐</p>
        <p>(Backend integration in future)</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CheckInModal;
