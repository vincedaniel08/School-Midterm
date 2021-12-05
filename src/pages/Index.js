import React from 'react'
import Header from '../components/Header'
import StudentList from '../components/StudentList'
import Footer from '../components/Footer'
import {Helmet} from "react-helmet";
import { Box } from '@mui/system'


export default function Index() {
   

    return (
        <Box sx={{backgroundColor:"white" }}>
             <Helmet>
                <title>Student List</title>
                <meta
                  name="All Students"
                  content="Vince Daniel De Leon, Bryce Ganotice, Harold Dimson, Ronnie Bagonas, Nico Mapoy"
                />
                
            </Helmet>
            <Header />

           <StudentList /> 


            <Footer />
        </Box>
    )
}
