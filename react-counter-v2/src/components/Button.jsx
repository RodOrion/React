const Button = ({ UpdateCounter, symbol, classname, disabled, id, counts, setCounts }) => {
  return (
    <button
      onClick={() => {
        UpdateCounter(id, symbol, counts, setCounts);
      }}
      className={classname}
      disabled={disabled}
    >
      {symbol}
    </button>
  );
};

export default Button;
