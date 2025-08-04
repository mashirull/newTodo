import React, { useState } from 'react'
import List from './List/List'
import AddorDelete from './AddorDelete/AddorEdit'
import style from "./ToDo.module.css"
import { useDispatch, useSelector } from 'react-redux'


const ToDo = () => {

  const toDo =  useSelector(state => state.todo)
  const [index, setIndex] =  useState(null)
  const [isEditing , setIsEditing] =  useState(false)
  
 
  


  return (
    <div className= {style["todo-container"]} >
        <div className={style["todo-list"]}>
            <List toDo = {toDo} setIndex = {setIndex} setIsEditing = {setIsEditing}/>
        </div>
        <div className= {style["todo-addordelete"]}>
            <h1 className= {style["addordelete-title"]}>{isEditing ? "Update" : "Add"} Your <span style= {{color : '#ff6a88'}}>Task</span> </h1>
            <AddorDelete index = {index}  todos = {toDo} isEditing ={isEditing} setIsEditing = {setIsEditing}  />
        </div>
    </div>
  )
}

export default ToDo