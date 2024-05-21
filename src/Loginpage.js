import axios from 'axios'
import React, { useEffect } from 'react'
import { useMutation } from 'react-query'


 function Loginpage() {
        const url = "https://backendapp-431f65cc5d32.herokuapp.com/post"   
        const mutation = useMutation((newPost)=>axios.post(url,newPost))
        const post = () => {
            console.log(url)
           mutation.mutate({"test":"vdsdsds"})
            console.log("Post successful : ",mutation.data.data["PostSuccessful"])
        }
       
        

          return <div onClick={post}>test</div>
        }
    



export default Loginpage