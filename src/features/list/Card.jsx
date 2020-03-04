import React from "react";
import RemoveTool from "../remove/RemoveTool";

function Card(props) {
  const { title, link, tags, description } = props.tool;

  return (
    <div className="mt-3">
      <div className="d-flex justify-content-between">
        <h5>
          <a href={link}>{title}</a>
        </h5>
        <RemoveTool toolName={title} />
      </div>

      <div>
        <p>{description}</p>
      </div>

      <div>
        <div>
          {tags?.map((tag, index) => {
            return (
              <span key={tag} className="pr-2">
                <b>#{tag}</b>
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Card;
