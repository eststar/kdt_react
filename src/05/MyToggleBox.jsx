import { useState } from "react"
import TailButton from "../components/TailButton"

const bgStyle = {
    blue : { 
        ON: "bg-blue-300",
        OFF: "bg-blue-100"
    },
    red : { 
        ON: "bg-red-300",
        OFF: "bg-red-100"
    },
    green : { 
        ON: "bg-green-300",
        OFF: "bg-green-100"
    },
};

const textStyle = {
    blue : { 
        ON: "text-blue-300",
        OFF: "text-blue-100"
    },
    red : { 
        ON: "text-red-300",
        OFF: "text-red-100"
    },
    green : { 
        ON: "text-green-300",
        OFF: "text-green-100"
    },
};

export default function MyToggleBox({ bgColor }) {
    const [isActive, setIsActive] = useState(false);  
    const [test, setTest] = useState(0);      
    let cnt = 0;
    const changeBg = ()=>{        
        // setIsActive(!isActive);
        setIsActive(isActive => !isActive);

        // setTest(test+1);
        
        // setTest(test=>{test++;console.log("안쪽 "+test);});
        
        // setTest(test=>{test++;console.log("안쪽 "+test);});
        
        // setTest(test=> {test++;console.log("안쪽 "+test);});
        // console.log(test);
        // console.log(test);
        // console.log(test);
        // console.log(test);
    };
    return (
        <div className={`w-full h-full flex flex-col justify-center items-center ${isActive ? bgStyle[bgColor].ON: bgStyle[bgColor].OFF}`} >
            <h1 className={`text-lg font-bold ${isActive ? textStyle[bgColor].OFF: textStyle[bgColor].ON}`}>{bgColor} 토글박스 </h1>
            <TailButton bColor={bgColor} caption={bgColor} onHandle={changeBg} />
        </div>
    )
}
