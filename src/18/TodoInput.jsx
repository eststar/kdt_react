import { useSetAtom } from "jotai";
import TailButton from "../components/TailButton";
import { todosAtom } from "./atomsTodo";
import { useRef } from "react";

export default function TodoInput() {
    const inRef = useRef("");
    const setTodos = useSetAtom(todosAtom);

    const addTodo = ()=>{
        if(inRef.current.value == ""){
            alert("값을 입력해주세요")
            inRef.current.focus();
            return;
        }
        const newitem = { id: `${Date.now()}`, text: `${inRef.current.value}`, completed: false};
        setTodos(prev => [...prev, newitem]);
        inRef.current.value = "";
        inRef.current.focus();
    };
    
    return (
        <div className="w-full flex flex-row gap-2">
            <input ref={inRef} className="flex-1 border-2 border-emerald-200 border-solid p-2 rounded"
                type="text" name="todo" placeholder="새로운 할 일을 입력하세요" />
            <div className="">
                <TailButton bColor="blue" caption="추가" onHandle={addTodo} />
            </div>
        </div>
    )
}
