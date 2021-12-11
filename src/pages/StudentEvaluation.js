import React, { useState, useEffect } from "react";
import { Box } from "@mui/system";
import StarIcon from "@mui/icons-material/Star";
import {
  Pagination,
  Grid,
  Paper,
  ButtonBase,
  Typography,
  Rating,
  FormControl,
  OutlinedInput,
  Button,
  Select,
  MenuItem,
  Avatar,
  IconButton,
} from "@mui/material";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import localizeFormat from "dayjs/plugin/localizedFormat";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { styled } from "@mui/material/styles";
import style from "../style/studentEvaluation";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ReportGmailerrorredOutlinedIcon from "@mui/icons-material/ReportGmailerrorredOutlined";
import ReplyOutlinedIcon from "@mui/icons-material/ReplyOutlined";
import Header from "../components/Header";
import { useLocation } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import {
  findStudent,
  toggleProfile,
  addComment,
  getComment,
  getSubComment,
  addSubComment,
  //editRating,
} from "../redux/actions/userAction";

import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
dayjs.extend(localizeFormat);
dayjs.extend(relativeTime);

const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
});

export default function StudentEvaluation() {
  const state = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [overAll, setOverAll] = useState(0);
  const [teamWork, setTeamWork] = useState(0);
  const [creativity, setCreativity] = useState(0);
  const [adaptability, setAdaptability] = useState(0);
  const [leadership, setLeadership] = useState(0);
  const [persuasion, setPersuasion] = useState(0);
  const [open, setOpen] = useState(false);
  const [openComment, setOpenComment] = useState(false);
  const [sort, setSort] = useState(10);
  const [filter, setFilter] = useState(10);
  const [commentMessage, setCommentMessage] = useState("");
  const [subCommentMessage, setSubCommentMessage] = useState("");
  const [userComment, setUserComment] = useState("");
 
  const useQuery = () => {
    return new URLSearchParams(useLocation().search);
  };

  const queryy = useQuery();
  const studentId = queryy.get("student");
  //console.log(studentId);

  const handleChangeSort = (event) => {
    setSort(event.target.value);
  };
  const handleChangeFilter = (event) => {
    setFilter(event.target.value);
  };

  const handleChangeComment = (comment) => {
    setOpenComment(true);
  };
  const handleCommentInfo = (event) => {
    setCommentMessage(event.target.value);
  };
  const handleSubCommentInfo = (event) => {
    setSubCommentMessage(event.target.value);
  };

  const handleAllRating = (event, newValue) => {
    setOverAll(newValue);
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("Overall: " + newValue);
        setOpen(true);
        setTeamWork(newValue);
        setCreativity(newValue);
        setAdaptability(newValue);
        setLeadership(newValue);
        setPersuasion(newValue);
        if (newValue === null) {
          setOpen(false);
          setTeamWork(null);
          setCreativity(null);
          setAdaptability(null);
          setLeadership(null);
          setPersuasion(null);
        }
        if (state.comments.find((item) => item.commentEmail === user.email)) {
          toast.warn(
            "Hi! " + user.displayName +  ",You can only rate once"
          );
          setOverAll(null);
          setOpen(false);
          setTeamWork(null);
          setCreativity(null);
          setAdaptability(null);
          setLeadership(null);
          setPersuasion(null);
        }
      } else {
        dispatch(toggleProfile(true));
      }
    });
  };
  const submitRating = (e) => {
    e.preventDefault();
    console.log("overall rating:", overAll);

    onAuthStateChanged(auth, (user) => {
      setOpen(false);
      setOverAll(null);
      setTeamWork(null);
      setCreativity(null);
      setAdaptability(null);
      setLeadership(null);
      setPersuasion(null);
      setCommentMessage("");
      dispatch(
        addComment({
          id: Math.floor(Math.random() * (999 - 100 + 1) + 100),
          commentEmail: user.email,
          studentName: studentId,
          commentInfo: commentMessage,
          teamworkRating: teamWork,
          creativityRating: creativity,
          adaptabilityRating: adaptability,
          leadershipRating: leadership,
          persuasionRating: persuasion,
          createdTime: new Date().getTime(),
        })
      );
      dispatch(findStudent(studentId));
    });
  };
  const subComment = (comment) => {
    onAuthStateChanged(auth, (user) => {
      dispatch(
        addSubComment({
          id: Math.floor(Math.random() * (999 - 100 + 1) + 100),
          commentEmail: user.email,
          studentName: studentId,
          commentInfo: subCommentMessage,
          createdTime: new Date().getTime(),
        }),
        state.findStudent.id
      );
    });
    setSubCommentMessage("");
    setOpenComment(false);
    setUserComment(comment.commentEmail);
  };

  useEffect(() => {
    dispatch(findStudent(studentId));
    dispatch(getComment(studentId));
    dispatch(getSubComment(studentId, userComment));
  }, [dispatch, studentId, userComment,state.findStudent]);

  //rating formula

  //teamwork

  const totalTeamWorkRating =
   (studentId === null ? 0 : state.findStudent.teamworkFive ) +
   (studentId === null ? 0: state.findStudent.teamworkFour ) +
   (studentId === null ? 0: state.findStudent.teamworkThree ) +
   (studentId === null ? 0: state.findStudent.teamworkTwo ) +
   (studentId === null ? 0: state.findStudent.teamworkOne );

  const teamworkRatingAverage =
  ((studentId === null ? 0 : 5 * state.findStudent.teamworkFive ) +
   (studentId === null ? 0: 4 * state.findStudent.teamworkFour ) +
   (studentId === null ? 0: 3 * state.findStudent.teamworkThree ) +
   (studentId === null ? 0: 2 * state.findStudent.teamworkTwo ) +
   (studentId === null ? 0: 1 * state.findStudent.teamworkOne )) /
    (totalTeamWorkRating);

  //creativity
  const totalCreativityRating =
  (studentId === null ? 0 : state.findStudent.creativityFive ) +
  (studentId === null ? 0 : state.findStudent.creativityFour ) +
  (studentId === null ? 0 : state.findStudent.creativityThree ) +
  (studentId === null ? 0 : state.findStudent.creativityTwo ) +
  (studentId === null ? 0 : state.findStudent.creativityOne ) ;

  const creativityRatingAverage =
  ((studentId === null ? 0 : 5 * state.findStudent.creativityFive ) +
  (studentId === null ? 0 : 4 * state.findStudent.creativityFour ) +
  (studentId === null ? 0 : 3 * state.findStudent.creativityThree ) +
  (studentId === null ? 0 : 2 * state.findStudent.creativityTwo ) +
  (studentId === null ? 0 : 1 * state.findStudent.creativityOne )) /
    totalCreativityRating;

  //adaptability
  const totalAdaptabilityRating =
  (studentId === null ? 0 : state.findStudent.adaptabilityFive ) +
   (studentId === null ? 0: state.findStudent.adaptabilityFour ) +
   (studentId === null ? 0: state.findStudent.adaptabilityThree ) +
   (studentId === null ? 0: state.findStudent.adaptabilityTwo ) +
   (studentId === null ? 0: state.findStudent.adaptabilityOne );

  const adaptabilityRatingAverage =
  ((studentId === null ? 0 : 5 * state.findStudent.adaptabilityFive ) +
  (studentId === null ? 0 : 4 * state.findStudent.adaptabilityFour ) +
  (studentId === null ? 0 : 3 * state.findStudent.adaptabilityThree ) +
  (studentId === null ? 0 : 2 * state.findStudent.adaptabilityTwo ) +
  (studentId === null ? 0 : 1 * state.findStudent.adaptabilityOne )) /
    totalAdaptabilityRating;

  //leadership
  const totalLeadershipRating =
  (studentId === null ? 0 : state.findStudent.leadershipFive ) +
  (studentId === null ? 0: state.findStudent.leadershipFour ) +
  (studentId === null ? 0: state.findStudent.leadershipThree ) +
  (studentId === null ? 0: state.findStudent.leadershipTwo ) +
  (studentId === null ? 0: state.findStudent.leadershipOne );

  const leadershipRatingAverage =
  ((studentId === null ? 0 : 5 * state.findStudent.leadershipFive ) +
  (studentId === null ? 0 : 4 * state.findStudent.leadershipFour ) +
  (studentId === null ? 0 : 3 * state.findStudent.leadershipThree ) +
  (studentId === null ? 0 : 2 * state.findStudent.leadershipTwo ) +
  (studentId === null ? 0 : 1 * state.findStudent.leadershipOne )) /
    totalLeadershipRating;

  //persuasion
  const totalPersuasionRating =
  (studentId === null ? 0 : state.findStudent.persuasionFive ) +
  (studentId === null ? 0: state.findStudent.persuasionFour ) +
  (studentId === null ? 0: state.findStudent.persuasionThree ) +
  (studentId === null ? 0: state.findStudent.persuasionTwo ) +
  (studentId === null ? 0: state.findStudent.persuasionOne );

  const persuasionRatingAverage =
  ((studentId === null ? 0 : 5 * state.findStudent.persuasionFive ) +
  (studentId === null ? 0 : 4 * state.findStudent.persuasionFour ) +
  (studentId === null ? 0 : 3 * state.findStudent.persuasionThree ) +
  (studentId === null ? 0 : 2 * state.findStudent.persuasionTwo ) +
  (studentId === null ? 0 : 1 * state.findStudent.persuasionOne )) /
    totalPersuasionRating;

  const totalOverallRating =
    persuasionRatingAverage +
    leadershipRatingAverage +
    adaptabilityRatingAverage +
    creativityRatingAverage +
    teamworkRatingAverage;

  const overallRatingAverage = totalOverallRating / 5;

  // end rating

  return (
    <Box sx={style.root}>
      <Helmet>
        <title>{studentId}</title>
        <meta
          name={studentId}
          content="Teamwork, Creativity, Adaptability, Leadership, Persuasion"
        />
      </Helmet>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

      <Header />
      <Box sx={{ width: "100%", backgroundColor: "#131414" }}>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          rowSpacing={5}
          spacing={10}
          sx={{ my: 1 }}
        >
          <Grid item>
            <Paper sx={style.paper}>
              <Grid container spacing={2}>
                <Grid
                  item
                  xs
                  container
                  sx={{ width: "100%" }}
                  direction="column"
                  alignItems="center"
                  justifyContent="center"
                >
                  <ButtonBase sx={{ width: 80, height: 80 }}>
                    <Img
                      alt="complex"
                      src={(studentId === null ? "" : state.findStudent.image )}
                      sx={{ borderRadius: 1, border: "1px solid #D1D4C9" }}
                    />
                  </ButtonBase>
                  <Rating
                    value={overallRatingAverage.toFixed(1)}
                    readOnly
                    sx={
                      overallRatingAverage > 2
                        ? style.rating
                        : style.ratingRed
                    }
                    precision={0.5}
                    emptyIcon={
                      <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
                    }
                  />
                  <Box sx={style.boxLeftProfile}>
                    <Typography sx={style.leftProfileValue}>
                      {overallRatingAverage.toFixed(1)}
                    </Typography>
                    <Typography sx={style.leftProfileTypography}>
                      Overall Rating
                    </Typography>
                    <Typography sx={style.leftProfileTypography}>
                      {(studentId === null ? "" : state.findStudent.studentReview )}
                    </Typography>
                    <Typography sx={style.leftProfileTypography}>
                      Reviews
                    </Typography>
                  </Box>
                </Grid>

                <Grid item xs={12} sm container>
                  <Box
                    sx={{
                      display: "flex",
                      width: "100%",
                      alignItems: "center",
                      mb: 2,
                    }}
                  >
                    <Typography sx={style.studenttitlename}>
                      {(studentId === null ? "" : state.findStudent.studentName )}
                    </Typography>
                    <Typography
                      variant="inherit"
                      sx={{ ml: 2, color: "#D1D4C9" }}
                    >
                      BSIT4B
                    </Typography>
                  </Box>

                  <Grid item xs container direction="column" spacing={10}>
                    <Grid item xs>
                      <Typography
                        sx={{
                          color: "#D1D4C9",
                          fontWeight: 500,
                          fontSize: "12px",
                        }}
                        gutterBottom
                      >
                        Gender:
                      </Typography>
                      <Typography
                        sx={{
                          color: "#D1D4C9",
                          fontWeight: 500,
                          fontSize: "12px",
                        }}
                        gutterBottom
                      >
                        Birthday:
                      </Typography>
                      <Typography
                        sx={{
                          color: "#D1D4C9",
                          fontWeight: 500,
                          fontSize: "12px",
                        }}
                        gutterBottom
                      >
                        Address
                      </Typography>
                      <Typography
                        sx={{
                          color: "#D1D4C9",
                          fontWeight: 500,
                          fontSize: "12px",
                        }}
                        gutterBottom
                      >
                        Nickname:
                      </Typography>
                      <Typography
                        sx={{
                          color: "#D1D4C9",
                          fontWeight: 500,
                          fontSize: "12px",
                        }}
                        gutterBottom
                      >
                        Skills/Language:
                      </Typography>
                    </Grid>
                  </Grid>

                  <Grid
                    item
                    xs
                    container
                    direction="column"
                    spacing={1}
                    sx={{
                      width: 500,
                      textAlign: { xs: "center", md: "right" },
                      alignItems: "center",
                    }}
                  >
                    <Grid item xs>
                      <Typography></Typography>
                      <Typography
                        gutterBottom
                        sx={{
                          fontSize: "12px",
                          fontWeight: 300,
                          color: "#D1D4C9",
                        }}
                      >
                        {(studentId === null ? "" : state.findStudent.studentGender )}
                      </Typography>
                      <Typography
                        gutterBottom
                        sx={{
                          fontSize: "12px",
                          fontWeight: 300,
                          color: "#D1D4C9",
                        }}
                      >
                        {(studentId === null ? "" : state.findStudent.studentBirthdate)}
                      </Typography>
                      <Typography
                        gutterBottom
                        sx={{
                          fontSize: "12px",
                          fontWeight: 300,
                          color: "#D1D4C9",
                        }}
                      >
                        {(studentId === null ? "" : state.findStudent.studentAddress)}
                      </Typography>
                      <Typography
                        gutterBottom
                        sx={{
                          fontSize: "12px",
                          fontWeight: 300,
                          color: "#D1D4C9",
                        }}
                      >
                        {(studentId === null ? "" : state.findStudent.studentNickname)}
                      </Typography>
                      <Typography
                        gutterBottom
                        sx={{
                          fontSize: "12px",
                          fontWeight: 300,
                          color: "#D1D4C9",
                        }}
                      >
                        {(studentId === null ? "" :state.findStudent.studentSkills)}
                      </Typography>
                    </Grid>
                  </Grid>

                  <Grid
                    item
                    xs
                    container
                    direction="column"
                    spacing={2}
                    sx={{ textAlign: "left", alignItems: "center" }}
                  >
                    <Grid item xs>
                      <Typography
                        sx={{
                          color: "#D1D4C9",
                          fontWeight: 500,
                          fontSize: "12px",
                        }}
                        gutterBottom
                      >
                        TeamWork:
                      </Typography>
                      <Typography
                        sx={{
                          color: "#D1D4C9",
                          fontWeight: 500,
                          fontSize: "12px",
                        }}
                        gutterBottom
                      >
                        Creativity:
                      </Typography>
                      <Typography
                        sx={{
                          color: "#D1D4C9",
                          fontWeight: 500,
                          fontSize: "12px",
                        }}
                        gutterBottom
                      >
                        Adaptability:
                      </Typography>
                      <Typography
                        sx={{
                          color: "#D1D4C9",
                          fontWeight: 500,
                          fontSize: "12px",
                        }}
                        gutterBottom
                      >
                        Leadership:
                      </Typography>
                      <Typography
                        sx={{
                          color: "#D1D4C9",
                          fontWeight: 500,
                          fontSize: "12px",
                        }}
                        gutterBottom
                      >
                        Persuasion:
                      </Typography>
                    </Grid>
                  </Grid>

                  <Grid
                    item
                    xs
                    container
                    direction="column"
                    spacing={1}
                    sx={{
                      textAlign: "center",
                      alignItems: "left",
                      justifyContent: "left",
                      maxWidth: 50,
                    }}
                  >
                    <Grid item xs>
                      <Box
                        sx={
                          teamworkRatingAverage > 3
                            ? style.boxRightScoreGreen
                            : style.boxRightScoreRed
                        }
                      >
                        <Typography color="white" variant="caption">
                          {teamworkRatingAverage.toFixed(1)}
                        </Typography>
                      </Box>
                      <Box
                        sx={
                          creativityRatingAverage > 3
                            ? style.boxRightScoreGreen
                            : style.boxRightScoreRed
                        }
                      >
                        <Typography color="white" variant="caption">
                          {creativityRatingAverage.toFixed(1)}
                        </Typography>
                      </Box>
                      <Box
                        sx={
                          adaptabilityRatingAverage > 3
                            ? style.boxRightScoreGreen
                            : style.boxRightScoreRed
                        }
                      >
                        <Typography color="white" variant="caption">
                          {adaptabilityRatingAverage.toFixed(1)}
                        </Typography>
                      </Box>
                      <Box
                        sx={
                          leadershipRatingAverage > 3
                            ? style.boxRightScoreGreen
                            : style.boxRightScoreRed
                        }
                      >
                        <Typography color="white" variant="caption">
                          {leadershipRatingAverage.toFixed(1)}
                        </Typography>
                      </Box>
                      <Box
                        sx={
                          persuasionRatingAverage > 3
                            ? style.boxRightScoreGreen
                            : style.boxRightScoreRed
                        }
                      >
                        <Typography color="white" variant="caption">
                          {persuasionRatingAverage.toFixed(1)}
                        </Typography>
                      </Box>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Paper>

            <Box sx={style.boxAddRatingBox}>
              <Box sx={style.boxAddRating}>
                <Typography> Add your Rating</Typography>

                <Rating
                  sx={
                    overAll > 2.5
                      ? style.addRating
                      : overAll === 0
                      ? style.addRating
                      : style.addRatingRed
                  }
                  value={overAll}
                  onChange={handleAllRating}
                  emptyIcon={
                    <StarIcon style={{ opacity: 2 }} fontSize="inherit" />
                  }
                />

                {open ? (
                  <Paper sx={style.showRating}>
                    <Typography sx={{ color: "#D1D4C9", fontSize: "14px" }}>
                      Rating
                    </Typography>
                    <Box sx={style.boxAllRating}>
                      <Typography sx={style.allRatingTypography}>
                        Teamwork
                      </Typography>

                      <Rating
                        fontSize="inherit"
                        sx={
                          teamWork > 2.5
                            ? style.addRating
                            : overAll === 0
                            ? style.addRating
                            : style.addRatingRed
                        }
                        value={teamWork}
                        onChange={(event, newValue) => {
                          console.log("Team work:" + newValue);
                          setTeamWork(newValue);
                          setOverAll(
                            (newValue +
                              creativity +
                              adaptability +
                              leadership +
                              persuasion) /
                              5
                          );
                        }}
                        emptyIcon={
                          <StarIcon style={{ opacity: 2 }} fontSize="inherit" />
                        }
                      />
                    </Box>

                    <Box sx={style.boxAllRating}>
                      <Typography sx={style.allRatingTypography}>
                        Creativity
                      </Typography>

                      <Rating
                        fontSize="inherit"
                        sx={
                          creativity > 2.5
                            ? style.addRating
                            : overAll === 0
                            ? style.addRating
                            : style.addRatingRed
                        }
                        value={creativity}
                        onChange={(event, newValue) => {
                          console.log("Creativity:" + newValue);
                          setCreativity(newValue);
                          setOverAll(
                            (teamWork +
                              newValue +
                              adaptability +
                              leadership +
                              persuasion) /
                              5
                          );
                        }}
                        emptyIcon={
                          <StarIcon style={{ opacity: 2 }} fontSize="inherit" />
                        }
                      />
                    </Box>

                    <Box sx={style.boxAllRating}>
                      <Typography sx={style.allRatingTypography}>
                        Adaptability
                      </Typography>

                      <Rating
                        fontSize="inherit"
                        sx={
                          adaptability > 2.5
                            ? style.addRating
                            : overAll === 0
                            ? style.addRating
                            : style.addRatingRed
                        }
                        value={adaptability}
                        onChange={(event, newValue) => {
                          console.log("Adaptability:" + newValue);
                          setAdaptability(newValue);
                          setOverAll(
                            (teamWork +
                              creativity +
                              newValue +
                              leadership +
                              persuasion) /
                              5
                          );
                        }}
                        emptyIcon={
                          <StarIcon style={{ opacity: 2 }} fontSize="inherit" />
                        }
                      />
                    </Box>

                    <Box sx={style.boxAllRating}>
                      <Typography sx={style.allRatingTypography}>
                        Leadership
                      </Typography>

                      <Rating
                        fontSize="inherit"
                        sx={
                          leadership > 2.5
                            ? style.addRating
                            : overAll === 0
                            ? style.addRating
                            : style.addRatingRed
                        }
                        value={leadership}
                        onChange={(event, newValue) => {
                          console.log("Leadership:" + newValue);
                          setLeadership(newValue);
                          setOverAll(
                            (teamWork +
                              creativity +
                              adaptability +
                              newValue +
                              persuasion) /
                              5
                          );
                        }}
                        emptyIcon={
                          <StarIcon style={{ opacity: 2 }} fontSize="inherit" />
                        }
                      />
                    </Box>

                    <Box sx={style.boxAllRating}>
                      <Typography sx={style.allRatingTypography}>
                        Persuasion
                      </Typography>

                      <Rating
                        fontSize="inherit"
                        sx={
                          persuasion > 2.5
                            ? style.addRating
                            : overAll === 0
                            ? style.addRating
                            : style.addRatingRed
                        }
                        value={persuasion}
                        onChange={(event, newValue) => {
                          console.log("Persuasion:" + newValue);
                          setPersuasion(newValue);
                          setOverAll(
                            (teamWork +
                              creativity +
                              adaptability +
                              leadership +
                              newValue) /
                              5
                          );
                        }}
                        emptyIcon={
                          <StarIcon style={{ opacity: 2 }} fontSize="inherit" />
                        }
                      />
                    </Box>

                    <Typography sx={{ color: "#D1D4C9" }}>
                      Share us your thoughts!
                    </Typography>
                    <FormControl fullWidth sx={style.inputcomment}>
                      <OutlinedInput
                        placeholder="Please enter text"
                        rows={4}
                        multiline
                        onChange={handleCommentInfo}
                        value={commentMessage}
                      />
                    </FormControl>
                    <Button
                      variant="contained"
                      sx={{ mt: 3, backgroundColor: "#26CE8D", width: "150px" }}
                      onClick={submitRating}
                    >
                      Submit
                    </Button>
                  </Paper>
                ) : null}
              </Box>
            </Box>

            <Box sx={style.boxFilter}>
              <Typography color="#D1D4C9" sx={style.boxFilterTypog}>
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
                  displayEmpty
                  size="small"
                  sx={style.select}
                  inputProps={{ "aria-label": "Without label" }}
                >
                  <MenuItem value={10}>No Filter</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </Box>

            <Grid
              container
              direction="row"
              justifyContent="left"
              alignItems="center"
              rowSpacing={4}
              columnSpacing={0}
              spacing={2}
              sx={{ my: 1 }}
            >
              <Paper sx={style.paper}>
                {state.comments.map((comment, index) => (
                  <Grid container spacing={2} key={index + 1}>
                    <Grid item>
                      <ButtonBase sx={{ width: 50, height: 50 }}>
                        <Avatar></Avatar>
                      </ButtonBase>
                    </Grid>
                    <Grid item xs={10} sm container>
                      <Grid item xs container direction="column" spacing={2}>
                        <Grid item xs>
                          <Typography
                            variant="body2"
                            sx={{ color: "#D1D4C9" }}
                            component="div"
                          >
                            {comment.commentEmail}
                          </Typography>

                          <Typography
                            variant="caption"
                            sx={{ color: "#62666D" }}
                            color="text.secondary"
                          >
                            Posted {dayjs(comment.createdTime).fromNow()}
                          </Typography>
                        </Grid>
                        <Grid item>
                          <Typography component="legend"></Typography>
                          <Rating
                            sx={
                              (comment.teamworkRating +
                                comment.creativityRating +
                                comment.adaptabilityRating +
                                comment.leadershipRating +
                                comment.persuasionRating) /
                                5 >
                              2
                                ? style.rating
                                : style.ratingRed
                            }
                            value={
                              (comment.teamworkRating +
                                comment.creativityRating +
                                comment.adaptabilityRating +
                                comment.leadershipRating +
                                comment.persuasionRating) /
                              5
                            }
                            readOnly
                            emptyIcon={
                              <StarIcon
                                style={{ opacity: 2 }}
                                fontSize="inherit"
                              />
                            }
                          />
                        </Grid>
                        <Grid item>
                          <Typography sx={{ color: "#D1D4C9" }} variant="body2">
                            {" "}
                            {comment.commentInfo}{" "}
                          </Typography>
                        </Grid>
                        <Grid item xs container direction="row" spacing={2}>
                          <Grid item xs></Grid>
                          <Grid item sx={{ color: "#62666D" }}>
                            <IconButton
                              size="small"
                              color="inherit"
                              onClick={handleChangeComment}
                            >
                              <ChatBubbleOutlineOutlinedIcon />

                              <Typography sx={style.commentIconTypogpraphy}>
                                {state.subComments.length} comments
                              </Typography>
                            </IconButton>

                            <IconButton size="small" color="inherit">
                              <ReportGmailerrorredOutlinedIcon />
                              <Typography sx={style.commentIconTypogpraphy}>
                                Report
                              </Typography>
                            </IconButton>
                          </Grid>
                        </Grid>
                        {/** Open Comment */}
                        {openComment ? (
                          <Paper sx={style.showComment}>
                            <Box
                              sx={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "left",
                              }}
                            >
                              <ReplyOutlinedIcon fontSize="medium" />
                              <Typography variant="caption" sx={{ mx: 1 }}>
                                Add you comment
                              </Typography>
                            </Box>
                            <Box sx={style.boxAllRating}>
                              <FormControl
                                fullWidth
                              
                              >
                                <OutlinedInput
                                 
                                
                                  placeholder="Please enter text"
                                  rows={2}
                                  multiline
                                  value={subCommentMessage}
                                  onChange={handleSubCommentInfo}
                                />
                              </FormControl>
                              <Button
                                variant="contained"
                                sx={{ m: 2, backgroundColor: "#26CE8D" }}
                                onClick={() => subComment(comment)}
                              >
                                Submit
                              </Button>
                            </Box>
                          </Paper>
                        ) : null}
                        {state.subComments.map((sub, index) => (
                          <Paper noWrap sx={style.showComment} key={index + 1}>
                            <Box
                              maxItems={2}
                              sx={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "left",
                              }}
                            >
                              <ReplyOutlinedIcon fontSize="medium" />
                              <Typography variant="caption" sx={{ mx: 1 }}>
                                {sub.commentEmail}
                              </Typography>
                              <Typography variant="caption">
                                {dayjs(sub.createdTime).fromNow()}
                              </Typography>
                            </Box>
                            <Box sx={style.boxAllRating}>
                              <Typography variant="caption" sx={{ ml: 4 }}>
                                {sub.commentInfo}
                              </Typography>
                            </Box>
                          </Paper>
                        ))}
                      
                      </Grid>
                    </Grid>
                  </Grid>
                ))}
              </Paper>
            </Grid>

            <Pagination
              count={5}
              sx={{
                display: "flex",
                justifyContent: "center",
                my: 3,
                "& .MuiPaginationItem-root": {
                  color: "#D1D4C9",
                },
              }}
            />
          </Grid>
        </Grid>
      </Box>
      <Footer />
    </Box>
  );
}