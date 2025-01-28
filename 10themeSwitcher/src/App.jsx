import { useEffect, useState } from 'react'
import './App.css'
import { ThemeProvider } from './contexts/theme'
import ThemeBtn from './Components/ThemeBtn'
import Card from './Components/Card'



function App() {
  const [themeMode, setThemeMode] = useState("light");

  const darkTheme = () => {
      setThemeMode("dark");
  }
  const lightTheme = () => {
    setThemeMode("light");
  }

  useEffect(() => {
    document.querySelector('html').classList.remove("light", "dark")
    document.querySelector('html').classList.add(themeMode)
  }, [themeMode])

  return (
    <ThemeProvider value={{themeMode, darkTheme, lightTheme}}>
    <div className='flex flex-wrap min-h-screen itmes-cener'>
      <div className='w-full'>
        <div className='w-full max-w-sm m-auto flex justify-end mb-4'>
             <ThemeBtn/>
        </div>
        <div className='w-full max-w-sm m-auto'>
             <Card/>
        </div>
      </div>
    </div>
    </ThemeProvider>
  )
}

export default App
