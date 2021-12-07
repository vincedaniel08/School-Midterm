import React, { useState } from "react";
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
import { toggleTab } from "../redux/actions/uiAction";
import style from "../style/studentList";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import usePagination from "../components/Pagination"

const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
});

export default function StudentList() {
  const history = useHistory();
  const dispatch = useDispatch();
  const state = useSelector((state) => state.user);
  const [sort, setSort] = useState(10);
  const [filter, setFilter] = useState(10);
  const [page, setPage] = useState(1);
  // const [overallRating, setOverallRating] = useState(0);
  const PER_PAGE = 5;
  const _DATA = usePagination(state.students, PER_PAGE);

  const handleChangePagination = (event, newValue) => {
    setPage(newValue);
    _DATA.jump(newValue);
  };
  const handleChangeSort = (event) => {
    setSort(event.target.value);
  };
  const handleChangeFilter = (event) => {
    setFilter(event.target.value);
  };

  const handleProductDetail = (id) => {
    console.log(id);
    dispatch(toggleTab(2));
    history.push(`/studentevaluation?student=${id}`);
  };

  /**  const handleChangeRating = (student) => {
    //rating formula

    //teamwork

    const totalTeamWorkRating =
      student.teamworkFive +
      student.teamworkFour +
      student.teamworkThree +
      student.teamworkTwo +
      student.teamworkOne;

    const teamworkRatingAverage =
      (5 * student.teamworkFive +
        4 * student.teamworkFour +
        3 * student.teamworkThree +
        2 * student.teamworkTwo +
        1 * student.teamworkOne) /
      totalTeamWorkRating;

    //creativity
    const totalCreativityRating =
      student.creativityFive +
      student.creativityFour +
      student.creativityThree +
      student.creativityTwo +
      student.creativityOne;

    const creativityRatingAverage =
      (5 * student.creativityFive +
        4 * student.creativityFour +
        3 * student.creativityThree +
        2 * student.creativityTwo +
        1 * student.creativityOne) /
      totalCreativityRating;

    //adaptability
    const totalAdaptabilityRating =
      student.adaptabilityFive +
      student.adaptabilityFour +
      student.adaptabilityThree +
      student.adaptabilityTwo +
      student.adaptabilityOne;

    const adaptabilityRatingAverage =
      (5 * student.adaptabilityFive +
        4 * student.adaptabilityFour +
        3 * student.adaptabilityThree +
        2 * student.adaptabilityTwo +
        1 * student.adaptabilityOne) /
      totalAdaptabilityRating;

    //leadership
    const totalLeadershipRating =
      student.leadershipFive +
      student.leadershipFour +
      student.leadershipThree +
      student.leadershipTwo +
      student.leadershipOne;

    const leadershipRatingAverage =
      (5 * student.leadershipFive +
        4 * student.leadershipFour +
        3 * student.leadershipThree +
        2 * student.leadershipTwo +
        1 * student.leadershipOne) /
      totalLeadershipRating;

    //persuasion
    const totalPersuasionRating =
      student.persuasionFive +
      student.persuasionFour +
      student.persuasionThree +
      student.persuasionTwo +
      student.persuasionOne;

    const persuasionRatingAverage =
      (5 * student.persuasionFive +
        4 * student.persuasionFour +
        3 * student.persuasionThree +
        2 * student.persuasionTwo +
        1 * student.persuasionOne) /
      totalPersuasionRating;

    const totalOverallRating =
      persuasionRatingAverage +
      leadershipRatingAverage +
      adaptabilityRatingAverage +
      creativityRatingAverage +
      teamworkRatingAverage;

    const overallRatingAverage = totalOverallRating / 5;
   // setOverallRating(overallRatingAverage);
  //};
*/
  return (
    <Box sx={style.boxcon}>
    <Box sx={style.box}>
      <Box sx={{ width: "100%" ,}}>
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
          
          { 
           state.students.slice(0, 4).map((student, index) => {
              return (
                <Paper sx={style.paper} key={index + 1} film={index + 1}>
                  <Grid container spacing={2}>
                    <Grid item>
                      <ButtonBase sx={{ width: 50, height: 50 }}>
                        <Avatar>
                          {" "}
                          <Img alt="complex" src={student.image} />
                        </Avatar>
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
                            {student.studentName}
                          </Typography>

                          <Typography
                            variant="body2"
                            color="text.secondary"
                            sx={style.cardreview}
                          >
                            {student.studentReview} reviews
                          </Typography>
                        </Grid>
                        <Grid item>
                          <Typography component="legend"></Typography>
                          <Rating
                            value={
                              (5 * student.teamworkFive +
                                4 * student.teamworkFour +
                                3 * student.teamworkThree +
                                2 * student.teamworkTwo +
                                1 * student.teamworkOne) /
                              (student.teamworkFive +
                                student.teamworkFour +
                                student.teamworkThree +
                                student.teamworkTwo +
                                student.teamworkOne)
                            }
                            readOnly
                            precision={0.5}
                            sx={style.rating}
                            emptyIcon={
                              <StarIcon
                                style={{ opacity: 0.7, backgtoundColor: '#26CE8D',}}
                                fontSize="inherit"
                              />
                            }
                          />
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Paper>
              );
            })}
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
            size="small"
            sx={style.select}
          >
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
            size="small"
            sx={style.select}
          >
            <MenuItem value={10}>No Filter</MenuItem>
            <MenuItem value={20}>5 Stars</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Box>
        <List
          sx={{ width: "100%", maxWidth: "100%", bgcolor: "#131414",  }}
          component="nav"
          aria-labelledby="nested-list-subheader"
        >
          <ListItem >
            <Box sx={{ flexGrow: { xs: 30, sm: 15, md: 10, lg: 3 },  }} />
            <ListItemText
              primary="Year & Section"
              sx={{ textAlign: "center", ml: 10,  }}
              primaryTypographyProps={{
                fontSize: {
                  xs: 10,
                  sm: 12,
                  md: 14,
                },
                fontWeight: "medium",
                letterSpacing: 0,
                color: '#62666D',
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
                color: '#62666D',
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
                color: '#62666D',
              }}
            />
          </ListItem>

       
           { _DATA.currentData().map((student, index) => {
              return (
                <Paper sx={{ my: 1 , backgroundColor: '#1E1F20', border: '1px solid #303336'}} key={index + 1}>
                  <ListItemButton
                    onClick={() => handleProductDetail(student.studentName)}
                  >
                    <ListItemIcon>
                      <Typography sx={{ fontSize: 10, color: '#62666D' }}>{index + 1}</Typography>
                    </ListItemIcon>

                    <ListItemIcon sx={{ height: 30 }}>
                      <Img alt="complex" src={student.image} />
                    </ListItemIcon>

                    <ListItemText
                      primary={student.studentName}
                      sx={{ color: '#D1D4C9', width: '80px' }}
                      primaryTypographyProps={style.listText}
                    ></ListItemText>
                    <ListItemText
                      primary={student.studentSection}
                      sx={{ color: "#62666D" }}
                      primaryTypographyProps={style.listText}
                    />

                    <ListItemText
                      primary={student.studentReview}
                      sx={{ color: "#D1D4C9", fontSize: '14px' }}
                      primaryTypographyProps={style.listText}
                    />
                    <Rating
                      value={
                        (5 * student.teamworkFive +
                          4 * student.teamworkFour +
                          3 * student.teamworkThree +
                          2 * student.teamworkTwo +
                          1 * student.teamworkOne) /
                        (student.teamworkFive +
                          student.teamworkFour +
                          student.teamworkThree +
                          student.teamworkTwo +
                          student.teamworkOne)
                      }
                      readOnly
                      sx={style.rating}
                      emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                    />
                  </ListItemButton>
                </Paper>
              );
            })}
        </List>
     
      <Pagination
       
        count={Math.ceil(state.students.length / PER_PAGE)}
        page={page}
        onChange={handleChangePagination}
        sx={{ display: "flex", justifyContent: "center", my: 3, "& .MuiPaginationItem-root": {
          color: "#D1D4C9"
        } }}
      />
       </Box>

    </Box>
    </Box>
  );
}
