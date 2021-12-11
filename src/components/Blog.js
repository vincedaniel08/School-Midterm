import { Box, Typography } from '@mui/material'
import React from 'react'
import Header from './Header'
import { Helmet } from "react-helmet";

export default function Blog() {
    return (
        <Box>
               <Helmet>
                <title>Blog</title>
                <meta
                  name="Blog Students"
                  content="Vince Daniel De Leon, Bryce Ganotice, Harold Dimson, Ronnie Bagonas, Nico Mapoy"
                />
                
            </Helmet>
            <Header/>
            <Typography variant="h1" sx={{color:"white", textAlign:"center", mt:10}}>Blog</Typography>
        </Box>
    )
}
