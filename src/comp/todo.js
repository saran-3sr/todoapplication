import React, { useEffect, useState } from 'react';
import TodoDisp from './tododisp';
import Todoform from './todoform';

function Todo() {
    const [todos,settodos]=useState(()=>{
        const saved=localStorage.getItem("todos")
        console.log()
        return JSON.parse(saved)||[];
    })
    useEffect(()=>{
        console.log(todos);
        localStorage.setItem("todos",JSON.stringify(todos))
    },[todos])
    

    const addtodos=todo=>{
        if(!todo.text||( /^\s*$/.test(todo.text))){
        return
        }
        const newtodos=[todo,...todos]
        settodos(newtodos)
        console.log(newtodos);
        }
    const Completetodo=id=>{
        let updatedTodos=todos.map(todo=>{
            if(todo.id===id){
                todo.isComplete=!todo.isComplete
            }
            return todo;
        })
        settodos(updatedTodos)
    }
    const removeId=(id)=>{
        let removeArr=[...todos].filter(todo=>todo.id!==id)
        settodos(removeArr)
    }
    const updateTodo=(id,newvalue)=>{
        if(!newvalue.text||( /^\s*$/.test(newvalue.text))){
            return;
        }
        console.log("bullshit");
        settodos(prev=>prev.map(item=>(item.id===id?newvalue:item)))
    }
    
    return (
      <div className="Todo">
          <h1>What's Up for Today</h1>
        <Todoform onSubmit={addtodos}/>
        <TodoDisp todos={todos} Completetodo={Completetodo} removeId={removeId} updateTodo={updateTodo}/>
      </div>
    );
}

export default Todo;