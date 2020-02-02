import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTimes } from "@fortawesome/free-solid-svg-icons";

function AddButton(props) {
  return (
    <button>
      {" "}
      <i>
        <FontAwesomeIcon icon={props.type === "add" ? faPlus : faTimes} />
      </i>{" "}
      {props.type}
    </button>
  );
}

export default AddButton;
