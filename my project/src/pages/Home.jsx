import React from "react";
import { useQuiz } from "../context";

export default function Home() {
  const { dispatch } = useQuiz();

  return (
    <div className="flex flex-col  items-center justify-center h-screen bg-gray-100 text-center">
      <h1 className="text-3xl font-bold mb-6 bg-black text-white rounded-lg">به آزمون خوش آمدید</h1>
      <button
        onClick={() => dispatch({ type: "START" })}
        className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition"
      >
        شروع آزمون
      </button>
    </div>
  );
}
