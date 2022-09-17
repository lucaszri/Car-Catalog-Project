import { Box, Button } from '@material-ui/core'
import React from 'react'
import "./Home.css"

function Home() {
  return (
    <Box className="container-txtbtn">
      <Box className="txt">
        <h2> Find and add cars in the world's best catalog</h2>
      </Box>
      <Box className="btn">
        <Button className='btn-home'> <span> find... </span>  </Button>
        <Button className='btn-home'> <span> add...  </span> </Button>
      </Box>
    </Box>
  )
}

export default Home