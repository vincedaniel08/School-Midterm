import React from 'react'
import Header from '../components/Header'
import StudentList from '../components/StudentList'
import Footer from '../components/Footer'

import { Box } from '@mui/system'


export default function Index() {
   

    return (
        <Box sx={{backgroundColor:"white" }}>
            <Header />

           <StudentList /> 


            <Footer />
        </Box>
    )
}
