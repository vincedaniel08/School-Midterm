import React, { useState } from "react";
import { Box } from "@mui/system";
import {
  Pagination,
  Grid,
  Paper,
  ButtonBase,
  Typography,
  Rating,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import exampleimage from "../assets/image/loginBg.jpg";
import style from "../style/studentEvaluation";

const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
});

export default function StudentEvaluation() {
  const [value] = useState(2);
  return (
    <Box>
      <Box sx={{ width: "100%", }}>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          rowSpacing={4}
          spacing={6}
          sx={{ my: 1 }}
        >
          <Grid item>
            <Paper sx={style.paper}>
              <Grid container spacing={2} >
                <Grid
                  item
                  xs
                  container
                  sx={{ border: 1, width: "100%", }}
                  direction="column"
                  alignItems="center"
                  justifyContent="center"
                >
                  <ButtonBase sx={{ width: 70, height: 70 }}>
                    <Img
                      alt="complex"
                      src={exampleimage}
                      sx={{ borderRadius: 1 }}
                    />
                  </ButtonBase>
                  <Rating value={value} readOnly sx={style.rating} />
                  <Box sx={style.boxLeftProfile}>
                    <Typography sx={style.leftProfileValue}>3.0</Typography>
                    <Typography sx={style.leftProfileTypography}>
                      Overall Rating
                    </Typography>
                    <Typography sx={style.leftProfileTypography}>
                      2000
                    </Typography>
                    <Typography sx={style.leftProfileTypography}>
                      Reviews
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={12}  sm container  >
                <Grid item xs container direction="column" spacing={10}>
                    <Grid item xs>
                      <Typography variant="body2" gutterBottom>
                        Gender:
                      </Typography>
                      <Typography variant="body2" gutterBottom>
                        Birthday:
                      </Typography>
                      <Typography variant="body2" gutterBottom>
                        Address
                      </Typography>
                      <Typography variant="body2" gutterBottom>
                        Nickname:
                      </Typography>
                      <Typography variant="body2" gutterBottom>
                        Skills/Language:
                      </Typography>
                    </Grid>
                  </Grid>
                  
                  <Grid item xs container direction="column" spacing={1} sx={{width:500,textAlign:{xs:"center",md:"right"},alignItems: "center"}}>
                    <Grid item xs >
                      <Typography variant="body2" gutterBottom  sx={{fontSize:{xs:15,md:14}}}>
                        Male
                      </Typography>
                      <Typography  variant="body2" gutterBottom sx={{fontSize:{xs:14,md:14}}}>
                        08-08-200
                      </Typography>
                      <Typography  variant="body2" gutterBottom sx={{fontSize:{xs:12.5,md:14}}}>
                        Bustos, Bulacan
                      </Typography>
                      <Typography  variant="body2" gutterBottom sx={{fontSize:{xs:14,md:14}}}>
                        Bit
                      </Typography>
                      <Typography  variant="body2" gutterBottom sx={{fontSize:{xs:13,md:14}}}>
                        Javascript, Python
                      </Typography>
                    </Grid>
                  </Grid>

                  <Grid item xs container direction="column" spacing={2} sx={{textAlign:"left",alignItems: "center"}}>
                    <Grid item xs >
                      <Typography variant="body2" gutterBottom >
                        TeamWork:
                      </Typography>
                      <Typography  variant="body2" gutterBottom>
                        Creativity:
                      </Typography>
                      <Typography  variant="body2" gutterBottom>
                        Adaptability:
                      </Typography>
                      <Typography  variant="body2" gutterBottom>
                        Leadership:
                      </Typography>
                      <Typography  variant="body2" gutterBottom>
                        Persuasion:
                      </Typography>
                    </Grid>
                  </Grid>
                  
                  <Grid item xs container direction="column" spacing={1} sx={{textAlign:"center",alignItems: "left",justifyContent: "left",maxWidth:50,}}>
                  <Grid item xs >
                      <Box sx={style.boxRightScore}><Typography color="textPrimary" variant="caption">5.0</Typography></Box>
                      <Box sx={style.boxRightScore}><Typography color="textPrimary" variant="caption">4.9</Typography></Box>
                      <Box sx={style.boxRightScore}><Typography color="textPrimary" variant="caption">5.0</Typography></Box>
                      <Box sx={style.boxRightScore}><Typography color="textPrimary" variant="caption">4.9</Typography></Box>
                      <Box sx={style.boxRightScore}><Typography color="textPrimary" variant="caption">5.0</Typography></Box>

                  </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Box>
      <Pagination
        count={10}
        sx={{ display: "flex", justifyContent: "center", my: 3 }}
      />
    </Box>
  );
}
