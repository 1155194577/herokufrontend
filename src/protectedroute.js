import React from 'react'
import { UserContext } from './App'
import { useContext } from 'react';

function Protected() {
  // const [IsLoggedin,SetIsLoggedin] = useContext(UserContext); 
      //  if(!IsLoggedin) {
       //     return (<div>No permission!!</div>)
        //}
        console.log(useContext(UserContext))
        
   return ( <div>
      ProtectedRoute
    </div>)
  
}

export default  Protected