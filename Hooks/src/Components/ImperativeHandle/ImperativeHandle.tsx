import { useRef } from "react";
import Button from "./Button";

function ImperativeHandle() {
  const ref = useRef(null);
  return (
    <div>
      <button>Button From Parents </button>
      <Button />
    </div>
  );
}

export default ImperativeHandle;
