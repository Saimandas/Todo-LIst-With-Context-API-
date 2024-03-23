import { createContext, useContext, useState } from "react"; 
const todoContext= createContext({
   todos:[{id:"1",todoMsg:"",completed:false}],
   addTodo:(todo)=>{},
   deleteTodo:(id)=>{},
   updateTodo:(id,todo)=>{},
   toggleTodo:(id)=>{}
})

 export const TodoCotextProvider= todoContext.Provider;

export  const useTodo=()=>{
     return useContext(todoContext);
};
