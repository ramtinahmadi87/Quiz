import React from "react";
import { useQuiz } from "../context";

export default function Questions() {
  const { state, dispatch } = useQuiz();
  const q = state.questions[state.current];

  if (!q) return <h2 className="text-center mt-10 text-xl">در حال بارگذاری سوالات...</h2>;

  return (
    <div className="max-w-xl mx-auto mt-16 p-6 bg-white rounded-2xl shadow-lg">
      <h3 className="text-lg font-semibold mb-4 text-gray-700">
        سوال {state.current + 1} از {state.questions.length}
      </h3>
      <p className="text-xl font-bold mb-6">{q.question}</p>
      <div className="space-y-4">
        {q.options.map((opt, i) => (
          <button
            key={i}
            onClick={() => dispatch({ type: "ANSWER", payload: opt })}
            className="w-full bg-gray-200 text-gray-800 py-3 rounded-lg hover:bg-blue-500 hover:text-white transition"
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
  );
}
