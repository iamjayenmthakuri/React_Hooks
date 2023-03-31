import React from "react";
import ReactDOM from "react-dom/client";
import ReducerTutorial from "./Components/ReducerTutorial";
import StateTutorial from "./Components/StateTutorial";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <StateTutorial />
    <ReducerTutorial />
  </React.StrictMode>
);
