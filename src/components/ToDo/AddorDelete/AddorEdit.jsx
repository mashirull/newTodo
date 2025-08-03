import React, { useState } from 'react'
import style from "../ToDo.module.css"
import { useDispatch } from 'react-redux';
import { addTodo } from '../../../store/todoSlice';


const AddorDelete = () => {

  const [taskName, setTaskName] = useState("");

  const dispatch =  useDispatch();

  const HandleAddTodo = () => {
    if(!taskName.trim()){
      alert("Please add a task name")
    }
    else{
      dispatch(addTodo({title : taskName}))
    }
    setTaskName("")
  }

  return (
    <div className={style["addordelete-container"]}>
      <input type="text" 
        placeholder='Task Name...' 
        className={style["addordelete-input"]} 
        onChange={(e) => setTaskName(e.target.value)} 
        value={taskName} required />
      <button type='submit' className={style["addordelete-button"]} onClick={HandleAddTodo}>Add To List</button>
  
    </div>
  )
}

export default AddorDelete