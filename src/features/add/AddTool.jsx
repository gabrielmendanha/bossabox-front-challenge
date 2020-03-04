import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { Modal, Button } from "react-bootstrap";
import { TextArea, Input, Label } from "../../components/fields";
import { Tools } from "../../services/Tool";

import ReactTagInput from "@pathofdev/react-tag-input";
import DefaultModal from "../../components/modals/DefaultModal";
import DefaultButton from "../../components/buttons/DefaultButton";

function AddTool(props) {
  const { onSave } = props;
  const [show, setShow] = useState(false);
  const [toolState, setToolState] = useState({
    title: "",
    link: "",
    description: "",
    tags: []
  });

  const handleSubmit = async () => {
    const tool = await Tools.create(toolState);
    onSave(tool);
    setShow(false);
  };

  const handleChange = event => {
    setToolState({ ...toolState, [event.target.id]: event.target.value });
  };

  const footer = (
    <Button onClick={() => handleSubmit()} variant="primary">
      Add tool
    </Button>
  );

  const header = <Modal.Title>Add new tool</Modal.Title>;

  const body = (
    <>
      <div className="d-flex flex-column mt-2">
        <Label label="Tool Name" />
        <Input type="text" id="title" handleChange={handleChange} />
      </div>

      <div className="d-flex flex-column mt-2">
        <Label label="Tool Link" />
        <Input type="text" id="link" handleChange={handleChange} />
      </div>

      <div className="d-flex flex-column mt-2">
        <Label label="Tool Description" />
        <TextArea id="description" handleChange={handleChange} />
      </div>

      <div className="d-flex flex-column mt-2">
        <Label label="Tags" />
        <ReactTagInput
          removeOnBackspace={true}
          tags={toolState.tags}
          onChange={newTags => setToolState({ ...toolState, tags: newTags })}
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
      <DefaultButton
        title=" add"
        handleClick={() => setShow(true)}
        icon={
          <i>
            <FontAwesomeIcon icon={faPlus} />
          </i>
        }
      />
      {modal}
    </>
  );
}

export default AddTool;
