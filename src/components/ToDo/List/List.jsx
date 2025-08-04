import React, { useEffect, useState } from 'react'
import style from "../ToDo.module.css"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'
import { useDispatch, useSelector } from 'react-redux'
import { chekboxToggle, deleteToDo } from '../../../store/todoSlice'

const List = ({toDo , setIndex ,setIsEditing}) => {

const [serachText , setSearchText] = useState("")
const dispatch =  useDispatch()

const handleCheckbox = (i) => {
      dispatch(chekboxToggle({index : i})) // Dispatch the action with the index
  }

  const handleDeleteTodo =  (id) => {
    dispatch(deleteToDo({id}))
  }

  return (

    <div>
        <input type='search' placeholder='Search Tasks...'  className= {style["todo-search-input"]} onChange={(e) => setSearchText(e.target.value)} value={serachText}/>
        {!toDo.length ? <p style={{color:"white"}}>No any task, Please add</p>  :toDo.map((todo , i) => {
            return (
                <div className={style["todo-item"]} key={i}>
                    <h1 className={style["todo-title"]}>{todo.title}</h1>
                    <div>
                        <input type='checkbox' checked = {toDo[i].isCompleted} onChange={()=> {handleCheckbox(i)}}
                        className={style["todo-checkbox"]} />
                        <span style={{ marginLeft: "16px", cursor: "pointer", color: "#8f6ed5" }} onClick={()=> {setIndex(i) , setIsEditing(true)}} >
                            <FontAwesomeIcon icon={faEdit}/>
                        </span>
                        <span style={{ marginLeft: "12px", cursor: "pointer", color: "#ff6a88" }} onClick={() =>{handleDeleteTodo(todo.id)}}>
                            <FontAwesomeIcon icon={faTrash}/>
                        </span>

                    </div>
                </div>
            )
        })}
    </div>
  )
}

export default List