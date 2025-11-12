import { useEffect, useRef, useState } from "react";

import { todosAtom, todoComplAtom, todoInComplAtom } from "./atomsTodo"
import TodoInput from "./TodoInput"
import TodoItem from "./TodoItem"

import { useAtom, useAtomValue } from "jotai"


export default function () {
    const todo = useAtomValue(todosAtom);
    const todoComp = useAtomValue(todoComplAtom);
    const todoInComp = useAtomValue(todoInComplAtom);

    const [todoList, setTodoList] = useState();
    const [todoCnt, setTodoCnt] = useState(todo.length);    
    
    //jotai atom변수 바뀌면 어차피 새로 갱신되서 useeffect 사용할 필요 없었음
    useEffect(()=>{
        setTodoList(
            todo.map((item)=>
                <TodoItem data={item} key={item.id} />
            )
        );
        setTodoCnt(todo.length);
    }, [todo]);    

    return (
        <div className="mx-auto w-7/10 flex flex-col justify-center items-center gap-4">
            <h1 className="text-3xl font-bold mt-10">할일목록</h1>
            <div className="bg-purple-200 rounded w-full h-100px p-5">
                전체 : {todoCnt} 개 | 완료 : {todoComp} 개 | 미완료 : {todoInComp} 개
            </div>
            <TodoInput />
            <div className="w-full flex flex-col justify-center items-center gap-2">
                {todoList}
            </div>
        </div>
    )
}
