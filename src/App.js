import React from 'react'
import Database from './Database'
import { QueryClient, QueryClientProvider } from 'react-query'

//init the client 
const queryClent = new QueryClient()


function App() {
  return (
    <QueryClientProvider client={queryClent}>

    <Database/>

    </QueryClientProvider>
  )
}

export default App
