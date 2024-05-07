import { useContext } from "react";
import { createContext } from "react";

const TodoContext = createContext({
    todos : [
        {
            id: 1,
            todoMsg : "Hello",
            complete : false
        }
    ],
    addTodo : (todo)=>{},
    updateTodo : (id,todo)=>{},
    removeTodo : (id)=>{},
    toggleCompleted : (id)=>{}
});

export const TodoProvider = TodoContext.Provider ;

export const useTodoContext = ()=>{
    return useContext(TodoContext);
}