import React, { useState } from "react";

import styled from "styled-components";
import DefaultModal from "../../components/modals/DefaultModal";
import ButtonPrimary from "../../components/buttons/ButtonPrimary";
import ButtonSecondary from "../../components/buttons/ButtonSecondary";
import deleteIcon from "../../assets/icons/delete-icon.svg";

import { Modal } from "react-bootstrap";
import { Tools } from "../../services/Tool";
import { SecondaryDangerTheme } from "../../constants/_buttons";

const Icon = styled.img`
  height: 15px;
`;

function RemoveTool(props) {
  const [show, setShow] = useState(false);
  const { name, id, onRemove } = props;

  const handleSubmit = async () => {
    await Tools.remove(id);
    onRemove();
    setShow(false);
  };

  const footer = (
    <>
      <ButtonSecondary
        tabindex="0"
        title="Cancel"
        handleClick={() => setShow(false)}
      />
      <ButtonPrimary
        tabindex="0"
        title="Yes, remove"
        handleClick={() => handleSubmit()}
      />
    </>
  );

  const header = <Modal.Title>Remove tool</Modal.Title>;

  const body = (
    <>
      <p>
        Are you sure tou want to remove <strong>{name}</strong>?
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
      <ButtonSecondary
        theme={SecondaryDangerTheme}
        title=" remove"
        handleClick={() => setShow(true)}
        icon={<Icon alt="" src={deleteIcon} />}
      />
      {modal}
    </>
  );
}

export default RemoveTool;
