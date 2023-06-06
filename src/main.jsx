import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/app";
import { Global } from "@emotion/react";
import { reset } from "./styles/reset";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Global styles={reset} />
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
