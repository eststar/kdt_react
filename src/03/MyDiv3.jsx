import React from 'react'

export default function MyDiv3(props) { // 객체로 한번에 props : dName1 : {div1Name}, dName2 : {div2Name}, dName3 : {div3Name}
    return (
        <div className='bg-orange-200 h-1/2 w-2/3 flex justify-center items-center'>
            <span >{props.dN1} &gt; {/* {'>'} */} {props.dN2} &gt; {/* {'>'} */} {props.dN3}</span>
        </div>
    )
}
