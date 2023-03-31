import { useState } from "react";

function StateTutorial() {
  const [counter, setCounter] = useState(0);

  const Increment = () => {
    setCounter(counter + 1);
  };

  return (
    <>
      {counter}
      <button onClick={Increment}>Increment</button>
    </>
  );
}

export default StateTutorial;
