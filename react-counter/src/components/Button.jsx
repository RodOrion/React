const Button = ({ symbol, setCounter, classname, disabled }) => {

  const handleClick = (symbol) => {
    //symbol === "+" ? setCounter(counter + 1) : setCounter(counter - 1);
    symbol === "+" ? setCounter((prev) => prev + 1) : setCounter((prev) => prev - 1);
  };

  return (
    <button
      onClick={() => {
        handleClick(symbol);
      }}
      className={classname}
      disabled={disabled}
    >
      {symbol}
    </button>
  );
};
export default Button;
