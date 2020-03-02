import React, { useState } from "react";

import DefaultModal from "../../components/modals/DefaultModal";
import DefaultButton from "../../components/buttons/DefaultButton";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { Modal, Button } from "react-bootstrap";

function RemoveTool(props) {
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
      <DefaultButton
        title=" remove"
        handleClick={() => setShow(true)}
        icon={
          <i>
            <FontAwesomeIcon icon={faTimes} />
          </i>
        }
      />
      {modal}
    </>
  );
}

export default RemoveTool;
