import React from 'react'
import { Box } from '@mui/system'
import { Paper, Typography,Divider } from '@mui/material';
import { styled } from "@mui/material/styles";
import style from "../style/footer";
import tweet from "../assets/image/Vectortweet.png"
import fb from '../assets/image/Facebook.png';
import disc from '../assets/image/Vector.png';

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
            <Img src={disc} alt= "tweet"/>
            <Img src={fb} alt= "tweet"/>
            </Box>
            <Box sx={{display:"flex",justifyContent:"center"}}>
                <Typography sx={{my:2, color: '#62666D'}}>Contact us:</Typography>
                <Typography  sx={{my:2, color: '#26CE8D',}}> support@studentreview.com</Typography>
        
            </Box>
                <Typography sx={{textAlign:"center", color: '#62666D',}}>© 2021 Student Review. All Rights Reserved.</Typography>
                <Box sx={{display:"flex",justifyContent:"center"}}>
                <Typography  sx={{my:2, color: '#26CE8D'}}>Terms of Service</Typography>
                <Divider sx={{mx:2, my:2}} orientation="vertical" flexItem/>
                <Typography  sx={{my:2, color: '#26CE8D'}}>Privacy Policy</Typography>
        
            </Box>
     
        </Paper>
            
       
    )
}
