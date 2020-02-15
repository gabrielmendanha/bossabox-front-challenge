import React from "react";

function Tag(props) {
  const { tags } = props;

  return (
    <div>
      {tags.map((tag, index) => {
        return (
          <span key={tag} className="pr-2">
            <b>#{tag}</b>
          </span>
        );
      })}
    </div>
  );
}

export default Tag;
