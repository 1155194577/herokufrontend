import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useMutation } from 'react-query'
import { Button, TextField } from '@mui/material'
const post = (url,mutation,data) => {
    console.log(url)
    mutation.mutate(data)
    console.log(mutation)
    if (mutation.isSuccess) { 
    console.log("Successfully posted data to server: ",mutation.variables)
    console.log("Response from the server: ",mutation.data.data)}
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

        useEffect(
            ()=>{
                console.log({"username":Username,"password":Password})
            },[Username,Password]
        )

          return( <div> 
            <TextField variant="outlined" label="Username" type="email" onChange={(e)=>{SetUsername(e.target.value)}}/>
            <TextField  variant="outlined" label="Password" type="email" onChange={(e)=>{SetPassword(e.target.value)}} />
            <Button variant="contained" onClick={()=>{post(url,mutation,{"username":Username,"password":Password})}}>test</Button>
        </div>
    )
        }
    



export default Loginpage