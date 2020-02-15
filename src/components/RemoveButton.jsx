import React, { useState } from "react";
import DefaultModal from "../modals/DefaultModal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { Modal, Button } from "react-bootstrap";

function RemoveButton(props) {
  const [show, setShow] = useState(false);
  const { toolName } = props;

  const footer = (
    <>
      <Button onClick={() => setShow(false)} variant="danger">
        Cancel
      </Button>
      <Button onClick={() => setShow(false)} variant="primary">
        Yes, remove
      </Button>
    </>
  );

  const header = <Modal.Title>Remove tool</Modal.Title>;

  const body = (
    <>
      <p>
        Are you sure tou want to remove <strong>{toolName}</strong>?
      </p>
    </>
  );

  const modal = (
    <DefaultModal
      onHide={() => setShow(false)}
      show={show}
      header={header}
      body={body}
      footer={footer}
    />
  );

  return (
    <>
      <button onClick={() => setShow(true)}>
        <i>
          <FontAwesomeIcon icon={faTimes} />
        </i>
        {" remove"}
      </button>
      {modal}
    </>
  );
}

export default RemoveButton;
