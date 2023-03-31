import { useReducer } from "react";
import React from "react";

const reducer = (
  state: { count: number; showText: any },
  action: { type: any }
) => {
  switch (action.type) {
    case "Increment":
      return { count: state.count + 1, showText: state.showText };

    case "toggleShowText":
      return { count: state.count, showText: !state.showText };
    default:
      return state;
  }
};

function ReducerTutorial() {
  const [state, dispatch] = useReducer(reducer, { count: 0, showText: true });

  return (
    <>
      <h1>{state.count}</h1>
      <button
        onClick={() => {
          dispatch({ type: "Increment" });
          dispatch({ type: "toggleShowText" });
        }}
      >
        Click Here{" "}
      </button>
      {state.showText && <p>This is a Text</p>}
    </>
  );
}

export default ReducerTutorial;
