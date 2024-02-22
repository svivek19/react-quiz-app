import React from 'react';
const App = () => {
  return (
    <div className='w-screen h-screen flex justify-center items-center bg-slate-800'>
      <div className='bg-white p-5 rounded-md shadow-black shadow-md'>

          <div className='text-center hidden'>
            <h2 className="font-semibold text-xl">Your Score: 3/3</h2>
            <button className="bg-red-500 my-3 text-white font-bold py-2 px-4 rounded-full">
              Restart
            </button>
          </div>

        <div className='text-center'>
          <h2 className="font-bold text-2xl text-blue-500">Question 1</h2>
          <p className='my-3 font-medium'>Sample question</p>
          <div className="space-x-4 my-3">
            <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded-full">
              Option 1
            </button>
            <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded-full">
              Option 2
            </button>
            <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded-full">
              Option 3
            </button>
            <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded-full">
              Option 4
            </button>
          </div>
          <div className='font-semibold'>Time Left: <span className='font-bold'>5s</span></div>
        </div>
      </div>
    </div>

  )
}

export default App
