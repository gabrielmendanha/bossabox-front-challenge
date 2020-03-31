import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { Modal, Button } from "react-bootstrap";
import { TextArea, Input, Label } from "../../components/fields";
import { Tools } from "../../services/Tool";
import { useForm } from "react-hook-form";

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
  const { register, handleSubmit, errors, formState } = useForm();

  const REQUIRED_FIELD_MESSAGE = "Required field";
  const URL_VALIDATOR_REGEX = /^(ftp|http|https):\/\/[^ "]+$/;
  const INVALID_URL_MESSAGE = "Invalid URL";

  const onSubmit = async () => {
    const tool = await Tools.create(toolState);
    onSave(tool);
    setShow(false);
  };

  const handleChange = event => {
    setToolState({ ...toolState, [event.target.id]: event.target.value });
  };

  const footer = (
    <Button
      onClick={handleSubmit(onSubmit)}
      variant="primary"
      disabled={!formState.isValid}
    >
      Add tool
    </Button>
  );

  const header = <Modal.Title>Add new tool</Modal.Title>;

  const body = (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="d-flex flex-column mt-2">
          <Label label="Tool Name" />
          <Input
            type="text"
            id="title"
            errors={errors}
            register={register}
            registerParams={{ required: REQUIRED_FIELD_MESSAGE }}
            handleChange={handleChange}
          />
        </div>

        <div className="d-flex flex-column mt-2">
          <Label label="Tool Link" />
          <Input
            type="text"
            id="link"
            errors={errors}
            register={register}
            registerParams={{
              pattern: {
                value: URL_VALIDATOR_REGEX,
                message: INVALID_URL_MESSAGE
              }
            }}
            handleChange={handleChange}
          />
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
      </form>
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
