import React, { useState } from 'react';
import questionData from './questions.json';

const App = () => {


  const [currentQues, setCurrentQues] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [timer, setTimer] = useState(100);

  const handleAnswerClick = () => {
    
  }

  return (
    <div className='w-screen h-screen flex justify-center items-center bg-slate-800'>
      <div className='bg-white p-5 w-[80%] md:w-[50%] rounded-md shadow-black shadow-md'>
        {showScore ? (
          <div className='text-center'>
            <h2 className="font-semibold text-xl">Your Score: 3/3</h2>
            <button className="bg-red-500 my-3 text-white font-bold py-2 px-4 rounded-full">
              Restart
            </button>
          </div>
        ) : (
          <div className='text-center'>
            <h2 className="font-bold text-3xl text-blue-500">Question {currentQues + 1}</h2>
            <p className='my-4 text-xl font-medium'>{questionData[currentQues].question}</p>
            <div className="space-x-4 my-6">
              {questionData[currentQues].options.map((option, index) => (
                <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded-full" key={index} onClick={() => handleAnswerClick(option)}>{option}</button>
              ))}

            </div>
            <div className='font-semibold'>Time Left: <span className='font-bold'>{timer}s</span></div>
          </div>
        )}



      </div>
    </div>

  )
}

export default App
