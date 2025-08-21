import { useState } from "react";
import "./App.css";
import rocket from "./assets/space-shuttle-solid.svg";
import GroupButtons from "./components/GroupButtons";

function App() {
  const [switch1, setSwitch1] = useState(false);
  const [switch2, setSwitch2] = useState(false);
  const [switch3, setSwitch3] = useState(false);

  return (
    <>
      <header className={`flexContainer ${switch1 && switch2 && switch3 && "active"}`}>
        <img src={rocket} alt="rocket" />
        <span>Ready To GO</span>
      </header>
      <section className="flexContainer">
        <div className="containerBtns">
          <GroupButtons setSwitchState={setSwitch1} switchState={switch1} />
          <GroupButtons setSwitchState={setSwitch2} switchState={switch2} />
          <GroupButtons setSwitchState={setSwitch3} switchState={switch3} />
        </div>
        <div className={switch1 && switch2 && switch3 ? "result active" : "result"}>
          <div>{switch1 && switch2 && switch3 ? "GO !" : "NO WAY !"}</div>
        </div>
        
      </section>
    </>
  );
}

export default App;
