import React from 'react'
import MyClockImge from './MyClockImge'
import MyClockTime from './MyClockTime'

export default function MyClock() {
  return (
    <div className='flex flex-col justify-center items-center w-screen h-screen'>
      <MyClockImge />
      <MyClockTime />
    </div>
  )
}
