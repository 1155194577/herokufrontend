import React from 'react'
import { UserContext } from './App'
import { useContext } from 'react'

function Protected() {
    //const [IsLoggedin,SetIsLoggedin] = useContext(UserContext); 
    console.log("te",useContext(UserContext))
   // console.log(IsLoggedin)
  
   return ( <div>
      ProtectedRoute
    </div>)
 
}

export default  Protected