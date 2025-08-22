const Question = ({ question, setClickQuestion, clickQuestion }) => {
    
  const handleClick = () => {
    setClickQuestion(!clickQuestion);
  };

  return (
    <div className="question" onClick={handleClick}>
      {question}
    </div>
  );
};
export default Question;
