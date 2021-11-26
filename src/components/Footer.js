import React from 'react'
import { Box } from '@mui/system'
import { Paper, Typography,Divider } from '@mui/material';
import { styled } from "@mui/material/styles";
import style from "../style/footer";
import tweet from "../assets/image/Vectortweet.png"

const Img = styled("img")({
    margin: 10,
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
  });

  
export default function Footer() {
    return (
        <Paper sx={style.root}>
           
            <Box sx={{display:"flex",justifyContent:"center"}}>
            <Img src={tweet} alt= "tweet"/>
            <Img src={tweet} alt= "tweet"/>
            <Img src={tweet} alt= "tweet"/>
            </Box>
            <Box sx={{display:"flex",justifyContent:"center"}}>
                <Typography sx={{my:2}}>Contact us:</Typography>
                <Typography  sx={{my:2}}> support@studentreview.com</Typography>
        
            </Box>
                <Typography sx={{textAlign:"center"}}>© 2021 Student Review. All Rights Reserved.</Typography>
                <Box sx={{display:"flex",justifyContent:"center"}}>
                <Typography  sx={{my:2}}>Terms of Service</Typography>
                <Divider sx={{mx:2, my:2}} orientation="vertical" flexItem/>
                <Typography  sx={{my:2}}>Privacy Policy</Typography>
        
            </Box>
     
        </Paper>
            
       
    )
}
