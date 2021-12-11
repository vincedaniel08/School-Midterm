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
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import usePagination from "../components/Pagination";

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
  const [filter, setFilter] = useState(6);
  const [page, setPage] = useState(1);
  const studentSort = state.students.sort(
    (a, b) =>
      (5 * b.teamworkFive +
        4 * b.teamworkFour +
        3 * b.teamworkThree +
        2 * b.teamworkTwo +
        1 * b.teamworkOne +
        5 * b.creativityFive +
        4 * b.creativityFour +
        3 * b.creativityThree +
        2 * b.creativityTwo +
        1 * b.creativityOne +
        5 * b.adaptabilityFive +
        4 * b.adaptabilityFour +
        3 * b.adaptabilityThree +
        2 * b.adaptabilityTwo +
        1 * b.adaptabilityOne +
        5 * b.leadershipFive +
        4 * b.leadershipFour +
        3 * b.leadershipThree +
        2 * b.leadershipTwo +
        1 * b.leadershipOne +
        5 * b.leadershipFive +
        4 * b.persuasionFour +
        3 * b.persuasionThree +
        2 * b.persuasionTwo +
        1 * b.persuasionOne) /
        25 -
      (5 * a.teamworkFive +
        4 * a.teamworkFour +
        3 * a.teamworkThree +
        2 * a.teamworkTwo +
        1 * a.teamworkOne +
        5 * a.creativityFive +
        4 * a.creativityFour +
        3 * a.creativityThree +
        2 * a.creativityTwo +
        1 * a.creativityOne +
        5 * a.adaptabilityFive +
        4 * a.adaptabilityFour +
        3 * a.adaptabilityThree +
        2 * a.adaptabilityTwo +
        1 * a.adaptabilityOne +
        5 * a.leadershipFive +
        4 * a.leadershipFour +
        3 * a.leadershipThree +
        2 * a.leadershipTwo +
        1 * a.leadershipOne +
        5 * a.leadershipFive +
        4 * a.persuasionFour +
        3 * a.persuasionThree +
        2 * a.persuasionTwo +
        1 * a.persuasionOne) /
        25
  );

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

  return (
    <Box sx={style.boxcon}>
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
            {studentSort.slice(0, 4).map((student, index) => {
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
                                1 * student.teamworkOne +
                                5 * student.creativityFive +
                                4 * student.creativityFour +
                                3 * student.creativityThree +
                                2 * student.creativityTwo +
                                1 * student.creativityOne +
                                5 * student.adaptabilityFive +
                                4 * student.adaptabilityFour +
                                3 * student.adaptabilityThree +
                                2 * student.adaptabilityTwo +
                                1 * student.adaptabilityOne +
                                5 * student.leadershipFive +
                                4 * student.leadershipFour +
                                3 * student.leadershipThree +
                                2 * student.leadershipTwo +
                                1 * student.leadershipOne +
                                5 * student.persuasionFive +
                                4 * student.persuasionFour +
                                3 * student.persuasionThree +
                                2 * student.persuasionTwo +
                                1 * student.persuasionOne) /
                              (student.teamworkFive +
                                student.teamworkFour +
                                student.teamworkThree +
                                student.teamworkTwo +
                                student.teamworkOne +
                                student.creativityFive +
                                student.creativityFour +
                                student.creativityThree +
                                student.creativityTwo +
                                student.creativityOne +
                                student.adaptabilityFive +
                                student.adaptabilityFour +
                                student.adaptabilityThree +
                                student.adaptabilityTwo +
                                student.adaptabilityOne +
                                student.leadershipFive +
                                student.leadershipFour +
                                student.leadershipThree +
                                student.leadershipTwo +
                                student.leadershipOne +
                                student.persuasionFive +
                                student.persuasionFour +
                                student.persuasionThree +
                                student.persuasionTwo +
                                student.persuasionOne)
                            }
                            readOnly
                            precision={0.5}
                            sx={
                              (5 * student.teamworkFive +
                                4 * student.teamworkFour +
                                3 * student.teamworkThree +
                                2 * student.teamworkTwo +
                                1 * student.teamworkOne +
                                5 * student.creativityFive +
                                4 * student.creativityFour +
                                3 * student.creativityThree +
                                2 * student.creativityTwo +
                                1 * student.creativityOne +
                                5 * student.adaptabilityFive +
                                4 * student.adaptabilityFour +
                                3 * student.adaptabilityThree +
                                2 * student.adaptabilityTwo +
                                1 * student.adaptabilityOne +
                                5 * student.leadershipFive +
                                4 * student.leadershipFour +
                                3 * student.leadershipThree +
                                2 * student.leadershipTwo +
                                1 * student.leadershipOne +
                                5 * student.persuasionFive +
                                4 * student.persuasionFour +
                                3 * student.persuasionThree +
                                2 * student.persuasionTwo +
                                1 * student.persuasionOne) /
                                (student.teamworkFive +
                                  student.teamworkFour +
                                  student.teamworkThree +
                                  student.teamworkTwo +
                                  student.teamworkOne +
                                  student.creativityFive +
                                  student.creativityFour +
                                  student.creativityThree +
                                  student.creativityTwo +
                                  student.creativityOne +
                                  student.adaptabilityFive +
                                  student.adaptabilityFour +
                                  student.adaptabilityThree +
                                  student.adaptabilityTwo +
                                  student.adaptabilityOne +
                                  student.leadershipFive +
                                  student.leadershipFour +
                                  student.leadershipThree +
                                  student.leadershipTwo +
                                  student.leadershipOne +
                                  student.persuasionFive +
                                  student.persuasionFour +
                                  student.persuasionThree +
                                  student.persuasionTwo +
                                  student.persuasionOne) >
                              2
                                ? style.rating
                                : style.ratingRed
                            }
                            emptyIcon={
                              <StarIcon
                                style={{
                                  opacity: 0.7,
                                  backgtoundColor: "#26CE8D",
                                }}
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
              <MenuItem value={6}>No Filter</MenuItem>
              <MenuItem value={5}>5 Stars</MenuItem>
              <MenuItem value={4}>4 Stars</MenuItem>
              <MenuItem value={3}>3 Stars</MenuItem>
              <MenuItem value={2}>2 Stars</MenuItem>
              <MenuItem value={1}>1 Star</MenuItem>
              <MenuItem value={0}>0 Star</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box>
          <List
            sx={{ width: "100%", maxWidth: "100%", bgcolor: "#131414" }}
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
                  color: "#62666D",
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
                  color: "#62666D",
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
                  color: "#62666D",
                }}
              />
            </ListItem>

            {_DATA.currentData().map((student, index) => {
              return (
                <Paper
                  sx={{
                    my: 1,
                    backgroundColor: "#1E1F20",
                    border: "1px solid #303336",
                  }}
                  key={index + 1}
                >
                  <ListItemButton
                    onClick={() => handleProductDetail(student.studentName)}
                  >
                    <ListItemIcon>
                      <Typography sx={{ fontSize: 10, color: "#62666D" }}>
                        {index + 1}
                      </Typography>
                    </ListItemIcon>

                    <ListItemIcon sx={{ height: 30 }}>
                      <Img alt="complex" src={student.image} />
                    </ListItemIcon>

                    <ListItemText
                      primary={student.studentName}
                      sx={{ color: "#D1D4C9", width: "80px" }}
                      primaryTypographyProps={style.listText}
                    ></ListItemText>
                    <ListItemText
                      primary={student.studentSection}
                      sx={{ color: "#62666D" }}
                      primaryTypographyProps={style.listText}
                    />

                    <ListItemText
                      primary={student.studentReview}
                      sx={{ color: "#D1D4C9", fontSize: "14px" }}
                      primaryTypographyProps={style.listText}
                    />
                    <Rating
                      value={
                        (5 * student.teamworkFive +
                          4 * student.teamworkFour +
                          3 * student.teamworkThree +
                          2 * student.teamworkTwo +
                          1 * student.teamworkOne +
                          5 * student.creativityFive +
                          4 * student.creativityFour +
                          3 * student.creativityThree +
                          2 * student.creativityTwo +
                          1 * student.creativityOne +
                          5 * student.adaptabilityFive +
                          4 * student.adaptabilityFour +
                          3 * student.adaptabilityThree +
                          2 * student.adaptabilityTwo +
                          1 * student.adaptabilityOne +
                          5 * student.leadershipFive +
                          4 * student.leadershipFour +
                          3 * student.leadershipThree +
                          2 * student.leadershipTwo +
                          1 * student.leadershipOne +
                          5 * student.persuasionFive +
                          4 * student.persuasionFour +
                          3 * student.persuasionThree +
                          2 * student.persuasionTwo +
                          1 * student.persuasionOne) /
                        (student.teamworkFive +
                          student.teamworkFour +
                          student.teamworkThree +
                          student.teamworkTwo +
                          student.teamworkOne +
                          student.creativityFive +
                          student.creativityFour +
                          student.creativityThree +
                          student.creativityTwo +
                          student.creativityOne +
                          student.adaptabilityFive +
                          student.adaptabilityFour +
                          student.adaptabilityThree +
                          student.adaptabilityTwo +
                          student.adaptabilityOne +
                          student.leadershipFive +
                          student.leadershipFour +
                          student.leadershipThree +
                          student.leadershipTwo +
                          student.leadershipOne +
                          student.persuasionFive +
                          student.persuasionFour +
                          student.persuasionThree +
                          student.persuasionTwo +
                          student.persuasionOne)
                      }
                      readOnly
                      precision={0.5}
                      sx={
                        (5 * student.teamworkFive +
                          4 * student.teamworkFour +
                          3 * student.teamworkThree +
                          2 * student.teamworkTwo +
                          1 * student.teamworkOne +
                          5 * student.creativityFive +
                          4 * student.creativityFour +
                          3 * student.creativityThree +
                          2 * student.creativityTwo +
                          1 * student.creativityOne +
                          5 * student.adaptabilityFive +
                          4 * student.adaptabilityFour +
                          3 * student.adaptabilityThree +
                          2 * student.adaptabilityTwo +
                          1 * student.adaptabilityOne +
                          5 * student.leadershipFive +
                          4 * student.leadershipFour +
                          3 * student.leadershipThree +
                          2 * student.leadershipTwo +
                          1 * student.leadershipOne +
                          5 * student.persuasionFive +
                          4 * student.persuasionFour +
                          3 * student.persuasionThree +
                          2 * student.persuasionTwo +
                          1 * student.persuasionOne) /
                          (student.teamworkFive +
                            student.teamworkFour +
                            student.teamworkThree +
                            student.teamworkTwo +
                            student.teamworkOne +
                            student.creativityFive +
                            student.creativityFour +
                            student.creativityThree +
                            student.creativityTwo +
                            student.creativityOne +
                            student.adaptabilityFive +
                            student.adaptabilityFour +
                            student.adaptabilityThree +
                            student.adaptabilityTwo +
                            student.adaptabilityOne +
                            student.leadershipFive +
                            student.leadershipFour +
                            student.leadershipThree +
                            student.leadershipTwo +
                            student.leadershipOne +
                            student.persuasionFive +
                            student.persuasionFour +
                            student.persuasionThree +
                            student.persuasionTwo +
                            student.persuasionOne) >
                        2
                          ? style.rating
                          : style.ratingRed
                      }
                      emptyIcon={
                        <StarIcon
                          style={{ opacity: 0.55 }}
                          fontSize="inherit"
                        />
                      }
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
            sx={{
              display: "flex",
              justifyContent: "center",
              my: 3,
              "& .MuiPaginationItem-root": {
                color: "#D1D4C9",
              },
            }}
          />
        </Box>
      </Box>
    </Box>
  );
}
