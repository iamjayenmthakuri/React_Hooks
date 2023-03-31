import React from "react";

function StateTutorial() {
  let counter = 0;
  const Increment = () => {
    counter = counter + 1;
    console.log(counter);
  };

  return (
    <>
      {counter}
      <button onClick={Increment}>Increment</button>
    </>
  );
}

export default StateTutorial;
