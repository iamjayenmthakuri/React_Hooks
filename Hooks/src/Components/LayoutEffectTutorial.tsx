import { useLayoutEffect, useEffect, useRef } from "react";

function LayoutEffectTutorial() {
  const inputRef = useRef(null);

  useLayoutEffect(() => {
    console.log("Hi");
  }, []);
  useEffect(() => {
    const current = inputRef.current;
    current.value = "Hello";
  }, []);
  return (
    <div className="App">
      <input type="text" ref={inputRef} value="Hi" />
    </div>
  );
}

export default LayoutEffectTutorial;
