import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";

// DEPRACATED -  ReactDOM.render(<App />, document.getElementById("root"));

const root = createRoot(document.getElementById("root"));

root.render(<App />);
