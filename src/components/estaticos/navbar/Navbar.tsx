import { Grid, Paper, Typography } from '@material-ui/core'
import { Box } from '@mui/material'
import React from 'react'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import "./Navbar.css"
import { Link } from 'react-router-dom';


function Navbar() {

  return (
    <Box className='texto-container'>
      <Link to='/' className='text-decoration-none'>
      <Box className='texto'>
        <h4> carstalog</h4>
      </Box>
    </Link>
    </Box>
   
  );
}
    


export default Navbar

