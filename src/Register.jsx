//import axios from 'axios'
import React, { useEffect, useState } from 'react'
//import { useMutation } from 'react-query'
import { Button, TextField ,Box} from '@mui/material'
//import { UserContext } from './App'
import "./Loginpage.css"
import Navbar from './navbar'
import { orange} from '@mui/material/colors'
const register = (url) => {
    console.log("Register account, url : ",url) 
}
 function Register() {
        const url = "https://backendapp-431f65cc5d32.herokuapp.com/post"   
       // const url = "http://localhost:3000/post" // for development
      //  const mutation = useMutation((newPost)=>axios.post(url,newPost))
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
            <Button variant="contained" onClick={()=>register(url)} sx={{color:orange[300]}}>Register</Button>
        </Box>
        </div> ) 
        }
    



export default Register
