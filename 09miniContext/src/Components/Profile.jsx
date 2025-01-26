import React from 'react'
import { useContext } from 'react'
import UserContext from '../UserContext/UserContext'

function Profile() {
  /* yaha useContext() ka use data ko lene ke liye use hota hai */
    const {user} = useContext(UserContext)
    
    if (!user) return <div>please login</div>

    return <div>Welcome {user.username}</div>
}

export default Profile