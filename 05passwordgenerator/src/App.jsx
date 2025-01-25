import { useCallback, useState, useEffect, useRef } from 'react'   // => This is hooks



function App() {
  const [lenght, setLength] = useState(10)
  const [numAllowed, setNumAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  const passwordRef = useRef(null)   // yaha useRef ka use password ka referance lene ke liye use kiya hai

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numAllowed) str += "0123456789"
    if(charAllowed) str += "!@#$%^&*(){}~`"

    for(let i=1; i<= lenght; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }
    setPassword(pass)

  },[lenght, numAllowed, charAllowed, setPassword])

  const copypasstoclipboard = useCallback (() => {
     passwordRef.current?.select();
     passwordRef.current?.setSelectionRange(0, 10);
     window.navigator.clipboard.writeText(password)
  },[password])

  useEffect(() => {
    passwordGenerator()
  }, [lenght, numAllowed, charAllowed, passwordGenerator])
  
  return (
    
     <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
      <h1 className='text-white text-center my-3 text-3xl'>Password Generator</h1>
      <div className='flex overflow-hidden mb-4 shadow rounded'>
       <input type="text"
              value={password}
              placeholder='Password'
              readOnly
              className='w-full outline-none px-1 py-3 text-2xl'
              ref={passwordRef}
              />

              <button 
              onClick={copypasstoclipboard}
              className='text-2xl px-3 text-white  shrink-0' style={{backgroundColor : 'blue'}}>Copy
              </button>
              </div> 

        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1 '>
                  <input type="range"
                         value={lenght}
                         min={6}
                         max={100}
                         className='cursor-pointer'
                         onChange={(e) => {setLength(e.target.value)}}   //{/* range increase or decrease */}
                         />  
                         
                   <label> Lenght:{lenght} </label>
        </div > 

        <div className='flex items-center gap-x-1 '>
        <input type="checkBox"
                         value={numAllowed}  
                         defaultChecked={numAllowed} 
                         id='numberInput'                                   
                         onChange={() => {setNumAllowed((prev)=> !prev);   {/* Condition true or false*/}
                         }}
                         /> 
                   <label htmlFor='numberInput'>Numbers</label>
         </div>  

         <div className='flex items-center gap-x-1 '>
        <input type="checkBox"
                         value={charAllowed} 
                         defaultChecked={charAllowed}
                         id='charInput'                                   
                         onChange={() => {setCharAllowed((prev)=> !prev); {/* Condition true or false*/}
                          

                         }}
                         />
                   <label htmlFor='charInput'>Characters</label>
         </div>  


      </div>

     </div>
 
  )
}

export default App
