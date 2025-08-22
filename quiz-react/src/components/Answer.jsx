const Answer = ({
  answer,
  setAnswered,
  setHasAnswered,
  id,
  isActive,
  setActiveAnswerID,
}) => {
  const handleClick = (e) => {
    setAnswered(e.target.value);
    setHasAnswered(true);
    setActiveAnswerID(id);
  };

  return (
    <button onClick={handleClick} value={answer} className={isActive ? "active" : ""}>
      {answer}
    </button>
  );
};
export default Answer;
