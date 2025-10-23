import { useState, useRef } from "react";



export default function MyRef() {
    let cnt = 1;
    const [sCnt, setSCnt] = useState(1);
    const rCnt = useRef(cnt);

    const handleCnt = ()=>{        
        setSCnt(sCnt+1);
        setSCnt((prev)=> prev =prev+1);
    };

    const handleRCnt = ()=>{        
        rCnt.current = rCnt.current +1;
        console.log("rCnt=", rCnt);
        
    };

    return (
        <div className="w-full h-full text-xl font-bold flex justify-center items-center space-x-5">
            <div className="text-amber-800">
                <div className="bg-amber-200" >일반 컴포넌트 변수</div>
                <div className="text-center">0</div>
            </div>
            <div className="text-lime-800">
                <div className="bg-lime-200" onClick={handleCnt}>State 변수</div>
                <div className="text-center">{sCnt}</div>
            </div>
            <div className="text-indigo-800">
                <div className="bg-indigo-200" onClick={handleRCnt}>Ref 변수</div>
                <div className="text-center">{rCnt.current}</div>
            </div>
        </div>
    )
}
