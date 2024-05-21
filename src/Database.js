import React from 'react'
import { useQuery } from 'react-query'
import Error from './error';
function Database() {
    // Fetcher function
    const fetchapi = async() => {
        const api = "https://backendapp-431f65cc5d32.herokuapp.com/api"
        const res = await fetch(api)
        return res.json()
    };
    //Use the hook 
    const {data,error,isLoading} = useQuery('default message',fetchapi) 

    //error and loading state handling
    if (error) return <Error/>
    if(isLoading) return <div>Loading....</div>

    //show database if everything work smoothly
    console.log(data)
  return (
    <div>
     testing
    </div>
  )
}

export default Database
