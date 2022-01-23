import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import LoginProvider from "./GloblalContext/Provider";

ReactDOM.render(
  // <React.StrictMode>
  <LoginProvider>
    <App />
  </LoginProvider>,
  // </React.StrictMode>,
  document.getElementById("root")
);
