import React from 'react'
import './spinner.css'
function Spinner() {
  return (
    <div
     className='flex flex-col items-center space-y-2 h-[80vh] justify-center'
    >
        <div className="spinner"></div>
        <p className='text-green-500 text-lg font-semibold'>Loading....</p>
    </div>
  )
}

export default Spinner
