import { useEffect, useState } from "react";

import TodoInput from "./TodoInput"
import TodoItem from "./TodoItem"

export default function () {

    //jotai atom변수 바뀌면 어차피 새로 갱신되서 useeffect 사용할 필요 없었음
    const [todos, setTodos] = useState([]);
    const [todoCnt, setTodoCnt] = useState(0);
    const [todoInComp, setTodoInComp] = useState(0);
    const [todoComp, setTodoComp] = useState(0);
    const [todoList, setTodoList] = useState();
    useEffect(() => {
        // const newitem =[{ id: 1, text:"리액트 공부", completed: false},];
        //JSON라이브러리 사용
        //자바스크립트 객체를 문자열로 변환 JSON.stringify()
        // localStorage.setItem( "todo", JSON.stringify(newitem));
        //문자열을 자바스크립트 객체로 JSON.parse()
        // const newitem =[{ id: 1, text:"리액트 공부", completed: false},
        //                 { id: 2, text:"로컬 테스트", completed: true}
        // ];
        // localStorage.setItem( "todo", JSON.stringify(newitem));

        let localStor;
        try {
            const getValue = localStorage.getItem("todo");
            if(getValue)
                localStor = JSON.parse(getValue) || []; 
            else
                console.log("Key가 없거나, Value가 잘못된 형식입니다.");
            setTodos(localStor);
        } catch (error) {
            alert("로컬스토리지 데이터에 문제가 있습니다.");
            localStor = [];
        }
    }, []);

    const handleSave = (newList) => {
        setTodos(newList);
        localStorage.setItem("todo", JSON.stringify(newList));
    };

    useEffect(() => {
        // if (!todos)
        //     return;

        setTodoCnt(todos.length);
        setTodoComp(todos.filter(el => el.completed == true).length);
        setTodoInComp(todos.filter(el => el.completed == false).length);

        setTodoList(
            todos.map((item) => <TodoItem key={item.id} data={todos} curData={item} handleSave={handleSave} />)
        );
    }, [todos]);

    return (
        <div className="mx-auto w-7/10 flex flex-col justify-center items-center gap-4">
            <h1 className="text-3xl font-bold mt-10">할일목록</h1>
            <div className="bg-purple-200 rounded w-full h-100px p-5">
                전체 : {todoCnt} 개 | 완료 : {todoComp} 개 | 미완료 : {todoInComp} 개
            </div>
            <TodoInput data={todos} handleSave={handleSave} />
            <div className="w-full flex flex-col justify-center items-center gap-2">
                {todoList}
            </div>
        </div>
    )
}
