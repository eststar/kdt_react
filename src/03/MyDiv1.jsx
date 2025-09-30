import React from 'react'
import MyDiv2 from './MyDiv2'

export default function MyDiv1() {
    const div1Name = 'div1';
    const div2Name = 'div2';
    const div3Name = 'div3';
    return (
        <div className='bg-orange-700 h-1/2 w-2/3 flex justify-center items-center' >
            <span className='align-top h-4/5'>{div1Name}</span>
            <MyDiv2 dName1 = {div1Name} dName2 = {div2Name} dName3 = {div3Name}/>
        </div>
    )
}
