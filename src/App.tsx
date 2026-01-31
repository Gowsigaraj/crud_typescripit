
import React, { useState } from "react";
import './App.css';
import InputField from "./components/InputField";
import type { Todo } from "./components/Modal";
import TodoList from "./components/TodoList";


const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);


  const handleAdd = (e: React.SubmitEvent) => {
    e.preventDefault();
    const todoVal = {
      id: Date.now(),
      todo,
      isDone: false
    }
    if (todo) {
      setTodos([...todos, todoVal]);
      setTodo("")
    }
  }

  // console.log(todos)
  return (
    <>
      <div className="App">
        <span className="heading">Taskify</span>
        <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
        <TodoList todos={todos} setTodos={setTodos} />

      </div>
    </>
  )
}

export default App
