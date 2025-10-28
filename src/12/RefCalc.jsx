import React, { useEffect, useRef } from 'react'
import TailButton from '../components/TailButton'


export default function RefCalc() {
    //input요소 ref연결
    const txt1Ref = useRef();
    const txt2Ref = useRef();
    const resultRef = useRef();
    const optRef = useRef();

    //컴포넌트 생성시
    useEffect(() => {
        txt1Ref.current.focus();
    }, []);

    //연산 버튼누르면
    const handleClick = (e) => {
        e.preventDefault(); //자기 자신 페이지로 다시 돌아오는 submit 막음

        let num1 = txt1Ref.current.value ?? ""; //아직 안만들어져서 undefined이면 공백
        let num2 = txt2Ref.current.value ?? "";
        let operator = optRef.current.value ?? "+";

        let result;

        switch (operator) {
            case "+":
                result = Number(num1) + Number(num2);
                break;
            case "-":
                result = Number(num1) - Number(num2);
                break;
            case "*":
                result = Number(num1) * Number(num2);
                break;
            case "/":
                result = (Number(num2) == 0 ) ? "오류" : Number(num1) / Number(num2);
                break;
            case "%":
                result = (Number(num2) == 0 ) ? "오류" : Number(num1) % Number(num2);
                break;
        }

        resultRef.current.value = result;
    };

    const handleTxt1 = ()=>{
        txt1Ref.current.value = "";
        txt2Ref.current.value = "";
        resultRef.current.value = "";
    };

    return (
        <div className='w-full h-full'>
            <form className='p-10 w-4/5 h-2/5 bg-amber-100 flex flex-col justify-center items-center gap-2'>
                <div className='flex flex-row justify-center items-center space-x-2'>
                <input type='number' name="num1" className='px-4 py-2 bg-white border-solid border-gray-200 border-2 rounded-md'
                    ref={txt1Ref} />
                <select className='px-4 py-2 bg-white border-solid border-gray-200 border-2 rounded-md'
                    ref={optRef}>
                    <option value="+">+</option>
                    <option value="-">-</option>
                    <option value="*">*</option>
                    <option value="/">/</option>
                    <option value="%">%</option>
                </select>
                <input type='number' name="num2" className='px-4 py-2 bg-white border-solid border-gray-200 border-2 rounded-md'
                    ref={txt2Ref} />
                <TailButton bColor="blue" caption="=" onHandle={handleClick} />
                <input type='text' name="result" readOnly="readOnly" className='px-4 py-2 bg-violet-200 border-solid border-gray-200 border-2 rounded-md'
                    ref={resultRef} />
                </div>
                <TailButton bColor="blue" caption="reset" onHandle={handleTxt1} />
            </form>
        </div>
    )
}
