import React from 'react'
import { AppBar,Toolbar,Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'
function Navbar() {
    const navigate = useNavigate(); 
  return (
  <AppBar position="fixed" color="primary">
            <Toolbar className='navbar'>
            <Typography variant="h6" onClick={()=>{navigate('/database')}}>
               database
              </Typography>

              <Typography variant="h6" onClick={()=>{navigate('/')}}>
                Login 
              </Typography>
            </Toolbar>
          </AppBar>
  )}


export default Navbar
