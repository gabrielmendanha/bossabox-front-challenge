import React, { useState, useEffect } from "react";
import { Header, Subheader } from "./header/index.js";
import { Tools } from "./services/Tool.jsx";
import { Search } from "./search/";

import AddButton from "./components/AddButton";
import Card from "./tools/card/Card";

import "@pathofdev/react-tag-input/build/index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function errorHandling() {}

function App() {
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
    <div className="d-flex justify-content-center">
      <div className="flex-fixed">
        <div>
          <Header />
          <Subheader />
        </div>
        <div className="d-flex justify-content-between">
          <div>
            <Search />
          </div>
          <AddButton />
        </div>
        <div>
          {tools?.map(tool => {
            return <Card key={tool.id} tool={tool} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
