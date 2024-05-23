import React, { createContext, useState } from 'react'
import Loginpage from './Loginpage'
import { Navigate } from 'react-router-dom'
//init the client 

export const UserContext = createContext()
function App() {
  const [IsLoggedin,SetIsLoggedin] = useState(false)
  return (
    <UserContext.Provider value = {[IsLoggedin,SetIsLoggedin]}>
     {IsLoggedin ? <Navigate replace to="/protected"/> :  <Loginpage/> } 
    </UserContext.Provider>
  )
}

export default App