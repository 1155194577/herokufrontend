import React from 'react'
import Database from './Database'
import { QueryClient, QueryClientProvider } from 'react-query'
import Loginpage from './Loginpage'

//init the client 


function App() {
  return (
    <div> 
    <Loginpage/>
    <Database/>
    </div>
  )
}

export default App
