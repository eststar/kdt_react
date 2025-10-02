import React from 'react'
import MyDiv3 from './MyDiv3'

export default function MyDiv2({dName1, dName2, dName3}  /* 구조분해 할당 중괄호로 묶어서 표현 dName1 : {div1Name}, dName2 : {div2Name}, dName3 : {div3Name} */) {
    return (
        <div className='bg-orange-400 p-10 h-2/3 w-full md:w-4/5 lg:w-3/5 flex flex-row justify-center items-center'>
            <span className ='align-top h-4/5'>{/* {dName1} &gt; {dName2} */}   {`${dName1} > ${dName2}`} </span>
            <MyDiv3 dN1 = {dName1} dN2 = {dName2} dN3 = {dName3}/>
        </div>
    )
}
