import React from 'react'
import List from './List/List'
import AddorDelete from './AddorDelete/AddorEdit'
import style from "./ToDo.module.css"

const ToDo = () => {
  return (
    <div className= {style["todo-container"]} >
        <div className={style["todo-list"]}>
            <List/>
        </div>
        <div className= {style["todo-addordelete"]}>
            <h1 className= {style["addordelete-title"]}>Add Your <span style= {{color : '#ff6a88'}}>Task</span> </h1>
            <AddorDelete/>
        </div>
    </div>
  )
}

export default ToDo