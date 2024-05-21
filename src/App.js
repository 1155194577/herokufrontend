import React from 'react'
import Database from './Database'
import { QueryClient, QueryClientProvider } from 'react-query'
import Loginpage from './Loginpage'

//init the client 
const queryClent = new QueryClient()


function App() {
  return (
    <QueryClientProvider client={queryClent}>
    <Loginpage/>
    <Database/>

    </QueryClientProvider>
  )
}

export default App
