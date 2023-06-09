import React from "react";
import ReactDOM from "react-dom/client";
import EffectTutorial from "./Components/EffectTutorial";
import RefTutorial from "./Components/RefTutorial";
import ReducerTutorial from "./Components/ReducerTutorial";
import StateTutorial from "./Components/StateTutorial";
import "./index.css";
import LayoutEffectTutorial from "./Components/LayoutEffectTutorial";
import ImperativeHandle from "./Components/ImperativeHandle/ImperativeHandle";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <StateTutorial />
    <ReducerTutorial />
    <EffectTutorial />
    <RefTutorial />
    <LayoutEffectTutorial />
    <ImperativeHandle />
  </React.StrictMode>
);
