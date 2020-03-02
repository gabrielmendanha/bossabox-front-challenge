import React from "react";
import { Search } from "./features/search";

import AddTool from "./features/add/AddTool";
import ToolList from "./features/list/List.jsx";

import "@pathofdev/react-tag-input/build/index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <div className="d-flex justify-content-center">
      <div className="flex-fixed">
        <div>
          <h1>VUTTR</h1>
          <h2>Very Useful Tools to Remember</h2>
        </div>
        <div className="d-flex justify-content-between">
          <div>
            <Search />
          </div>
          <AddTool />
        </div>
        <ToolList />
      </div>
    </div>
  );
}

export default App;
