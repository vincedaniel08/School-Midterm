import React from 'react'
import { Box } from '@mui/system'
import { Pagination, } from '@mui/material'
export default function StudentEvaluation() {
    return (
        <Box>
            Student Evaluation
            <Pagination count={10} sx={{display:"flex",justifyContent:"center",my:3,}}/>
        </Box>
    )
}
