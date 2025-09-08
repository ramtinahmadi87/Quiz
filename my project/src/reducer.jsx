


function reducer(state, action) {
  switch (action.type) {
    case "SET_LOADING":
      return { ...state, loading: action.payload };
    case "SET_QUESTIONS":
      return { ...state, questions: action.payload, loading: false, error: null };
    case "SET_ERROR":
      return { ...state, error: action.payload, loading: false };
    case "ANSWER_QUESTION": {
      const { selected } = action.payload;
      const current = state.questions[state.currentQuestion];
      const isCorrect = selected === current.correct;
      const nextIndex = state.currentQuestion + 1;
      const finished = nextIndex >= state.questions.length;
      return {
        ...state,
        score: isCorrect ? state.score + 1 : state.score,
        currentQuestion: finished ? state.currentQuestion : nextIndex,
        finished,
      };
    }
    case "RESTART":
      return { ...initialState };
    default:
      return state;
  }
}