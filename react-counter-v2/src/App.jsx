import { useState } from "react";
import "./App.css";
import { LuCalculator } from "react-icons/lu";
import Counter from "./components/Counter";

function App() {
  const [counts, setCounts] = useState([0]);

  const addCounter = () => {
    if (counts.length < 3) {
      const copy = [...counts, 0];
      setCounts(copy);
    }
  };
  
  const UpdateCounter = (index, symbol) => {
    const newCounters = [...counts]
    symbol === "+" ? newCounters[index]++ : newCounters[index]--;
    setCounts(newCounters)
  }

  return (
    <>
      <header className="flexContainer">
        <LuCalculator size="8rem" color="blueviolet" />
        <h1>React counter</h1>
        <button className="addCounter" onClick={addCounter}>Add counter</button>
      </header>
      <div className="wrapper flexContainer">
        {counts.map((value, index) => {
          return (
            <Counter
              id={index}
              key={index}
              counts={counts}
              // value={value}
              setCounts={setCounts}
              //UpdateCounter={UpdateCounter}
              //reset={reset}
            />
          );
        })}
      </div>
    </>
  );
}

export default App;
