import React from 'react'
import style from "../ToDo.module.css"

const AddorDelete = () => {




    
  return (
    <div className= {style["addordelete-container"]}>
        
        <input type="text"  placeholder='Task Name...' className={style["addordelete-input"]}/>
        <button className={style["addordelete-button"]}>Add To List</button>
    </div>
  )
}

export default AddorDelete