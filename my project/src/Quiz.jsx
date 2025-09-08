function Quiz() {
  const { state, dispatch } = useQuiz();
  const q = state.questions[state.currentQuestion];

  if (!q) return null;

  function choose(option) {
    dispatch({ type: "ANSWER_QUESTION", payload: { selected: option } });
  }

  return (
    <div className="max-w-xl mx-auto mt-12 p-6 bg-gray-800 text-gray-100 rounded-2xl shadow-lg">
      <div className="flex justify-between items-center mb-4">
        <div className="text-sm opacity-80">سوال {state.currentQuestion + 1} / {state.questions.length}</div>
        <div className="text-sm opacity-80">امتیاز: {state.score}</div>
      </div>

      <h2 className="text-xl font-semibold mb-4">{q.question}</h2>

      <div className="grid gap-3">
        {q.options.map((opt, i) => (
          <button
            key={i}
            onClick={() => choose(opt)}
            className="text-right px-4 py-3 border rounded-lg bg-gray-900 hover:bg-gray-700"
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
  );
}
export default Quiz