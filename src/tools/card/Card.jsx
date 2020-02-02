import React from "react";
import { Title, Description, Tag } from "./index";
import AddButton from "../buttons/Button";

function Card(props) {
  const { title, link, tags, description } = props.tool;

  return (
    <div className="mt-3">
      <div className="d-flex justify-content-between">
        <Title title={title} link={link} />
        <AddButton type="remove" />
      </div>

      <div>
        <Description description={description} />
      </div>

      <div>
        <Tag tags={tags} />
      </div>
    </div>
  );
}

export default Card;
