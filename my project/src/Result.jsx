function Result() {
  const { state, dispatch, fetchQuestions } = useQuiz();

  function restart() {
    dispatch({ type: "RESTART" });
    fetchQuestions();
  }

  return (
    <div className="max-w-xl mx-auto mt-12 p-6 bg-gray-800 text-gray-100 rounded-2xl shadow-lg text-center">
      <h2 className="text-2xl font-bold mb-4">نتیجه</h2>
      <p className="mb-3">امتیاز شما: <span className="font-semibold">{state.score} / {state.questions.length}</span></p>
      <button onClick={restart} className="px-6 py-3 bg-green-600 rounded-lg font-semibold">Restart Quiz</button>
    </div>
  );
}
export default Result