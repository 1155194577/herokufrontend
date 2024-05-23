import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useMutation } from 'react-query'
import { Button, TextField ,Box} from '@mui/material'
import "./Loginpage.css"
import Navbar from './navbar'
import { orange} from '@mui/material/colors'
const register = (url,mutation,data) => {
    console.log(url)
    mutation.mutate(data)
    console.log(mutation)
    if (mutation.isSuccess) { 
    console.log("Successfully posted data to server: ",mutation.variables)
    console.log("Response from the server: ",mutation.data.data)
        if(mutation.data.data["RegistationSuccessful"]){
                    console.log("successful registration") }
                    else {
                        console.log("Insuccessful registration!")
                        if (mutation.data.data["UserNameExistInDatabase"]) {
                            console.log("Username already exist!")
                        }
                    }
    }
    if (mutation.isLoading) {
        console.log("Isloading...")
    }
    if(mutation.isError) {
        console.error("Registration Error",mutation.error.message || "error occured")
    }
}
 function Register() {
         const url = "https://backendapp-431f65cc5d32.herokuapp.com/register"   
       // const url = "http://localhost:3000/register" // for development
        const mutation = useMutation((newPost)=>axios.post(url,newPost))
        const [Username,SetUsername] = useState(null)
        const [Password,SetPassword] = useState(null)
       // const [IsLoggedin,SetIsLoggedin] = useContext(UserContext); 

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
            <Button variant="contained" onClick={()=>register(url,mutation,{"username":Username,"password":Password})} sx={{color:orange[300]}}>Register</Button>
        </Box>
        </div> ) 
        }
    



export default Register
