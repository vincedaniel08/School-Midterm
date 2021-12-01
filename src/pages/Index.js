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
                  name="Midterm Group 1"
                  content="Vince Daniel,Bryce Ganotice,Harold Dimson,Nico Mapoy,Ronnie Bagonas "
                />
                
            </Helmet>

            <Header />

           <StudentList /> 


            <Footer />
        </Box>
    )
}
