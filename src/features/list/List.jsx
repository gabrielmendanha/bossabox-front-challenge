import React, { useState, useEffect } from "react";
import { Tools } from "../../services/Tool.jsx";
import Card from "./Card";

function ToolList() {
  const [tools, setTools] = useState();

  useEffect(() => {
    async function getTools() {
      try {
        const tools = await Tools.index();
        setTools(tools);
      } catch {}
    }

    getTools();
  }, []);

  return (
    <div>
      {tools?.map(tool => {
        return <Card key={tool.id} tool={tool} />;
      })}
    </div>
  );
}

export default ToolList;
