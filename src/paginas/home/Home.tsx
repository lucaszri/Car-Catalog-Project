import { Button } from '@material-ui/core'
import { Box } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import "./Home.css"
import TabPostagem from '../../components/postagem/tabpostagem/TabPostagem';

function Home() {
  return (
    <>
    <Box className="container">
      <Box className="container-txtbtn">
        <Box className="txt">
          <h2> Find and add cars in the world's best catalog</h2>
        </Box>
        <Box className="btn">
        <Link to='/carros' className='text-decoration-none'>
          <Button className='btn-home'>  all cars   </Button>
        </Link>
        </Box>
      </Box>
     </Box>
     <Box className="tablista">
     <TabPostagem />
     </Box>
     </>
  )
}

export default Home