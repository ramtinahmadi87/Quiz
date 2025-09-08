function MainApp() {
  const { state } = useQuiz();

  // simple routing by state
  if (state.loading && state.questions.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900">
        <div className="text-gray-200">در حال بارگذاری سوالات...</div>
      </div>
    );
  }

  if (state.questions.length === 0 && !state.finished) {
    return (
      <div className="min-h-screen bg-gray-900 p-6">
        <Home />
      </div>
    );
  }

  if (state.finished) {
    return (
      <div className="min-h-screen bg-gray-900 p-6">
        <Result />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 p-6">
      <Quiz />
    </div>
  );
}