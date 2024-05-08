import { useContext } from "react";
import { createContext } from "react";

const TodoContext = createContext({
    todos : [],
    addTodo : (todo)=>{},
    updateTodo : (id,todo)=>{},
    removeTodo : (id)=>{},
    toggleCompleted : (id)=>{}
});

export const TodoProvider = TodoContext.Provider ;

export const useTodoContext = ()=>{
    return useContext(TodoContext);
}