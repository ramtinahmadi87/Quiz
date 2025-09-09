import { useQuiz } from "../context"

function Questions() {
  const {state , dispatch}=useQuiz()
  const z = state.questions[state.current];

  if (!state.questions.length) {
  return <p className="flex justify-center items-center  font-bold bg-gradient-to-r from-yellow-500 to-red-700 w-2/6 h-16 rounded-xl m-auto mt-10 text-white ">در حال بارگذاری سوالات...</p>;
}
  return(
    <>


    <div>
      <h3 className=" font-bold h-14 bg-gradient-to-r from-blue-400 via-yellow-500  to-pink-500 
  bg-[length:200%_200%] animate-gradient-move flex items-center justify-center">
        سوال {state.current + 1} از {state.questions.length}
      </h3>
      <p className="text-xl font-bold mb-6 flex justify-center m-auto mt-6 h-40 items-center">{z.question}</p>

      <div className="flex justify-between w-10/12 items-center m-auto h-40">
  {z.options.map((option, index) => (
    <button className="rounded-lg  bg-gradient-to-r from-blue-400 to-purple-500 ml-5 w-5/12 max-h-screen p-2" key={index} onClick={() => dispatch({ type: "ANSWER", payload: option })}>
      {option}
    </button>
  ))}
</div>
 
    </div> 
    </>
  )
}



export default Questions