import React from "react";
import { useQuiz } from "../context";

export default function Home() {
  const { dispatch } = useQuiz();

  return (
    <>
    <div className="bg-[linear-gradient(270deg,#ff0000,#ff7f00,#ffff00,#00ff00,#0000ff,#4b0082,#8f00ff)] 
  bg-[length:400%_400%] animate-gradient-move w-full h-10 flex justify-center items-center font-extrabold text-2xl">به سایت ازمون ما خوش آمدید </div>


    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center">
      <h1 className="flex  text-3xl font-bold bg-black text-white rounded-xl w-72 h-20 justify-center items-center">به آزمون خوش آمدید</h1>
      <p className="bg-gray-400 rounded-xl h-10 w-40 flex justify-center items-center m-auto mt-10 mb-10 font-semibold">برای شروع کلیک کنید</p>

      <button
        onClick={() => dispatch({ type: "START" })} 
        className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:shadow-blue-500 hover:shadow-xl hover:border border-blue-800"
      >
        شروع آزمون
      </button>
    </div>
    </>
  );
}
