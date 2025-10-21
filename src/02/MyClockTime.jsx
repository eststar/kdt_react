import React from 'react'
import { useState, useEffect } from 'react'

export default function MyClockTime() {
  const [curTime, setCurTime] = useState(new Date());

  useEffect(()=>{
    let timerId = setInterval(() => {
      setCurTime(new Date())
    }, 1000);
    
    return ()=>clearInterval(timerId);
  }, []);
  return (
    <div className='h-10 w-100 flex justify-center items-center text-amber-800 
                        bg-gradient-to-r from-fuchsia-900 to-fuchsia-50 rounded-xl'>
      {/* <span>현재시각 : {new Date().toLocaleTimeString()}</span> */}
      <span>현재시각 : {curTime.toLocaleTimeString()}</span>
    </div>
  )
}
