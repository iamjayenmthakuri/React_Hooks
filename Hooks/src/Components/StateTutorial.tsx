import { useState } from "react";

function StateTutorial() {
  const [count, setCount] = useState(0);
  const [showText, setShowText] = useState(true);
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
      <div>
        <h1> {count}</h1>
        <button
          onClick={() => {
            setCount(count + 1);
            setShowText(!showText);
          }}
        >
          Click Me
        </button>
        {showText ? <p>This is even number </p> : <p> This is a odd number</p>}
      </div>
    </>
  );
}

export default StateTutorial;
