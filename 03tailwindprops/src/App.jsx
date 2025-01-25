import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './componenst/card'

function App() {
  const [count, setCount] = useState(0)
  ;

  return ( 
    <>
    <Card username='Faisal' btntext='click me'/>
    <Card username='Faizan' btntext='visit me'/>
    </>
  )
}

export default App
