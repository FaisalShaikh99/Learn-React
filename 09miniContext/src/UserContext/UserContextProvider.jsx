import React from 'react'
import UserContext from './UserContext'

/* yaha children ek jeneric name hai aur ek prop hai
  jo components ko render karne ke liye use hota hai 
  yaha login aur profile components ko render karne me use kiya gaya hai*/
const UserContextProvider = ({children}) => {
  const [user, setUser] = React.useState(null)

  return (
      <UserContext.Provider value={{user, setUser}}>
       {children}
      </UserContext.Provider>
  )
}

export default UserContextProvider
