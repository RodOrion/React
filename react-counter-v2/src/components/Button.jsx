const Button = ({ symbol, setCount, classname, disabled }) => {

  const handleClick = (symbol) => {
    //symbol === "+" ? setCounter(counter + 1) : setCounter(counter - 1);
    symbol === "+" ? setCount((prev) => Number(prev) + 1) : setCount((prev) => Number(prev) - 1);
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