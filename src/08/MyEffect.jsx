import { useState, useEffect } from "react"
import TailButton from "../components/TailButton";

export default function MyEffect() {
    const [isActive, setIsActive] = useState(false);
    const [tag, setTag] = useState([]);

    const handleClick = () => {
        setIsActive(!isActive);
        // console.log("handleClick", isActive);
        // if(isActive)
        //     setTag([<div>ON{isActive}</div>]);
        // else
        //     setTag([<div>OFF{isActive}</div>]);
    };

    const tagClick = () => {
       
        if(isActive)
            setTag([<h1 key="tag1">ON{isActive}</h1>]);
        else
            setTag([<h1 key="tag2">OFF{isActive}</h1>]);
    };

    useEffect(() => {
        //컴포넌트 생성시 한번 실행
        console.log("컴포넌트 생성");
    }, []);

    useEffect(() => {
        //State 변수 변경시마다
        console.log("handleClick", isActive);
    },[isActive]);

    useEffect(() => {
        //컴포넌트 변경때 마다 실행
        console.log("useeffect 상태 변경", isActive);
    });

    return (
        <div className="w-full h-full flex justify-center items-center">
            {tag}
            {
                isActive ? <TailButton bColor="blue" caption="useEffect" onHandle={handleClick} />
                    : <TailButton bColor="red" caption="useEffect" onHandle={handleClick} />
            }
            <TailButton bColor="blue" caption="tag" onHandle={tagClick} />
        </div>
    )
}
