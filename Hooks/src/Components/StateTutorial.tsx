import { useState } from "react";

function StateTutorial() {
  const [counter, setCounter] = useState(0);

  const Increment = () => {
    setCounter(counter + 1);
  };
  const [inputValue, setInputValue] = useState("Jayen");

  let change = (event: { target: { value: any } }) => {
    const newValue = event.target.value;
    setInputValue(newValue);
  };

  return (
    <>
      {counter}
      <button onClick={Increment}>Increment</button>
      <div>
        <input type="text" placeholder="enter-something..." onChange={change} />
        {inputValue}
      </div>
    </>
  );
}

export default StateTutorial;
