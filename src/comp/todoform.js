import React, { useEffect, useRef, useState } from 'react';

function Todoform(props) {
    const [value,setvalue]=useState(props.edit?props.edit.value:"")
    const changeHandler=(e)=>{
        e.preventDefault()
        setvalue(e.target.value)
    }
    const inpRef=useRef(null)
    useEffect(()=>{
        inpRef.current.focus()
    })
    const submitHandler=e=>{
        e.preventDefault()
        props.onSubmit({
           id:Math.floor(Math.random()*1000000),
            text:value
        })
        setvalue("")
    }

  return( 
    <div className="todoform">
        <form action="submit" className="form"  onSubmit={submitHandler}>
            {props.edit?<>
                <input type="text" className="text-inp" value={value} placeholder='Add a todo' ref={inpRef} onChange={changeHandler} />
            <button action="submit" className="btn">Update</button>
            </>:
            <><input type="text" className="text-inp" value={value} placeholder='Add a todo' ref={inpRef} onChange={changeHandler} />
            <button action="submit" className="btn">Add todo</button></>}
            
        </form>
    </div> 
)
}

export default Todoform;
