import React, { useEffect, useState } from 'react'
import style from "../ToDo.module.css"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'

const List = () => {

const [serachText , setSearchText] = useState("")
const [toDo, setToDo] =  useState([
    {
        id : 1 ,
        title : "Buy groceries",
        isCompleted : false
    },
    {
        id : 2 ,
        title : "Complete React assignment",
        isCompleted : false
    },
    {
        id : 3 ,
        title : "Call the electrician",
        isCompleted : false
    },
    {
        id : 4 ,
        title : "Read a book",
        isCompleted : false
    },
    {
        id : 5 ,
        title : "Pay utility bills",
        isCompleted : false
    },
    {
        id : 6 ,
        title : "Clean the house",
        isCompleted : false
    }
])


const handleCheckbox = (i) => {
    const updatedToDo = [...toDo];
    updatedToDo[i].isCompleted = !updatedToDo[i].isCompleted
    setToDo(updatedToDo) 
                        
}


useEffect(()=>{
    let updatedToDo = [...toDo]
    updatedToDo = updatedToDo.filter(ele => ele.title.toLocaleLowerCase().includes(serachText.toLocaleLowerCase()))
    setToDo(updatedToDo)

},[serachText , toDo])

  return (
    <div>
        <input type='search' placeholder='Search Tasks...'  className= {style["todo-search-input"]} onChange={(e) => setSearchText(e.target.value)} value={serachText}/>
        {toDo.map((todo , i) => {
            return (
                <div className={style["todo-item"]} key={i}>
                    <h1 className={style["todo-title"]}>{todo.title}</h1>
                    <div>
                        <input type='checkbox' checked = {toDo[i].isCompleted} onChange={()=> handleCheckbox(i)}
                        className={style["todo-checkbox"]} />
                        <span style={{ marginLeft: "16px", cursor: "pointer", color: "#8f6ed5" }}>
                            <FontAwesomeIcon icon={faEdit}/>
                        </span>
                        <span style={{ marginLeft: "12px", cursor: "pointer", color: "#ff6a88" }}>
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