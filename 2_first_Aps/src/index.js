import React from "react";
import ReactDOM from "react-dom/client";
// import { createRoot } from "react-dom/client";
import App from "./components/App";


// createRoot(document.getElementById("root")).render(<App />);
const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<App />)