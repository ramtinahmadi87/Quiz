
export function QuizProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  async function fetchQuestions() {
    dispatch({ type: "SET_LOADING", payload: true });
    try {
      const res = await fetch("https://opentdb.com/api.php?amount=5&type=multiple");
      const data = await res.json();
      if (data.response_code !== 0) throw new Error("API returned an error");

      const formatted = data.results.map((q) => {
        const correct = decodeHtml(q.correct_answer);
        const incorrect = q.incorrect_answers.map((a) => decodeHtml(a));
        const question = decodeHtml(q.question);
        const options = shuffleArray([correct, ...incorrect]);
        return { question, options, correct };
      });

      dispatch({ type: "SET_QUESTIONS", payload: formatted });
    } catch (err) {
      dispatch({ type: "SET_ERROR", payload: err.message || "Failed to fetch" });
    }
  }

  return (
    <QuizContext.Provider value={{ state, dispatch, fetchQuestions }}>
      {children}
    </QuizContext.Provider>
  );
}
