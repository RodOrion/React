import Button from "./Button";
import { updateCounter, reset } from "../utils/functions";

const Counter = ({ counts, id, setCounts }) => {

  return (
    <>
        <div className="flexContainer">
          <Button
            symbol="-"
            id={id}
            counts={counts}
            setCounts={setCounts}
            UpdateCounter={updateCounter}
            classname={counts[id] === 0 ? "disabled" : ""}
            disabled={counts[id] === 0}
          />
          <span>{counts[id]}</span>
          <Button
            symbol="+"
            id={id}
            counts={counts}
            setCounts={setCounts}
            UpdateCounter={updateCounter}
            classname={counts[id] === 10 ? "disabled" : ""}
            disabled={counts[id] === 10}
          />
          <div className="reset" onClick={()=>reset(id, counts, setCounts)}>
            reset
          </div>
        </div>
    </>
  );
};
export default Counter;
