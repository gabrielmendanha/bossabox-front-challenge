import React, { useState } from "react";
import DefaultModal from "../modals/DefaultModal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { Modal, Button } from "react-bootstrap";
import TextArea from "./TextArea";
import Input from "./Input";
import ReactTagInput from "@pathofdev/react-tag-input";
import Label from "./Label";

function AddButton() {
  const [show, setShow] = useState(false);
  const [tags, setTags] = useState([]);

  const footer = (
    <Button onClick={() => setShow(false)} variant="primary">
      Add tool
    </Button>
  );
  const header = <Modal.Title>Add new tool</Modal.Title>;

  const body = (
    <>
      <div className="d-flex flex-column mt-2">
        <Label label="Tool Name" />
        <Input type="text" />
      </div>

      <div className="d-flex flex-column mt-2">
        <Label label="Tool Link" />
        <Input type="text" />
      </div>

      <div className="d-flex flex-column mt-2">
        <Label label="Tool Description" />
        <TextArea />
      </div>

      <div className="d-flex flex-column mt-2">
        <Label label="Tags" />
        <ReactTagInput
          removeOnBackspace={true}
          tags={tags}
          onChange={newTags => setTags(newTags)}
        />
      </div>
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
          <FontAwesomeIcon icon={faPlus} />
        </i>
        {" add"}
      </button>
      {modal}
    </>
  );
}

export default AddButton;
