import React from "react";
import ReactTagInput from "@pathofdev/react-tag-input";
import "./TagInput.css";

function TagInput(props) {
  const { handleChange, tags } = props;

  return (
    <ReactTagInput
      removeOnBackspace={true}
      tags={tags}
      onChange={handleChange}
    />
  );
}

export default TagInput;
