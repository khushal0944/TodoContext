import { useEffect, useState } from 'react'
import {TodoProvider} from './Context/Context'

import TodoForm from './components/TodoForm';
import TodoItem from './components/TodoItem';

export default function App() {
  const [todos , setTodos] = useState([])
  const addTodo = (todo)=>{
    setTodos((prevVal)=>[...prevVal, {id : Date.now(),todoMsg: todo,completed : false}]);
  }
  const updateTodo = (id,newTodo)=>{
    setTodos((prevVal)=> prevVal.map((eachVal)=> eachVal.id === id? eachVal.todoMsg = newTodo : eachVal.todoMsg))
  }
  const removeTodo = (id)=>{
    setTodos((prevVal) => prevVal.filter((eachVal)=> eachVal.id !== id ))
  }
  const toggleCompleted = (id)=>{
    setTodos((prev) => prev.map((prevTodo)=>(
      prevTodo.id === id ? {...prevTodo, completed: !prevTodo.completed} : prevTodo
    )))
  }

  useEffect(()=>{
    const allTodos = JSON.parse(localStorage.getItem("todos"));
    if(allTodos && allTodos.length > 0) setTodos(allTodos);
  },[])

  useEffect(()=> localStorage.setItem("todos",JSON.stringify(todos)),[todos])

  return (
    <TodoProvider value={{todos, addTodo, removeTodo, updateTodo,toggleCompleted}}>
    <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
            <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
            <div className="mb-4">
                <TodoForm />
            </div>
            <div className="flex flex-wrap gap-y-3">
                {todos.map((each)=>(
                  <div key={each.id}>
                  <TodoItem todo={each}/>
                  </div>
                ))}
            </div>
        </div>
    </div>
    </TodoProvider>
  )
}