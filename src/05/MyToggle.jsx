import React from 'react'
import MyToggleBox from './MyToggleBox'


export default function MyToggle() {
    return (
        <div className='w-300 h-80 flex flex-col justify-center items-center p-20'>
            <div className='w-full h-full grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
                <MyToggleBox bgColor="blue" />
                <MyToggleBox bgColor="red" />
                <MyToggleBox bgColor="green" />
            </div>
        </div>
    )
}
