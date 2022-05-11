import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Main from "./components/Main/Main";
import { Provider } from "react-redux";
import store from "./store";
import Toolbar from "./components/Toolbar/Toolbar";

ReactDOM.render(
  <Provider store={store}>
    <Main />
  </Provider>,
  document.getElementById("root")
);
