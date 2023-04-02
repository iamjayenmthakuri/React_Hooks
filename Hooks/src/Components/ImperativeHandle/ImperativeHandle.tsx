import { useRef } from "react";
import Button from "./Button";

function ImperativeHandle() {
  const buttonRef = useRef(null);
  return (
    <div>
      <button
        onClick={() => {
          const current = buttonRef.current;
          current.alterToggle();
        }}
      >
        Button From Parents{" "}
      </button>
      <Button ref={buttonRef} />
    </div>
  );
}

export default ImperativeHandle;
