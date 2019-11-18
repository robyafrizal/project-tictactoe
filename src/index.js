import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
// import App from "./App";
import Game from "./components/game";
import Button from "./components/button";
import * as serviceWorker from "./serviceWorker";

// ReactDOM.render(<App />, document.getElementById("root"));
ReactDOM.render(<Game />, document.getElementById("root"));
ReactDOM.render(<Button />, document.getElementById("other"));

serviceWorker.unregister();
