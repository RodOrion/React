import "./App.css";
import ItemQuestion from "./components/ItemQuestion";

function App() {

  const questions = [
    {
      question: "Quelle est la capitale de la France ?",
      answers: ["Londres", "Paris", "Berlin"],
      correctAnswer: 1, // Index de la réponse correcte (Paris)
    },
    {
      question: "Quelle est la capitale de l'Allemagne ?",
      answers: ["Londres", "Paris", "Berlin"],
      correctAnswer: 2, // Index de la réponse correcte (Paris)
    },
    {
      question: "Quelle est la capitale de l'Angleterre ?",
      answers: ["Londres", "Paris", "Berlin"],
      correctAnswer: 0, // Index de la réponse correcte (Paris)
    },
  ];

  return (
    <>
      <header>
        <h1>Quiz : Capitales</h1>
      </header>
      <main>
        {questions.map((question, index) => {
          return (
              <ItemQuestion
                key={index+question.correctAnswer}
                question={question}
              />
          );
        })}
      </main>
      <footer>
        <p>Made with <b>React</b> at <b>Le Reacteur</b> by <b>Rodolphe</b></p>
      </footer>
    </>
  );
}

export default App;
