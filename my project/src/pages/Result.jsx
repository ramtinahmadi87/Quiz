import React from "react";
import { useQuiz } from "../context";

export default function Result() {
  const { state, dispatch } = useQuiz();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-green-50 text-center">
      <h2 className="text-3xl font-bold text-green-700 mb-4">آزمون تمام شد!</h2>
      <p className="text-2xl font-bold mb-6 bg-gradient-to-r from-blue-800 via-yellow-300 to-purple-500 
  bg-[length:200%_200%] bg-clip-text text-transparent animate-gradient-move">
        امتیاز شما:{" "}
        <span className="font-bold text-green-800">
          {state.score} از {state.questions.length}
        </span>
      </p>
      <button
        onClick={() => dispatch({ type: "RESTART" })}
        className="bg-green-600 text-white px-6 py-3 rounded-xl hover:bg-green-700 transition"
      >
        شروع مجدد
      </button>
    </div>
  );
}
