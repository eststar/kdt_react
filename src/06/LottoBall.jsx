import React from 'react'

export default function LottoBall({lottoNum}) {
  return (
    <div className='h-20 w-20 rounded-full bg-amber-900'>
      {(lottoNum == 0)? '+' : lottoNum}
    </div>
  )
}
