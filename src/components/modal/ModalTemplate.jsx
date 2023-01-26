import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export default function ModalAction({
  title,
  children,
  handleSubmit,
  closeVariant,
  actionVariant,
  centered,
  actionText,
  handleClose,
}) {
  return (
    <Modal show onHide={handleClose} animation={false} centered={centered}>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{children}</Modal.Body>
      <Modal.Footer>
        <Button variant={closeVariant || "secondary"} onClick={handleClose}>
          Close
        </Button>
        <Button variant={actionVariant || "primary"} onClick={handleSubmit}>
          {actionText || "Save Changes"}
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
