import { createSlice, nanoid } from "@reduxjs/toolkit"; // ye dono methods hai

const initialState = { // ye initialstate data store karne ke liye banaya gaya hai
    /* todos name ki state hai*/
    todos : [      
        { id : 1,
          text : "hello world",
        }
    ] 
}

export const todoSlice = createSlice({  // createSlice method hai
    name : "todo",  // slices ke name hote hai jo ek property hai aur redux toolkit me bhi hai
    initialState,  // her slice ka initialstate hota hai 
    reducers : {  // reducers ke liye hi hamne store.js banaya hai. isme property aur function aate hai
    
        /* ye syntaxt hai.
         yaha jo state hai vo current situation batata hai 
         action hame bane hue state ki value la ker deta hai*/
    
        addTodo : (state, action) => {
            const todo = {
                id : nanoid(), // nanoid() : ye method uniqe id deti hai
                text : action.payload,  // payload ek object hai 
            }
            state.todos.push(todo);  
        },   

        removeTodo : (state, action) => {
            state.todos = state.todos.filters((todo) => todo.id !== action.payload )
        }
    }, 
})

export const {addTodo, removeTodo } = todoSlice.actions

//reducers ko export karna jaruri hai kyunki ye components me use honge
export default todoSlice.reducer 