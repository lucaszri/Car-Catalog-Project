import { Box, Button, Card, CardActions, CardContent, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Car from '../../../models/Car'
import Cars from '../../../models/Cars'
import { busca } from '../../../services/Service'
import './ListaPost.css'


function ListaPost() {

  const [posts, setPosts] = useState<Cars[]>([])

  async function getPost() {
    await busca("/cars", setPosts)
  }

  useEffect(() => {

    getPost()

  }, [posts.length])

  return (
    <>

    {posts.map((post) => (

      <Box m={2} display="inline-block" justifyContent="center">

        <Card variant="outlined" className='cardProd'>

          <div className='cardProduct'>

            <Box display="flex" justifyContent="center">
              <img className='img-card-size' src="https://cdn.discordapp.com/attachments/1021794518527397918/1021856133234835589/volante.png" alt="Img"/>
            </Box>

            <div className='cardProductInfo'>

              <Typography variant="h5" component="h2" className='Nome'>
                {post.title}
              </Typography>
              <Typography variant="body2" component="p" className='InfCard'>
                Marca {post.brand}
              </Typography>
              <Typography variant="body2" component="p" className='InfCard'>
                Ano {post.age}
              </Typography>
              <Typography variant="body2" component="p" className='InfCard'>
                 R$ {post.price}
              </Typography>

            </div>

           


          </div>


        </Card>

      </Box>

    ))}

  </>
  )
}

export default ListaPost