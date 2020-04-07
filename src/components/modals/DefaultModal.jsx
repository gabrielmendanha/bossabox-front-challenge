import React from "react";
import styled from "styled-components";
import closeIcon from "../../assets/icons/close-icon.svg";

import { Modal } from "react-bootstrap";

const CloseButton = styled.button`
  img {
    height: 15px;
  }
`;

function DefaultModal(props) {
  const { show, onHide, header, body, footer } = props;

  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header>
        {header}
        <CloseButton
          tabIndex="-1"
          onClick={onHide}
          type="button"
          className="close"
          aria-hidden="true"
        >
          {" "}
          <img alt="" src={closeIcon}></img>
        </CloseButton>
      </Modal.Header>
      <Modal.Body>{body}</Modal.Body>
      <Modal.Footer> {footer}</Modal.Footer>
    </Modal>
  );
}

export default DefaultModal;
