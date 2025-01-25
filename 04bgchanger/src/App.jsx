import { useState } from 'react'


function App() {
  const [Color, setColor] = useState('white')

  return (
    <div className='w-full h-screen duration-200'
    style={{backgroundColor : Color}}
     >
     <div className='fixed flex flex-wrap top-10 justify-center inset-x-0'>
      <div className='fixed flex-wrap justify-center px-3 py-2  shadow-xl bg-white gap-3
        rounded-xl' >

        <button onClick={() => setColor("Green")} className='px-2 py-1 rounded-full text-white shadow-lg m-2'
        style={{backgroundColor: "green" }}>Green</button>
         <button onClick={() => setColor("Red")} className='px-2 py-1 rounded-full text-white shadow-lg m-2'
        style={{backgroundColor: "Red" }}>Red</button>
         <button onClick={() => setColor("Blue")} className='px-2 py-1 rounded-full text-white shadow-lg m-2'
        style={{backgroundColor: "Blue" }}>Blue</button>
         <button onClick={() => setColor("Black")} className='px-2 py-1 rounded-full text-white shadow-lg m-2'
        style={{backgroundColor: "Black" }}>Black</button>
         <button onClick={() => setColor("Yellow")} className='px-2 py-1 rounded-full text-black shadow-lg m-2'
        style={{backgroundColor: "Yellow" }}>Yellow</button>
         <button onClick={() => setColor("Brown")} className='px-2 py-1 rounded-full text-white shadow-lg m-2'
        style={{backgroundColor: "brown" }}>Brown</button>
         <button onClick={() => setColor("Pink")} className='px-2 py-1 rounded-full text-white shadow-lg'
        style={{backgroundColor: "Pink" }}>Pink</button>
        
       </div>
     </div>
    </div>
  )
}

export default App
