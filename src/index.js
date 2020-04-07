import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import "./assets/fonts/Source_Sans_Pro/SourceSansPro-Bold.ttf";
import "./assets/fonts/Source_Sans_Pro/SourceSansPro-Italic.ttf";
import "./assets/fonts/Source_Sans_Pro/SourceSansPro-SemiBold.ttf";

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
