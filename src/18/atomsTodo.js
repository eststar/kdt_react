import { atom } from "jotai";

export const todosAtom = atom([
    {id: '1', text: '리액트 공부', completed : false},
    {id: '2', text: '넥스트JS 공부', completed : false},
]);

export const todoComplAtom = atom(get=>{
    const todoList = get(todosAtom);
    return todoList.filter(el => el.completed).length;
});

export const todoInComplAtom = atom(get=>{
    const todoList = get(todosAtom);
    return todoList.filter(el => !el.completed).length;
});