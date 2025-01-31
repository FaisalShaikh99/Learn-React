import {createContext, useContext} from 'react'

// createContext ka use context banane ke liye use hota hai yaha per todo ek context hai
export const TodoContext = createContext({
    /* yaha per todos ek default values hai jiski value array me hai
    ex : agle project me theme = "dark" jaha dark ek string me likha gaya hai 
    but hamne uski jaga pr  array ka use kara hai*/
    todos : [
        {
            id        : "1",
            todo      : "Todo msg",
            completed : false,
        },
    ],

    // ye sab function methods define ki gayi hai iski functionality  ham app.jsx me karenge 
    addTodo : (todo) => {},
    editTodo : (id, todo) => {},
    deleteTodo : (id) => {},
    toggleComplete : (id) => {},

})

/*useTodo ek function hai jiska use karke ham
  useContext hook ke through TodoContext ka sara data le sakte hai 
  aur ye sara data access karne ke liye usTodo function ka use kar sakte hai */
export const  useTodo = () => {
    return useContext(TodoContext);
}


/* TodoContext.Provider ko TodoContextProvider ke name se use karne ke liye  */
export const TodoContextProvider = TodoContext.Provider