import React from 'react'
import MyDiv3 from './MyDiv3'

export default function MyDiv2({dName1, dName2, dName3}  /* props */) {
    return (
        <div className='bg-orange-400 h-1/2 w-2/3 flex justify-center items-center'>
            <span className='align-top h-4/5'>{`${dName1} > ${dName2}`    /* {props.dName1} {'>'} {props.dName2} */}</span>
            <MyDiv3 dName1 = {dName1} dName2 = {dName2} dName3 = {dName3}/>
        </div>
    )
}
