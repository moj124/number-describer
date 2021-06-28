import { useState } from "react";
import NumberDescription from "./NumberDescription";

function NumberPickerAndDescriber(): JSX.Element {
  const [counter, setCounter] = useState(0);

  const handleCounterDecrease = () => {
    setCounter(counter - 1);
    // better: setCounter(prev => prev - 1);
  };

  const handleCounterIncrease = () => {
    setCounter(counter + 1);
    // better: setCounter(prev => prev + 1);
  };

  return (
    <>
      <p>Current number: {counter}</p>
      <button onClick={handleCounterDecrease}>-1</button>
      <button onClick={handleCounterIncrease}>+1</button>
      <NumberDescription numberToDescribe={counter} />
    </>
  );
}

export default NumberPickerAndDescriber;
