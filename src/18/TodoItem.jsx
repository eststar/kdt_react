import TailButton from "../components/TailButton";
import { useSetAtom } from "jotai";
import { todosAtom } from "./atomsTodo"
import { useState } from "react";

export default function TodoItem({ data }) {
    const setTodos = useSetAtom(todosAtom);

    const [isEdit, setIsEdit] = useState(false);
    const [editingTxt, setEditingTxt] = useState(data.text);
    //내용 수정
    const editTodo = ()=>{
        setIsEdit(!isEdit);
        return setTodos(prev => prev.map(el=>(el.id == data.id) ? {...el, text: editingTxt} : el));
    };
    //완료상태
    const handleToggle =()=>
        setTodos(prev => prev.map(el=>(el.id == data.id) ? {...el, completed: !data.completed} : el));

    //삭제
    const delTodo = () =>setTodos(prev=>
            prev.filter(el=> el.id != data.id));

    return (
        <div className="w-full grid grid-cols-3 md:grid-cols-5 lg:grid-cols-10 gap-2 border-1 border-slate-800 border-solid rounded p-2">
            <div className="col-span-1 md:col-span-3 lg:col-span-8 flex justify-start w-full gap-2">
                <input id={data.id} type="checkbox" name={data.text} checked={data.completed} onChange={handleToggle}/>
                {isEdit ? <input className="flex-1 border-2 border-fuchsia-300 border-solid p-2 rounded focus:bg-amber-200"
                    type="text" value={editingTxt} 
                    onChange={(e) => setEditingTxt(e.target.value)} />
                    : <label htmlFor={data.id} className={`flex justify-center items-center ${ data.completed ? "line-through": ""}`}>{data.text}</label>
                }
            </div>
            <div className="w-full col-span-2 grid grid-rows-1 grid-cols-2 gap-2">
                {
                    isEdit ?
                        <>
                            <TailButton bColor="green" caption="저장" onHandle={editTodo} />
                            <TailButton bColor="orange" caption="취소" onHandle={() => setIsEdit(!isEdit)} />
                        </>
                        :
                        <>
                            <TailButton bColor="green" caption="수정" onHandle={()=>setIsEdit(!isEdit)} />
                            <TailButton bColor="orange" caption="삭제" onHandle={delTodo} />
                        </>
                }
            </div>
        </div>
    )
}
