import React from 'react'

export default function MyDiv3(props) {
    return (
        <div className='bg-orange-200 h-1/2 w-2/3 flex justify-center items-center'>
            <span >{props.dName1} {'>'} {props.dName2} {'>'} {props.dName3}</span>
        </div>
    )
}
