import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useMutation } from 'react-query'
import { Button, TextField ,Box, AppBar, Toolbar, Typography, createTheme} from '@mui/material'
import { UserContext } from './App'
import "./Loginpage.css"
import { red } from '@mui/material/colors'
import Navbar from './navbar'
const post = (url,mutation,data,setisloggedin,IsLoggedin) => {
    console.log(url)
    mutation.mutate(data)
    console.log(mutation)
    if (mutation.isSuccess) { 
    console.log("Successfully posted data to server: ",mutation.variables)
    console.log("Response from the server: ",mutation.data.data)
        if(mutation.data.data["IsCorrectCredential"]){
                    console.log("correct pw!",IsLoggedin)
                    setisloggedin(true)}
                    else {
                        console.log("wrong pw!")
                    }
    }
    if (mutation.isLoading) {
        console.log("Isloading...")
    }
    if(mutation.isError) {
        console.error("Error",mutation.error.message || "error occured")
    }
}


 function Loginpage() {
        const url = "https://backendapp-431f65cc5d32.herokuapp.com/post"   
       // const url = "http://localhost:3000/post" // for development
        const mutation = useMutation((newPost)=>axios.post(url,newPost))
        const [Username,SetUsername] = useState(null)
        const [Password,SetPassword] = useState(null)
        const [IsLoggedin,SetIsLoggedin] = useContext(UserContext); 

        useEffect(
            ()=>{
                console.log({"username":Username,"password":Password})
            },[Username,Password]
        )

          return(<div>
                <Navbar></Navbar>
            
            <Box className='loginbox'> 
            <TextField variant="outlined" label="Username" type="email" onChange={(e)=>{SetUsername(e.target.value)}}/>
            <TextField  variant="outlined" label="Password" type="email" onChange={(e)=>{SetPassword(e.target.value)}} />
            <Button variant="contained" onClick={()=>{post(url,mutation,{"username":Username,"password":Password},SetIsLoggedin,IsLoggedin)}}>Login</Button>
        </Box>
        </div> ) 
        }
    



export default Loginpage