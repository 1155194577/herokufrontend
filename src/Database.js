import React from 'react'
import { useQuery } from 'react-query'
import Error from './error';
import Navbar from './navbar';
import { Box } from '@mui/material';
import  "./database.css"
import DataTable from './DataTable';
// this component shows all data fetched from heroku server via HTTPS GET method
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
    /* <ul>
        {data.map( 
        (item) =>
        (<li>{item.user_id} || username || {item.user_name} || password :{item.user_password}</li>)
     )}
      </ul>*/
  return (
        
        <Box className="container">
            <Navbar></Navbar>
            <Box className='table'>
            <DataTable DataArr={data}/>
        </Box>
        </Box>
        
       

  )
}

export default Database
