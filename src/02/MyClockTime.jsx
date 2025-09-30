import React from 'react'

export default function MyClockTime() {
  return (
    <div className='h-10 w-100 flex justify-center items-center text-amber-300 
                        bg-gradient-to-r from-fuchsia-900 to-fuchsia-50 rounded-xl'>
      <span>현재시각 : {new Date().toLocaleTimeString()}</span>
    </div>
  )
}
