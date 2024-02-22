import React, { useEffect, useState } from 'react';
import questionData from './questions.json';

const App = () => {


  const [currentQues, setCurrentQues] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [timer, setTimer] = useState(10);

  useEffect(() => {
    let interval;
    if (timer > 0 && !showScore) {
      interval = setInterval(() => {
        setTimer((prevTime) => prevTime - 1);
      }, 1000)
    } else {
      clearInterval(interval);
      setShowScore(true);
    }

    return () => clearInterval(interval);

  }, [timer, showScore])

  const handleAnswerClick = (selectedOption) => {
    if (selectedOption === questionData[currentQues].correctOption) {
      setScore((prevScore => prevScore + 1));
    }

    if (currentQues < questionData.length - 1) {
      setCurrentQues(prevQuestion => prevQuestion + 1);
      setTimer(10);
    } else {
      setShowScore(true)
    }
  }

  const handleReset = () => {
    setCurrentQues(0);
    setScore(0);
    setShowScore(false);
    setTimer(10);

  }


  return (
    <div className='w-screen h-screen flex justify-center items-center bg-slate-800'>
      <div className='bg-white p-5 w-[80%] md:w-[50%] rounded-md shadow-black shadow-md'>
        {showScore ? (
          <div className='text-center'>
            <h2 className="font-semibold text-xl">Your Score: {score}/{questionData.length}</h2>
            <button className="bg-red-500 my-3 text-white font-bold py-2 px-4 rounded-full" onClick={handleReset}>
              Restart
            </button>
          </div>
        ) : (
          <div className='text-center'>
            <h2 className="font-bold text-3xl text-blue-500">Question {currentQues + 1}</h2>
            <p className='my-4 text-xl font-medium'>{questionData[currentQues].question}</p>
            <div className="space-x-4 my-6 flex flex-wrap justify-center">
              {questionData[currentQues].options.map((option, index) => (
                <button
                  className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded-full mb-2 md:mb-0 md:mr-2"
                  key={index}
                  onClick={() => handleAnswerClick(index)}
                >
                  {option}
                </button>
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
