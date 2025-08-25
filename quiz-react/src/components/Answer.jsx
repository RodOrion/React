const Answer = ({
  answer,
  setAnswered,
  id,
  isActive,
  setActiveAnswerID,
}) => {
  const handleClick = (e) => {
    setAnswered(e.target.value);
    setActiveAnswerID(id);
  };

  return (
    <button onClick={handleClick} value={answer} className={isActive ? "active" : ""}>
      {answer}
    </button>
  );
};
export default Answer;
