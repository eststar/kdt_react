import React from 'react'
import { FcAlarmClock } from "react-icons/fc";
import ClockImg from '/clock.png';


export default function MyClockImge() {
  return (
    <div className='w-full h-3/5 flex justify-center items-center'>
      <FcAlarmClock className='w-full h-full' />
      {/* <img src="/src/02/clock2.png" alt="clock" /> */}
      {/* <img src={ClockImg} alt="clock" /> */}
      {/* <img src="/clock2.png" alt="clock" /> */}
    </div>
  )
}
