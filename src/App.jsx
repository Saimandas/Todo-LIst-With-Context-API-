import React, { useEffect, useState } from 'react'
import {TodoCotextProvider,useTodo} from './context/index'
import TodoForm from './components/todoForm'
import TodoItem from './components/todoItem'

const App = () => {

  const [todos, settodos] = useState([])

  const addTodo=(todo)=>{
      settodos((prev)=>{
        return [{id:Math.random(),todoMsg:todo,completed:false},...prev]
      })
  }
  
  const updateTodo=(id,todo)=>{
      todos.filter((e)=>{
      e==id
    })

    settodos((prev)=>{
     return [{...updateObj, todoMsg:todo},...prev]
    })

  }

  const deleteTodo=(id)=>{
      settodos((prev)=>{
       return prev.filter((e)=>{
        return e.id !=id
        })
      })
  }
  const toggleTodo=(id)=>{
                settodos((prev)=>{
                  const filter= prev.filter((e)=>{
                    e.id==id
                  })
                  return [{...filter,completed:true},...prev]
                })
  }
  
   return (
    <TodoCotextProvider value={{todos,addTodo,updateTodo,deleteTodo,toggleTodo}} >
       <div className=' w-screen h-screen flex justify-center items-center'>
       <h1 className=' place-self-start fixed left-[55rem] text-2xl font-mono font-bold top-20'>Todo</h1>
        <div className=' w-[70%] h-[70%] bg-blue-100 '>
          
          <TodoForm/>
          <div className=' bg-blue-400 h-[80%] w-full flex flex-col items-center'>
          {todos.map((e)=>{
            return <TodoItem key={e.id} todo={e}/>
          })}
             
          </div>
        </div>
        
       </div>
       </TodoCotextProvider>
  )
}

export default App