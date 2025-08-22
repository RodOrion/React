import { useState } from 'react'
import './App.css'
import Button from "./components/Button";
import { LuCalculator } from "react-icons/lu";
import Counter from './components/Counter';

function App() {
  const [count, setCount] = useState([0]);
  const [counter, setCounter] = useState(1);


  const reset = () => {
    setCount(0);
  };

  const addCounter = () => {
    setCounter(counter + 1)
  }

  return (
    <>
      <header className="flexContainer">
        <LuCalculator size="8rem" color="blueviolet" />
        <h1>React counter</h1>
      </header>

      <div>
        <button onClick={addCounter}>Add counter</button>
      </div>

      <Counter count={count} setCount={setCount} reset={reset} />

      {
        counter === 2 &&
        <Counter count={count} setCount={setCount} reset={reset}  />
      }

      {
        counter === 3 &&
        <Counter count={count} setCount={setCount} reset={reset} />
      }


    </>
  )
}

export default App
