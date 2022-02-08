import React, { useState } from 'react';
import {MdDeleteForever} from 'react-icons/md'
import {FiEdit} from 'react-icons/fi'
import Todoform from './todoform';

function TodoDisp({todos,Completetodo,removeId,updateTodo}) {
    const [edit,setEdit]=useState({id:null,value:""})
    
    const ClickHandler=value=>{
        updateTodo(edit.id, value)
        setEdit({id:null,value:""})
    }
    if(edit.id){
        console.log(edit);
        return <Todoform edit={edit} onSubmit={ClickHandler}/>
    }
    return todos.map((todo,index)=>(
       <div className={todo.isComplete?'todo-row completed':'todo-row'}  key={index}>
           <div key={todo.id} className='todo-task' onClick={()=>Completetodo(todo.id)}>{todo.text}</div>
           <div className="icons">
           <MdDeleteForever onClick={()=>removeId(todo.id)}/>
           <FiEdit onClick={()=>setEdit({id:todo.id,value:todo.text})}/>
           </div>
       </div>
  )
   )
}

export default TodoDisp;
