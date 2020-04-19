import React from "react";
import RemoveTool from "../remove/RemoveTool";
import styled from "styled-components";
import * as Color from "../../constants/_colors";

const Div = styled.div`
  padding: 20px;
  min-width: auto;
  height: auto;
  background: ${Color.White} 0% 0% no-repeat padding-box;
  box-shadow: 0px 10px 10px #0000000d;
  border: 1px solid #ebeaed;
  margin-top: 1rem;
`;

function Card(props) {
  const { onRemove } = props;
  const { title, link, tags, description, id } = props.tool;

  return (
    <Div>
      <div className="d-flex justify-content-between">
        <h5>
          <a href={link || null}>{title}</a>
        </h5>
        <RemoveTool name={title} id={id} onRemove={onRemove} />
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
    </Div>
  );
}

export default Card;
