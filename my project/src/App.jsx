import React, { useEffect } from "react";
import { useQuiz,QuizProvider } from "./context";
import Home from "./pages/Home";
import Result from "./pages/Result";
import Questions from "./pages/Question";

export default function App() {
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
        const formatted = data.results.map((q) => {
          const correct = decode(q.correct_answer);
          const options = shuffle([correct, ...q.incorrect_answers.map(decode)]);
          return { question: decode(q.question), options, correct };
        });
        dispatch({ type: "SETQUESTIONS", payload: formatted });
      });
  }, [dispatch]);

  function decode(str) {
    const txt = document.createElement("textarea");
    txt.innerHTML = str;
    return txt.value;
  }

  function shuffle(arr) {
    return arr.sort(() => Math.random() - 0.5);
  }

  if (state.page === "home") return <Home />;
  if (state.page === "quiz") return <Questions />;
  if (state.page === "result") return <Result />;
  return null;
}
