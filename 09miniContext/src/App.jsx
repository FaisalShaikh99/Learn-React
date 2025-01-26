import Login from './Components/Login'
import Profile from './Components/Profile'
import UserContextProvider from './UserContext/UserContextProvider'
function App() {
  

  return (
    <UserContextProvider>
      <div style={{marginLeft : "10rem"}}>
      <h1>Mini Context project</h1>
      <Login />
      <Profile />
      </div>
    </UserContextProvider>
  )
}

export default App