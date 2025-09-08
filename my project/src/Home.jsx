function Home() {
  const { fetchQuestions, state } = useQuiz();

  async function start() {
    await fetchQuestions();
  }

  return (
    <div className="max-w-xl mx-auto mt-12 p-6 bg-gray-800 text-gray-100 rounded-2xl shadow-lg">
      <h1 className="text-3xl font-bold mb-2">Quiz App</h1>
      <p className="mb-4 opacity-80">5 سوال چند گزینه‌ای از Open Trivia DB دریافت می‌شود.</p>
      {state.error && <div className="mb-3 text-red-300">خطا: {state.error}</div>}
      <button
        onClick={start}
        className="px-6 py-3 bg-blue-600 hover:bg-blue-500 rounded-lg font-semibold shadow"
      >
        {state.loading ? "در حال بارگذاری..." : "Start Quiz"}
      </button>
    </div>
  );
}
export default Home