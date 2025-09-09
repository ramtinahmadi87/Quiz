import React, { useEffect } from "react";
import { useQuiz,QuizProvider } from "./context";
import Home from "./pages/Home";
import Result from "./pages/Result";
import Questions from "./pages/Question";

function App() {
  return (
    <QuizProvider>
      <Main />
    </QuizProvider>
  );
}

function Main() {
  const { state, dispatch } = useQuiz();

  useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=5&type=multiple")
      .then((res) => res.json())
      .then((data) => {
        const formatted = data.results.map((item) => {
          const correct = decode(item.correct_answer);
          const options = shuffle([correct, ...item.incorrect_answers.map(decode)]);
          return { question: decode(item.question), options, correct };
        });
        dispatch({ type: "SETQUESTIONS", payload: formatted });
      });
  }, [dispatch]);
// نوشتم chatgpt این قسمت رو با  
  function decode(i) {
    const txt = document.createElement("textarea");
    txt.innerHTML =i;
    return txt.value;
  }

  function shuffle(items) {
    return items.sort(() => Math.random() - 0.5);
  }
//تااینجا  
if (state.page === "home") return <Home />;
if (state.page === "quiz") return <Questions />;
if (state.page === "result") return <Result />;

  return null;
}

export default App
