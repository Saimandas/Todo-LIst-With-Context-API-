import React, { useState } from 'react'
import {useTodo} from '../context/index'


const TodoForm = () => {
   const [todo, settodo] = useState("")
    const {addTodo}= useTodo()

    const add=(e)=>{
      e.preventDefault();
      addTodo(todo);
      settodo("")
    }
  return (
    <div className=' w-full h-[20%] bg-red-500 py-10 px-10'>
            <form onSubmit={add}><input type="text" placeholder='enter to-do here' className=' w-[80%] h-14 px-5' 
            value={todo}
            onChange={(e)=>{
              settodo(e.target.value)
            }} />  <button type='submit' className=' w-28 h-12 ml-5 bg-orange-300 rounded-md'>Add</button> </form>
          </div>
  )
}

export default TodoForm