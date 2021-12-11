import { Box, Typography } from '@mui/material'
import React from 'react'
import Header from './Header'
export default function Blog() {
    return (
        <Box>
            <Header/>
            <Typography variant="h1" sx={{color:"white", textAlign:"center", mt:10}}>Blog</Typography>
        </Box>
    )
}
