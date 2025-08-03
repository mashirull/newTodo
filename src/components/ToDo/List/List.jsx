import React, { useEffect, useState } from 'react'
import style from "../ToDo.module.css"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'
import { useSelector } from 'react-redux'

const List = () => {

const [serachText , setSearchText] = useState("")


const toDo =  useSelector(state => state.todo)



const handleCheckbox = (i) => {
    const updatedToDo = [...toDo];
    updatedToDo[i].isCompleted = !updatedToDo[i].isCompleted
    //setToDo(updatedToDo) 
}

const handleDelete = (i) =>{
    let updatedToDo = [...toDo]
    updatedToDo = updatedToDo.filter(ele => ele.id !== i )
    //setToDo(updatedToDo)                
}

useEffect(()=>{
    let updatedToDo = [...toDo]
    updatedToDo = updatedToDo.filter(ele => ele.title.toLocaleLowerCase().includes(serachText.toLocaleLowerCase()))
    //setToDo(updatedToDo)

},[serachText])

  return (

    <div>
        <input type='search' placeholder='Search Tasks...'  className= {style["todo-search-input"]} onChange={(e) => setSearchText(e.target.value)} value={serachText}/>
        {!toDo.length ? <p style={{color:"white"}}>No any task, Please add</p>  :toDo.map((todo , i) => {
            return (
                <div className={style["todo-item"]} key={i}>
                    <h1 className={style["todo-title"]}>{todo.title}</h1>
                    <div>
                        <input type='checkbox' checked = {toDo[i].isCompleted} onChange={()=> handleCheckbox(i)}
                        className={style["todo-checkbox"]} />
                        <span style={{ marginLeft: "16px", cursor: "pointer", color: "#8f6ed5" }} >
                            <FontAwesomeIcon icon={faEdit}/>
                        </span>
                        <span style={{ marginLeft: "12px", cursor: "pointer", color: "#ff6a88" }} onClick={() =>handleDelete(todo.id)}>
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