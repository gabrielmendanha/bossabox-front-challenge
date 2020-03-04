import React from "react";
import Card from "./Card";

function ToolList(props) {
  const { tools } = props;

  return (
    <div>
      {tools?.map(tool => {
        return <Card key={tool.id} tool={tool} />;
      })}
    </div>
  );
}

export default ToolList;
