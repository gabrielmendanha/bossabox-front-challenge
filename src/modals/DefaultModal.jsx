import React from "react";
import { Modal } from "react-bootstrap";

function DefaultModal(props) {
  const { show, onHide, header, body, footer } = props;

  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>{header}</Modal.Header>
      <Modal.Body>{body}</Modal.Body>
      <Modal.Footer> {footer}</Modal.Footer>
    </Modal>
  );
}

export default DefaultModal;
