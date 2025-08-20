import { useState } from "react";
import "./App.css";
import Button from "./components/Button";

function App() {
  const [count, setCount] = useState(0);

  const reset = () => {
    setCount(0);
  };

  return (
    <>
      <div className="wrapper flexContainer">
        <div className="flexContainer">
          <Button
            symbol="-"
            counter={count}
            setCounter= {setCount}
            classname={count === 0 ? "disabled" : ""}
            disabled={count === 0}
          />
          <span>{count}</span>
          <Button
            symbol="+"
            counter={count}
            setCounter={setCount}
            classname={count === 10 ? "disabled" : ""}
            disabled={count === 10}
          />
          <div className="reset" onClick={reset}>
            reset
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
