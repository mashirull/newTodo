import React, { useEffect, useState } from 'react'
import style from "../ToDo.module.css"
import { useDispatch } from 'react-redux';
import { addTodo, updateTodo } from '../../../store/todoSlice';


const AddorDelete = ({index, todos,isEditing ,setIsEditing}) => {


  const [taskName, setTaskName] = useState("");
  
 
  useEffect(() => {
    if(isEditing && index !== null){
      setTaskName(todos[index].title)
    }
    else{
      setTaskName("")
    }
  },[index,isEditing, todos])
 

  

  const dispatch =  useDispatch();

  const HandleAddTodo = () => {
    if(!taskName.trim()){
      alert("Please add a task name")
    }
    if(isEditing && index !== null){
      dispatch(updateTodo({index , title : taskName}))
      setTaskName("")
      setIsEditing(false)
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
      <button type='submit' className={style["addordelete-button"]} onClick={HandleAddTodo}> {isEditing ? "Update Task" : "Add To List"}</button>
  
    </div>
  )
}

export default AddorDelete