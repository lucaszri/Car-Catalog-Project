import { Grid, Typography } from '@material-ui/core'
import { Box } from '@mui/material'
import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <Grid className='container-footer' container direction="row" justifyContent="center" alignItems="center">
      <Grid className='container-footer' alignItems="center" item xs={12}>
        <Box>
          <Box display="flex" alignItems="center" justifyContent="center">
            <Typography >Me siga nas redes sociais </Typography>
          </Box>
          <Box className='icons-footer' display="flex" alignItems="center" justifyContent="center">
            <a href="https://www.instagram.com/lucaszri/" target="_blank">
              <img src="https://media.discordapp.net/attachments/1021794518527397918/1021794600668647424/instagram_1.png" alt="" />
            </a>
            <a href="https://www.linkedin.com/in/lucas-de-souza-benedito-343b85b6/" target="_blank">
              <img src="https://media.discordapp.net/attachments/1021794518527397918/1021794787998838825/linkedin.png" alt="" />
              <a target="_blank" href="https://github.com/lucaszri">
              <img src="https://media.discordapp.net/attachments/1021794518527397918/1021794825349111868/placa-do-github.png" alt="" />
            </a>
            </a>
          </Box>
        </Box>
        <Box className='text-decoration' display="flex" alignItems="center" justifyContent="center">
          <Box>
            <Typography align="center" className='footer-copy'>Copyright © 2022 Lucaszri </Typography> 
          </Box>
        </Box>
      </Grid>
    </Grid>
  )
}

export default Footer