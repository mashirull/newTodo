import { createSlice } from "@reduxjs/toolkit";


const todoSlise =  createSlice({
    name : "todo",
    initialState :[{
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
    }],
    reducers :{
        addTodo : (state , action) => {
            const newTodoTitle = action.payload.title
            const newId =  state.length? state[state.length - 1].id +1 : 1
            state.push({
                id : newId,
                title : newTodoTitle,
                isCompleted : false
            })
        }
    }
})

export const {addTodo} = todoSlise.actions
export default todoSlise.reducer