import { useEffect, useState } from "react";

import TodoInput from "./TodoInput"
import TodoItem from "./TodoItem"

const baseURL = import.meta.env.VITE_SUPABASE_URL;
const supabaseAPIKey = import.meta.env.VITE_SUPABASE_API_KEY;
const restAPILine = "/rest/v1/todos";
export default function () {
    const [todos, setTodos] = useState([]);
    const [todoCnt, setTodoCnt] = useState(0);
    const [todoInComp, setTodoInComp] = useState(0);
    const [todoComp, setTodoComp] = useState(0);
    const [todoList, setTodoList] = useState();

    const getTodos = async ()=>{
        const resp = await fetch(`${baseURL}${restAPILine}`, {
            method : 'GET',
            headers : {
                'apikey' : supabaseAPIKey,
                'Authorization' : `Bearer ${supabaseAPIKey}`,
            }
        });

        if(resp.ok){
            const data = await resp.json();
            setTodos(data);            
        }
        else{
            console.error('Error fetching todos: ', resp.statusText);
            setTodos([]);
        }
    };
    
    const postTodo = async (newData)=>{
        const resp = await fetch(`${baseURL}${restAPILine}`, {
            method : 'POST',
            headers : {
                'apikey' : supabaseAPIKey,
                'Authorization' : `Bearer ${supabaseAPIKey}`,
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify({text : newData.text, completed : newData.completed })
        });
        if(resp.ok){
            getTodos();
            return 1;
        }
        else{
            console.error('Error adding todos: ', resp.statusText);
            return 0;
        }
    };

    const patchTodo = async (newData)=>{
        const resp = await fetch(`${baseURL}${restAPILine}`, {
            method : 'PATCH',
            headers : {
                'Apikey' : supabaseAPIKey,
                'Authorization' : `Bearer ${supabaseAPIKey}`,
                'Content-type' : 'application/json'
            },
            body : JSON.stringify({text: newData.text, completed : newData.completed})
        });

        if(resp.ok)
            getTodos();
        else
            console.error('Error patching todos: ', resp.statusText);
    };

    const deleteTodo = async (newData)=>{
        const resp = await fetch(`${baseURL}${restAPILine}?id=eq.${newData.id}`, {
            method : 'DELETE',
            headers : {
                'Apikey' : supabaseAPIKey,
                'Authorization' : `Bearer ${supabaseAPIKey}`,
            }
        });

        if(resp.ok)
            getTodos();
        else
            console.error('Error patching todos: ', resp.statusText);
    };


    useEffect(() => {
        getTodos();
    }, []);

    useEffect(() => {
        setTodoCnt(todos.length);
        setTodoComp(todos.filter(el => el.completed == true).length);
        setTodoInComp(todos.filter(el => el.completed == false).length);

        setTodoList(
            todos.map((item) => 
                <TodoItem key={item.id} curData={item} handleEdit={patchTodo} handleDelete={deleteTodo} />)
        );
    }, [todos]);

    return (
        <div className="mx-auto w-7/10 flex flex-col justify-center items-center gap-4">
            <h1 className="text-3xl font-bold mt-10">할일목록(Supabase)</h1>
            <div className="bg-purple-200 rounded w-full h-100px p-5">
                전체 : {todoCnt} 개 | 완료 : {todoComp} 개 | 미완료 : {todoInComp} 개
            </div>
            <TodoInput handleSave={postTodo} />
            <div className="w-full flex flex-col justify-center items-center gap-2">
                {todoList}
            </div>
        </div>
    )
}
