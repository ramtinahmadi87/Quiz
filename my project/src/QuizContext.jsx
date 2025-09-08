import { createContext  } from "react";
const QuizContext = createContext(null);


const initialState = {
  loading: false,
  questions: [], // {question, options: [], correct}
  currentQuestion: 0,
  score: 0,
  finished: false,
  error: null,
};
