import Button from "./Button"

const Counter = ({setCount, count, reset}) => {
    console.log(count);
    
    const copy = [...count]
    return <>
        <div className="wrapper flexContainer">
        <div className="flexContainer">
          <Button
            symbol="-"
            // counter={count}
            setCount= {setCount}
            count={copy}
            classname={copy === 0 ? "disabled" : ""}
            disabled={copy === 0}
          />
          <span>{copy}</span>
          <Button
            symbol="+"
            // counter={count}
            setCount={setCount}
            count={copy}
            classname={copy === 10 ? "disabled" : ""}
            disabled={copy === 10}
          />
          <div className="reset" onClick={reset}>
            reset
          </div>
        </div>
      </div>
    </>
}
export default Counter