import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [count, setCount] = useState(0)
  
   const  addvalue = () => {
     
     if(count < 20){
      count = count + 1 
      setCount(count)
     }
   }

   const  removevalue = () => {
    
    if(count > 0){
      count = count - 1 
      setCount(count)
     }
   
   
  }
   
  const reset = () => {
    count = 0
    setCount(count)
  }
  
  return (
    <>
      <h1>Counter</h1>
      <h2>Value : {count}</h2>

      <button onClick={addvalue}>+</button>
      <br />
      <button onClick={removevalue}>- </button>
      <br />
      <button onClick={reset}>Reset</button>
    </>
  )
}

export default App
