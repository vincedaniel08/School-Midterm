import { Box, Typography } from '@mui/material'
import React from 'react'
import Header from './Header'
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import { Helmet } from "react-helmet";



export default function NotFound() {
    return (
        <Box>
               <Helmet>
                <title>Not Found</title>
                <meta
                  name="Page not found"
                  content="Vince Daniel De Leon, Bryce Ganotice, Harold Dimson, Ronnie Bagonas, Nico Mapoy"
                />
                
            </Helmet>
            <Header/>
            <Box sx={{display:"flex",flexDirection:"column", alignItems:"center",justifyContent:"center", alignContent:"center", mt:10}}>
            <SentimentVeryDissatisfiedIcon sx={{color:"white", fontSize:200}}/>
            <Typography variant="h1" sx={{color:"white", textAlign:"center", mt:5}}>404 </Typography>
            <Typography variant="h2" sx={{color:"white", textAlign:"center"}}>Page not Found</Typography>
            </Box>
        </Box>
    )
}
