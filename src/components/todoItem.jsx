import React, { useState } from 'react'
import {useTodo} from '../context/index'

const TodoItem = ({todo}) => {
  const [todoMsg, settodoMsg] = useState(todo.todoMsg);
  const [editable, seteditable] = useState(false);
  const {deleteTodo,updateTodo,toggleTodo}= useTodo();

  const editHandler=()=>{
    seteditable((prev)=>{
      return !prev
    })
  }

  const deleteHandler=()=>{
        deleteTodo(todo.id)
  }

  return (
    <div className=' w-[95%] px-8  bg-amber-600 flex mt-5 h-16 justify-between gap-12'>
       <div className=' w-3/4 h-full py-4 '><input className={`w-full h-full border-spacing-1 border-2 border-red-200 px-4 py-4 text-xl font-semiblod`} value={todoMsg} readOnly={!editable} onChange={(e)=>{settodoMsg(e.target.value)}}  type="text"/></div> 
       <div className=' h-full w-1/4 flex justify-around items-center'>
        <button className= {` w-24 h-10 rounded-md ${editable ?'bg-blue-400 ':'bg-blue-600 shadow-md'}`} onClick={editHandler} >Edit</button>
        <button className=' w-24 h-10 bg-blue-600 rounded-md' onClick={deleteHandler}>Delete</button>
       // <input type={`checkbox`} className=' h-4 w-4' /></div>
    </div>
  )
}

export default TodoItem