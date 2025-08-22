import { useState } from "react";
import Answer from "./Answer";
import Question from "./Question";

const ItemQuestion = ({ question }) => {
  const [hasAnswered, setHasAnswered] = useState(false);
  const [answered, setAnswered] = useState("");
  const [activeAnswerID, setActiveAnswerID] = useState(null);
  const [clickQuestion, setClickQuestion] = useState(false);

  return (
    <>
      <Question
        question={question.question}
        setClickQuestion={setClickQuestion}
        clickQuestion={clickQuestion}
      />
      {clickQuestion && (
        <div className="reponses flexContainer">
          {question.answers.map((answer, index) => {
            return (
              <Answer
                key={index + answer}
                id={index + answer}
                answer={answer}
                setAnswered={setAnswered}
                setHasAnswered={setHasAnswered}
                setActiveAnswerID={setActiveAnswerID}
                isActive={activeAnswerID === index + answer}
              />
            );
          })}
        </div>
      )}

      {hasAnswered &&
        (answered === question.answers[question.correctAnswer] ? (
          <div className="result good">Bonne réponse</div>
        ) : (
          <div className="result bad">Mauvaise réponse</div>
        ))}
    </>
  );
};
export default ItemQuestion;
