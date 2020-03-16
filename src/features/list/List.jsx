import React from "react";
import Card from "./Card";

function ToolList(props) {
  const { tools, onRemove } = props;

  return (
    <div>
      {tools?.map(tool => {
        return <Card key={tool.id} tool={tool} onRemove={onRemove} />;
      })}
    </div>
  );
}

export default ToolList;
