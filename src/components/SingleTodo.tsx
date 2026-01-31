import React, { useState, useRef, useEffect } from 'react'
import type { Todo } from './Modal';
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import { MdOutlineDoneOutline } from "react-icons/md";

interface Props {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}


const SingleTodo: React.FC<Props> = ({ todo, todos, setTodos }) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(todo.todo);
  const inputRef = useRef<HTMLInputElement>(null)
  const handleDone = (id: number) => {
    setTodos(todos.map((todo) => todo.id === id ? { ...todo, isDone: !todo.isDone } : todo))

  }

  const handleDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }
  const handleEdit = () => {
    if (!edit && !todo.isDone) {
      setEdit(!edit);

    }

  }
  useEffect(() => {
    inputRef.current?.focus()
  }, [edit])
  const handleSubmit = (e: React.SubmitEvent, id: number) => {
    e.preventDefault()
    setTodos(todos.map((todo) => todo.id === id ? { ...todo, todo: editTodo } : todo))
    setEdit(false)
  }
  return (
    <form className='todos_single' onSubmit={(e) => handleSubmit(e, todo.id)}>

      {edit ? (<input type="text" value={editTodo} onChange={(e) => setEditTodo(e.target.value)} className="todos_single--text" ref={inputRef} />) : (todo.isDone ? (<s className='todos_single_text'>{todo.todo}</s>) : (<span className='todos_single_text'>{todo.todo}</span>))}


      <div>
        <span className='icon' onClick={() => handleEdit()} >
          <CiEdit />

        </span>
        <span className='icon' onClick={() => handleDelete(todo.id)}>
          <MdDelete />

        </span>
        <span className='icon' onClick={() => handleDone(todo.id)}>
          <MdOutlineDoneOutline />

        </span>
      </div>

    </form>

  )
}

export default SingleTodo