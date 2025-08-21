import { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import { LuCalculator } from "react-icons/lu";

function App() {
  const [count, setCount] = useState(0);

  const reset = () => {
    setCount(0);
  };

  return (
    <>
      <header className="flexContainer">
        <LuCalculator size="8rem" color="blueviolet" />
        <h1>React counter</h1>
      </header>
      <div className="wrapper flexContainer">
        <div className="flexContainer">
          <Button
            symbol="-"
            // counter={count}
            setCounter= {setCount}
            classname={count === 0 ? "disabled" : ""}
            disabled={count === 0}
          />
          <span>{count}</span>
          <Button
            symbol="+"
            // counter={count}
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
