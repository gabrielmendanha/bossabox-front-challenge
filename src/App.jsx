import React from "react";
import { Header, Subheader } from "./header/index.js";
import { Search } from "./search/";
import Card from "./tools/card/Card";
import AddButton from "./components/AddButton";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@pathofdev/react-tag-input/build/index.css";

const tools = [
  {
    id: 1,
    title: "Notion",
    link: "https://notion.so",
    description:
      "All in one tool to organize teams and ideas. Write, plan, collaborate, and get organized. ",
    tags: ["organization", "planning", "collaboration", "writing", "calendar"]
  },
  {
    id: 2,
    title: "json-server",
    link: "https://github.com/typicode/json-server",
    description:
      "Fake REST API based on a json schema. Useful for mocking and creating APIs for front-end devs to consume in coding challenges.",
    tags: ["api", "json", "schema", "node", "github", "rest"]
  },
  {
    id: 3,
    title: "fastify",
    link: "https://www.fastify.io/",
    description:
      "Extremely fast and simple, low-overhead web framework for NodeJS. Supports HTTP2.",
    tags: ["web", "framework", "node", "http2", "https", "localhost"]
  },
  {
    title: "test-tool",
    description: "test-tool description wow",
    tags: ["test", "tool", "wow", "such"],
    id: 5
  }
];

function App() {
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
          {tools.map((tool, index) => {
            return <Card key={tool.id} tool={tool} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
