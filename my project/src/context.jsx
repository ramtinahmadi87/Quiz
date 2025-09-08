import { createContext, useContext, useReducer } from "react";

const QuizContext = createContext();

const initialState = {
  questions: [],
  current: 0,
  score: 0,
  finished: false,
  page: "home" 
};

function reducer(state, action) {
  switch (action.type) {
    case "START":
      return { ...state, page: "quiz" };
    case "SETQUESTIONS":
      return { ...state, questions: action.payload };
    case "ANSWER":
      const correct = state.questions[state.current].correct;
      const newScore = action.payload === correct ? state.score + 1 : state.score;
      const next = state.current + 1;
      const finished = next >= state.questions.length;
      return {
        ...state,
        score: newScore,
        current: finished ? state.current : next,
        page: finished ? "result" : "quiz",
        finished
      };
    case "RESTART":
      return { ...initialState };
    default:
      return state;
  }
}

export function QuizProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <QuizContext.Provider value={{ state, dispatch }}>
      {children}
    </QuizContext.Provider>
  );
}

export function useQuiz() {
  return useContext(QuizContext);
}
