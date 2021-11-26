import React from "react";
import {
  Grid,
  Box,
  Paper,
  Typography,
  ButtonBase,
  Rating,
  Select,
  FormControl,
  MenuItem,
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
  const [sort, setSort] = React.useState(10);
  const [filter, setFilter] = React.useState(10);
  const [value] = React.useState(2);
  const handleChangeSort = (event) => {
    setSort(event.target.value);
  };
  const handleChangeFilter = (event) => {
    setFilter(event.target.value);
  };
  return (
    <Box sx={style.box}>
      <Box sx={{ ml: 2, mt: 5 }}>
        <Typography color="textPrimary">Top Students </Typography>
      </Box>
      <Box sx={{ width: '100%' }}>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"

        rowSpacing={4} 
        spacing={6}
        sx={{ my: 1 }}
      >
        <Grid item >
          <Paper sx={style.paper}>
            <Grid container spacing={2}>
              <Grid item>
                <ButtonBase sx={{ width: 50, height: 50 }}>
                  <Img alt="complex" src={exampleimage} />
                </ButtonBase>
              </Grid>
              <Grid item xs={5} sm container>
                <Grid item xs container direction="column" spacing={2}>
                  <Grid item xs>
                    <Typography variant="subtitle1" component="div">
                      Nickname
                    </Typography>

                    <Typography variant="body2" color="text.secondary">
                      30 reviews
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography component="legend"></Typography>
                    <Rating value={value} readOnly sx={style.rating} />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </Grid>

        <Grid item>
          <Paper sx={{ p: 2, margin: "auto", maxWidth: 500, flexGrow: 1 }}>
            <Grid container spacing={2}>
              <Grid item>
                <ButtonBase sx={{ width: 50, height: 50 }}>
                  <Img
                    alt="complex"
                    src={exampleimage}
                    sx={{ maxWidth: 50, maxHeight: 50 }}
                  />
                </ButtonBase>
              </Grid>
              <Grid item xs={5} sm container>
                <Grid item xs container direction="column" spacing={2}>
                  <Grid item xs>
                    <Typography variant="subtitle1" component="div">
                      Nickname
                    </Typography>

                    <Typography variant="body2" color="text.secondary">
                      30 reviews
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography component="legend"></Typography>
                    <Rating
                      value={value}
                      readOnly
                      sx={{ fontSize: 20, mr: 3 }}
                    />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </Grid>

        <Grid item>
          <Paper sx={{ p: 2, margin: "auto", maxWidth: 500, flexGrow: 1 }}>
            <Grid container spacing={2}>
              <Grid item>
                <ButtonBase sx={{ width: 50, height: 50 }}>
                  <Img
                    alt="complex"
                    src={exampleimage}
                    sx={{ maxWidth: 50, maxHeight: 50 }}
                  />
                </ButtonBase>
              </Grid>
              <Grid item xs={5} sm container>
                <Grid item xs container direction="column" spacing={2}>
                  <Grid item xs>
                    <Typography variant="subtitle1" component="div">
                      Nickname
                    </Typography>

                    <Typography variant="body2" color="text.secondary">
                      30 reviews
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography component="legend"></Typography>
                    <Rating
                      value={value}
                      readOnly
                      sx={{ fontSize: 20, mr: 3 }}
                    />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item>
          <Paper sx={{ p: 2, margin: "auto", maxWidth: 500, flexGrow: 1 }}>
            <Grid container spacing={2}>
              <Grid item>
                <ButtonBase sx={{ width: 50, height: 50 }}>
                  <Img
                    alt="complex"
                    src={exampleimage}
                    sx={{ maxWidth: 50, maxHeight: 50 }}
                  />
                </ButtonBase>
              </Grid>
              <Grid item xs={5} sm container>
                <Grid item xs container direction="column" spacing={2}>
                  <Grid item xs>
                    <Typography variant="subtitle1" component="div">
                      Nickname
                    </Typography>

                    <Typography variant="body2" color="text.secondary">
                      30 reviews
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography component="legend"></Typography>
                    <Rating
                      value={value}
                      readOnly
                      sx={{ fontSize: 20, mr: 3 }}
                    />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        
      </Grid>
      </Box>
      <Box sx={style.boxFilter}>
          <Typography color="textPrimary" sx={style.boxFilterTypog}>Sort by:</Typography>
        <FormControl sx={style.formcontrol}>
          <Select
            value={sort}
            onChange={handleChangeSort}
            displayEmpty
            size="small"
            sx={style.select}
            inputProps={{ "aria-label": "Without label" }}
          >
            <MenuItem value=""></MenuItem>
            <MenuItem value={10}>Most Recent</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>

        <Typography color="textPrimary" sx={style.boxFilterTypog}>Filter:</Typography>
        <FormControl sx={style.formcontrol}>
          <Select
            value={filter}
            onChange={handleChangeFilter}
            displayEmpty
            size="small"
            sx={style.select}
            inputProps={{ "aria-label": "Without label" }}
          >
            <MenuItem value=""></MenuItem>
            <MenuItem value={10}>No Filter</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>

        
      </Box>
    </Box>
  );
}
