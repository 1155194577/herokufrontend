import React from 'react'
import { AppBar,Toolbar,Typography,Box} from '@mui/material'
import { useNavigate } from 'react-router-dom'
import "./Navbar.css"
function Navbar() {
    const navigate = useNavigate(); 
  return (
  <AppBar position="fixed" color="primary">
            <Toolbar className='navbar'>
            <Typography variant="h6" onClick={()=>{navigate('/database')}}>
               Database
              </Typography>

                <Box className='UserBox'>
                <Typography variant="h6" onClick={()=>{navigate('/')}}>
                Login 
              </Typography>
              <Typography variant="h6" onClick={()=>{navigate('/Register')}}>
                Register
              </Typography>
                </Box>
             
            </Toolbar>
          </AppBar>
  )}


export default Navbar
