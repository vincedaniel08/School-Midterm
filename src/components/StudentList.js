import React from "react";
import StarIcon from "@mui/icons-material/Star";
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
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Pagination,
  Avatar,
} from "@mui/material";

import { styled } from "@mui/material/styles";
import exampleimage from "../assets/image/loginBg.jpg";
import style from "../style/studentList";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
});

export default function StudentList() {
  const history = useHistory();
  const state = useSelector((state) => state.user);
  const [sort, setSort] = React.useState(10);
  const [filter, setFilter] = React.useState(10);
  const handleChangeSort = (event) => {
    setSort(event.target.value);
  };
  const handleChangeFilter = (event) => {
    setFilter(event.target.value);
  };

  const handleProductDetail = (id) => {
    console.log(id);

    history.push(`/studentevaluation?student=${id}`);
  };

  return (
    <Box sx={style.box}>
      <Box sx={{ width: "100%" }}>
        <Typography
          color="textPrimary"
          sx={{ mt: 5, mx: 2, color: "#D1D4C9", fontSize: "18px" }}
        >
          Top Students{" "}
        </Typography>

        <Grid
          container
          direction="row"
          justifyContent="left"
          alignItems="center"
          justify="space-between"
          rowSpacing={4}
          columnSpacing={0}
          spacing={2}
          sx={{ my: 1 }}
        >
          {state.students.map((student) => (
            <Paper sx={style.paper}>
              <Grid container spacing={2}>
                <Grid item>
                  <ButtonBase sx={{ width: 50, height: 50 }}>
                    <Avatar></Avatar>
                  </ButtonBase>
                </Grid>
                <Grid item xs={5} sm container>
                  <Grid item xs container direction="column" spacing={2}>
                    <Grid item>
                      <Typography
                        variant="subtitle1"
                        component="div"
                        sx={style.cardname}
                        noWrap
                      >
                        {student.Name}
                      </Typography>

                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={style.cardreview}
                      >
                        {student.OverallRatingFive +
                          student.OverallRatingFour +
                          student.OverallRatingThree +
                          student.OverallRatingTwo +
                          student.OverallRatingOne}{" "}
                        reviews
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography component="legend"></Typography>
                      <Rating
                        value={ (5 * student.OverallRatingFive +
                          4 * student.OverallRatingFour +
                          3 * student.OverallRatingThree +
                          2 * student.OverallRatingTwo +
                          1 * student.OverallRatingOne) /
                        (
                          student.OverallRatingFive +
                          student.OverallRatingFour +
                          student.OverallRatingThree +
                          student.OverallRatingTwo +
                          student.OverallRatingOne
                        ).toFixed(1)}
                        readOnly
                        sx={style.rating}
                        emptyIcon={
                          <StarIcon
                            style={{ opacity: 0.55 }}
                            fontSize="inherit"
                          />
                        }
                      />
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Paper>
          ))}
        </Grid>
      </Box>
      <Box sx={style.boxFilter}>
        <Typography color="textPrimary" sx={style.boxFilterTypog}>
          Sort by:
        </Typography>
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

        <Typography color="textPrimary" sx={style.boxFilterTypog}>
          Filter:
        </Typography>
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
      <Box>
        <List
          sx={{ width: "100%", maxWidth: "100%", bgcolor: "background.paper" }}
          component="nav"
          aria-labelledby="nested-list-subheader"
        >
          <ListItem>
            <Box sx={{ flexGrow: { xs: 30, sm: 15, md: 10, lg: 3 } }} />
            <ListItemText
              primary="Year & Section"
              sx={{ textAlign: "center", ml: 10 }}
              primaryTypographyProps={{
                fontSize: {
                  xs: 10,
                  sm: 12,
                  md: 14,
                },
                fontWeight: "medium",
                letterSpacing: 0,
              }}
            />

            <ListItemText
              primary="Review"
              color="textPrimary"
              sx={{
                fontSize: 10,
                textAlign: "center",
                mx: { xs: 2, sm: 4, md: 18 },
              }}
              primaryTypographyProps={{
                fontSize: {
                  xs: 10,
                  sm: 12,
                  md: 14,
                },
                fontWeight: "medium",
                letterSpacing: 0,
              }}
            />

            <ListItemText
              primary="Rating"
              color="textPrimary"
              sx={{
                fontSize: 10,
                textAlign: "center",
                mr: { xs: 2, sm: 1, md: 1 },
              }}
              primaryTypographyProps={{
                fontSize: {
                  xs: 10,
                  sm: 12,
                  md: 14,
                },
                fontWeight: "medium",
                letterSpacing: 0,
              }}
            />
          </ListItem>

          {state.students.map((student, index) => (
            <Paper sx={{ my: 1 }}>
              <ListItemButton onClick={() => handleProductDetail(student.id)}>
                <ListItemIcon>
                  <Typography sx={{ fontSize: 10 }}>{index + 1}</Typography>
                </ListItemIcon>

                <ListItemIcon sx={{ height: 30 }}>
                  <Img alt="complex" src={exampleimage} />
                </ListItemIcon>

                <ListItemText
                  primary={student.Name}
                  sx={{ color: "gray" }}
                  primaryTypographyProps={style.listText}
                ></ListItemText>
                <ListItemText
                  primary={student.YearSection}
                  sx={{ color: "gray" }}
                  primaryTypographyProps={style.listText}
                />

                <ListItemText
                  primary={
                    student.OverallRatingFive +
                    student.OverallRatingFour +
                    student.OverallRatingThree +
                    student.OverallRatingTwo +
                    student.OverallRatingOne
                  }
                  color="textPrimary"
                  primaryTypographyProps={style.listText}
                />
                <Rating
                  value={
                    (5 * student.OverallRatingFive +
                      4 * student.OverallRatingFour +
                      3 * student.OverallRatingThree +
                      2 * student.OverallRatingTwo +
                      1 * student.OverallRatingOne) /
                    (
                      student.OverallRatingFive +
                      student.OverallRatingFour +
                      student.OverallRatingThree +
                      student.OverallRatingTwo +
                      student.OverallRatingOne
                    ).toFixed(1)
                  }
                  readOnly
                  sx={style.rating}
                />
              </ListItemButton>
            </Paper>
          ))}
        </List>
      </Box>
      <Pagination
        count={10}
        sx={{ display: "flex", justifyContent: "center", my: 3 }}
      />
    </Box>
  );
}
