import React, { useState, useEffect } from "react";
import { Box } from "@mui/system";
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

import {
  doc,
  updateDoc,
  increment,
  addDoc,
  collection,
  query,
  where,
  onSnapshot,
  orderBy,
} from "firebase/firestore";
import { db } from "../utils/firebase";
import {Helmet} from "react-helmet";
import { styled } from "@mui/material/styles";
import style from "../style/studentEvaluation";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ReportGmailerrorredOutlinedIcon from "@mui/icons-material/ReportGmailerrorredOutlined";
import ReplyOutlinedIcon from "@mui/icons-material/ReplyOutlined";
import Header from "./Header";
import { auth } from "../utils/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useLocation } from "react-router";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { toggleProfile } from "../redux/actions/userAction";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import localizeFormat from "dayjs/plugin/localizedFormat";
import { useHistory } from "react-router-dom";
dayjs.extend(localizeFormat);
dayjs.extend(relativeTime);
const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
});

export default function StudentEvaluation() {
  const history = useHistory();
  const state = useSelector((state) => state.user);
  //const [value] = useState(4);
  const dispatch = useDispatch();
  const [overAll, setOverAll] = useState(0);
  const [teamWork, setTeamWork] = useState(5);
  const [creativity, setCreativity] = useState(5);
  const [adaptability, setAdaptability] = useState(5);
  const [leadership, setLeadership] = useState(5);
  const [persuasion, setPersuasion] = useState(5);
  const [open, setOpen] = React.useState(false);
  const [openComment, setOpenComment] = React.useState(false);
  const [sort, setSort] = React.useState(10);
  const [filter, setFilter] = React.useState(10);
  const [comment, setComment] = React.useState("");
  const [subComment, setSubComment] = React.useState("");
  const [subCommentDetail, setSubCommentDetail] = React.useState([]);
  const handleChangeSort = (event) => {
    setSort(event.target.value);
  };
  const handleChangeFilter = (event) => {
    setFilter(event.target.value);
  };

  const handleChangeComment = () => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setOpenComment(true);
      } else {
        dispatch(toggleProfile(true));
      }
    });
  };

  const [studentDetail, setStudentDetail] = useState([
    { Name: "Loading...", id: "initial" },
  ]);

  const [commentDetail, setCommentDetail] = useState([]);

  const useQuery = () => {
    return new URLSearchParams(useLocation().search);
  };
  let queryy = useQuery();
  let studentId = queryy.get("student");
  //console.log(studentId);

  useEffect(() => {
    const getData = () => {
      if (studentId === null) {
        console.log("no data");
        setStudentDetail(state.students[0]);

      } else {
        const testStudentId = state.students.find(
          (student) => student.Name === studentId
        );
        setStudentDetail(testStudentId);
        console.log("bit")

        const collectionRef = collection(db, "comments");
        const q = query(collectionRef, where("StudentName", "==", studentId));
       onSnapshot(q, (snapshot) =>
         setCommentDetail(
           snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
        )
        );

        const collectionRef1 = collection(db, "subComments");
       const q1 = query(collectionRef1, orderBy("Created_at"));

        onSnapshot(q1, (snapshot) =>
          setSubCommentDetail(
           snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
         )
        );
       
        // console.log(testStudentId);
        // setCommentDetail(state.comments);
      }
    };

    return getData();
  },[studentId,state.students]);

  const handleComment = (event) => {
    setComment(event.target.value);
  };
  const handleSubComment = (event) => {
    setSubComment(event.target.value);
  };

  const submitSubComment = (email) => {
    onAuthStateChanged(auth, (user) => {
      var UserDocRef = collection(db, "subComments");
      addDoc(UserDocRef, {
        Comment: subComment,
        UserPostEmail: email,
        UserCommentEmail: user.email,
        Created_at: new Date().getTime(),
      });
    });
    setOpenComment(false);
  };

  const submitRating = async () => {
    console.log("submit");
    console.log("overall rating:", overAll);

    onAuthStateChanged(auth, (user) => {
      const studentRef = doc(db, "students", studentDetail.id);
      var UserDocRef = collection(db, "comments");
      // const increment = studentRef.FieldValue.increment(1);

      if (overAll === 1) {
        updateDoc(studentRef, {
          OverallRatingOne: increment(1),
        });
      }
      if (overAll === 2) {
        updateDoc(studentRef, {
          OverallRatingTwo: increment(1),
        });
      }
      if (overAll === 3) {
        updateDoc(studentRef, {
          OverallRatingThree: increment(1),
        });
      }
      if (overAll === 4) {
        updateDoc(studentRef, {
          OverallRatingFour: increment(1),
        });
      }
      if (overAll === 5) {
        updateDoc(studentRef, {
          OverallRatingFive: increment(1),
        });
      }
      //teamwork
      if (teamWork === 1) {
        updateDoc(studentRef, {
          TeamworkRatingOne: increment(1),
        });
      }
      if (teamWork === 2) {
        updateDoc(studentRef, {
          TeamworkRatingTwo: increment(1),
        });
      }
      if (teamWork === 3) {
        updateDoc(studentRef, {
          TeamworkRatingThree: increment(1),
        });
      }
      if (teamWork === 4) {
        updateDoc(studentRef, {
          TeamworkRatingFour: increment(1),
        });
      }
      if (teamWork === 5) {
        updateDoc(studentRef, {
          TeamworkRatingFive: increment(1),
        });
      }

      //creativity
      if (creativity === 1) {
        updateDoc(studentRef, {
          CreativityRatingOne: increment(1),
        });
      }
      if (creativity === 2) {
        updateDoc(studentRef, {
          CreativityRatingTwo: increment(1),
        });
      }
      if (creativity === 3) {
        updateDoc(studentRef, {
          CreativityRatingThree: increment(1),
        });
      }
      if (creativity === 4) {
        updateDoc(studentRef, {
          CreativityRatingFour: increment(1),
        });
      }
      if (creativity === 5) {
        updateDoc(studentRef, {
          CreativityRatingFive: increment(1),
        });
      }

      //adaptability
      if (adaptability === 1) {
        updateDoc(studentRef, {
          AdaptabilityRatingOne: increment(1),
        });
      }
      if (adaptability === 2) {
        updateDoc(studentRef, {
          AdaptabilityRatingTwo: increment(1),
        });
      }
      if (adaptability === 3) {
        updateDoc(studentRef, {
          AdaptabilityRatingThree: increment(1),
        });
      }
      if (adaptability === 4) {
        updateDoc(studentRef, {
          AdaptabilityRatingFour: increment(1),
        });
      }
      if (adaptability === 5) {
        updateDoc(studentRef, {
          AdaptabilityRatingFive: increment(1),
        });
      }

      //leadership
      if (leadership === 1) {
        updateDoc(studentRef, {
          LeadershipRatingOne: increment(1),
        });
      }
      if (leadership === 2) {
        updateDoc(studentRef, {
          LeadershipRatingTwo: increment(1),
        });
      }
      if (leadership === 3) {
        updateDoc(studentRef, {
          LeadershipRatingThree: increment(1),
        });
      }
      if (leadership === 4) {
        updateDoc(studentRef, {
          LeadershipRatingFour: increment(1),
        });
      }
      if (leadership === 5) {
        updateDoc(studentRef, {
          LeadershipRatingFive: increment(1),
        });
      }

      //Persuasion
      if (persuasion === 1) {
        updateDoc(studentRef, {
          PersuasionRatingOne: increment(1),
        });
      }
      if (persuasion === 2) {
        updateDoc(studentRef, {
          PersuasionRatingTwo: increment(1),
        });
      }
      if (persuasion === 3) {
        updateDoc(studentRef, {
          PersuasionRatingThree: increment(1),
        });
      }
      if (persuasion === 4) {
        updateDoc(studentRef, {
          PersuasionRatingFour: increment(1),
        });
      }
      if (persuasion === 5) {
        updateDoc(studentRef, {
          PersuasionRatingFive: increment(1),
        });
      }

      addDoc(UserDocRef, {
        UserRating: overAll,
        Comment: comment,
        UserCommentEmail: user.email,
        Created_at: new Date().getTime(),
        StudentName: studentDetail.Name,
      });
      history.push("/");
      alert("Added Rate Successfully");
    });
    setOpen(false);
    setOverAll(null);
    setTeamWork(null);
    setCreativity(null);
    setAdaptability(null);
    setLeadership(null);
    setPersuasion(null);
  };

  const handleAllRating = (event, newValue) => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("Overall: " + newValue);
        setOverAll(newValue);
        setOpen(true);

        if (newValue === null) {
          setOpen(false);
          setTeamWork(null);
          setCreativity(null);
          setAdaptability(null);
          setLeadership(null);
          setPersuasion(null);
        } else {
        }
      } else {
        dispatch(toggleProfile(true));
      }
    });
  };

  //rating formula

  const totalOverallRating =
    studentDetail.OverallRatingFive +
    studentDetail.OverallRatingFour +
    studentDetail.OverallRatingThree +
    studentDetail.OverallRatingTwo +
    studentDetail.OverallRatingOne;

  const overallRatingAverage =
    (5 * studentDetail.OverallRatingFive +
      4 * studentDetail.OverallRatingFour +
      3 * studentDetail.OverallRatingThree +
      2 * studentDetail.OverallRatingTwo +
      1 * studentDetail.OverallRatingOne) /
    totalOverallRating;

  //teamwork
  const totalTeamWorkRating =
    studentDetail.TeamworkRatingFive +
    studentDetail.TeamworkRatingFour +
    studentDetail.TeamworkRatingThree +
    studentDetail.TeamworkRatingTwo +
    studentDetail.TeamworkRatingOne;

  const teamworkRatingAverage =
    (5 * studentDetail.TeamworkRatingFive +
      4 * studentDetail.TeamworkRatingFour +
      3 * studentDetail.TeamworkRatingThree +
      2 * studentDetail.TeamworkRatingTwo +
      1 * studentDetail.TeamworkRatingOne) /
    totalTeamWorkRating;

  //creativity
  const totalCreativityRating =
    studentDetail.CreativityRatingFive +
    studentDetail.CreativityRatingFour +
    studentDetail.CreativityRatingThree +
    studentDetail.CreativityRatingTwo +
    studentDetail.CreativityRatingOne;

  const creativityRatingAverage =
    (5 * studentDetail.CreativityRatingFive +
      4 * studentDetail.CreativityRatingFour +
      3 * studentDetail.CreativityRatingThree +
      2 * studentDetail.CreativityRatingTwo +
      1 * studentDetail.CreativityRatingOne) /
    totalCreativityRating;

  //adaptability
  const totalAdaptabilityRating =
    studentDetail.AdaptabilityRatingFive +
    studentDetail.AdaptabilityRatingFour +
    studentDetail.AdaptabilityRatingThree +
    studentDetail.AdaptabilityRatingTwo +
    studentDetail.AdaptabilityRatingOne;

  const adaptabilityRatingAverage =
    (5 * studentDetail.AdaptabilityRatingFive +
      4 * studentDetail.AdaptabilityRatingFour +
      3 * studentDetail.AdaptabilityRatingThree +
      2 * studentDetail.AdaptabilityRatingTwo +
      1 * studentDetail.AdaptabilityRatingOne) /
    totalAdaptabilityRating;

  //leadership
  const totalLeadershipRating =
    studentDetail.LeadershipRatingFive +
    studentDetail.LeadershipRatingFour +
    studentDetail.LeadershipRatingThree +
    studentDetail.LeadershipRatingTwo +
    studentDetail.LeadershipRatingOne;

  const leadershipRatingAverage =
    (5 * studentDetail.LeadershipRatingFive +
      4 * studentDetail.LeadershipRatingFour +
      3 * studentDetail.LeadershipRatingThree +
      2 * studentDetail.LeadershipRatingTwo +
      1 * studentDetail.LeadershipRatingOne) /
    totalLeadershipRating;

  //persuasion
  const totalPersuasionRating =
    studentDetail.PersuasionRatingFive +
    studentDetail.PersuasionRatingFour +
    studentDetail.PersuasionRatingThree +
    studentDetail.PersuasionRatingTwo +
    studentDetail.PersuasionRatingOne;

  const persuasionRatingAverage =
    (5 * studentDetail.PersuasionRatingFive +
      4 * studentDetail.PersuasionRatingFour +
      3 * studentDetail.PersuasionRatingThree +
      2 * studentDetail.PersuasionRatingTwo +
      1 * studentDetail.PersuasionRatingOne) /
    totalPersuasionRating;
  // end rating

  return (
    <Box sx={style.root}>
      <Helmet>
                <title>{studentDetail.Name}</title>
                <meta
                  name="Student Evaluation"
                  content="Overall Rating, Teamwork, Creativity, Adaptability, Leadership, Persuasion,"
                />
                
            </Helmet>
      <Header />
      <Box sx={{ width: "100%" }}>
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
                      alt="profile"
                      src={studentDetail.Image}
                      sx={{ borderRadius: 1 }}
                    />
                  </ButtonBase>

                  <Rating
                    value={overallRatingAverage.toFixed(1)}
                    precision={0.5}
                    readOnly
                    sx={style.rating}
                  />
                  <Box sx={style.boxLeftProfile}>
                    <Typography sx={style.leftProfileValue}>
                      {overallRatingAverage.toFixed(1)}
                    </Typography>
                    <Typography sx={style.leftProfileTypography}>
                      Overall Rating
                    </Typography>
                    <Typography sx={style.leftProfileTypography}>
                      {totalOverallRating}
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
                    <Typography variant="h6">{studentDetail.Name}</Typography>
                    <Typography variant="inherit" sx={{ ml: 2 }}>
                      {studentDetail.YearSection}
                    </Typography>
                  </Box>

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
                      <Typography variant="h6"></Typography>
                      <Typography
                        variant="body2"
                        gutterBottom
                        sx={{ fontSize: { xs: 15, md: 14 } }}
                      >
                        {studentDetail.Gender}
                      </Typography>
                      <Typography
                        variant="body2"
                        gutterBottom
                        sx={{ fontSize: { xs: 14, md: 14 } }}
                      >
                        {studentDetail.Birthday}
                      </Typography>
                      <Typography
                        variant="body2"
                        gutterBottom
                        sx={{ fontSize: { xs: 12.5, md: 14 } }}
                      >
                        {studentDetail.Address}
                      </Typography>
                      <Typography
                        variant="body2"
                        gutterBottom
                        sx={{ fontSize: { xs: 14, md: 14 } }}
                      >
                        {studentDetail.Nickname}
                      </Typography>
                      <Typography
                        variant="body2"
                        gutterBottom
                        sx={{ fontSize: { xs: 13, md: 14 } }}
                      >
                        {studentDetail.Skills}
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
                      <Typography variant="body2" gutterBottom>
                        TeamWork:
                      </Typography>
                      <Typography variant="body2" gutterBottom>
                        Creativity:
                      </Typography>
                      <Typography variant="body2" gutterBottom>
                        Adaptability:
                      </Typography>
                      <Typography variant="body2" gutterBottom>
                        Leadership:
                      </Typography>
                      <Typography variant="body2" gutterBottom>
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
                        <Typography color="textPrimary" variant="caption">
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
                        <Typography color="textPrimary" variant="caption">
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
                        <Typography color="textPrimary" variant="caption">
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
                        <Typography color="textPrimary" variant="caption">
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
                        <Typography color="textPrimary" variant="caption">
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
                  sx={style.addRating}
                  value={overAll}
                  onChange={handleAllRating}
                />

                {open ? (
                  <Paper sx={style.showRating}>
                    <Typography>Rating</Typography>
                    <Box sx={style.boxAllRating}>
                      <Typography sx={style.allRatingTypography}>
                        Teamwork
                      </Typography>

                      <Rating
                        fontSize="inherit"
                        sx={style.addRating}
                        value={teamWork}
                        onChange={(event, newValue) => {
                          console.log("Team work:" + newValue);
                          setTeamWork(newValue);
                          setOpen(true);
                        }}
                      />
                    </Box>

                    <Box sx={style.boxAllRating}>
                      <Typography sx={style.allRatingTypography}>
                        Creativity
                      </Typography>

                      <Rating
                        fontSize="inherit"
                        sx={style.addRating}
                        value={creativity}
                        onChange={(event, newValue) => {
                          console.log("Creativity:" + newValue);
                          setCreativity(newValue);
                          setOpen(true);
                        }}
                      />
                    </Box>

                    <Box sx={style.boxAllRating}>
                      <Typography sx={style.allRatingTypography}>
                        Adaptability
                      </Typography>

                      <Rating
                        fontSize="inherit"
                        sx={style.addRating}
                        value={adaptability}
                        onChange={(event, newValue) => {
                          console.log("Adaptability:" + newValue);
                          setAdaptability(newValue);
                          setOpen(true);
                        }}
                      />
                    </Box>

                    <Box sx={style.boxAllRating}>
                      <Typography sx={style.allRatingTypography}>
                        Leadership
                      </Typography>

                      <Rating
                        fontSize="inherit"
                        sx={style.addRating}
                        value={leadership}
                        onChange={(event, newValue) => {
                          console.log("Leadership:" + newValue);
                          setLeadership(newValue);
                          setOpen(true);
                        }}
                      />
                    </Box>

                    <Box sx={style.boxAllRating}>
                      <Typography sx={style.allRatingTypography}>
                        Persuasion
                      </Typography>

                      <Rating
                        fontSize="inherit"
                        sx={style.addRating}
                        value={persuasion}
                        onChange={(event, newValue) => {
                          console.log("Persuasion:" + newValue);
                          setPersuasion(newValue);
                          setOpen(true);
                        }}
                      />
                    </Box>

                    <Typography>Share us your thoughts!</Typography>
                    <FormControl fullWidth>
                      <OutlinedInput
                        placeholder="Please enter text"
                        rows={4}
                        multiline
                        onChange={handleComment}
                        value={comment}
                      />
                    </FormControl>
                    <Button
                      variant="contained"
                      sx={{ mt: 3 }}
                      onClick={submitRating}
                    >
                      Submit
                    </Button>
                  </Paper>
                ) : null}
              </Box>
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
              <Box sx={style.paper}>
                {commentDetail.map((comment, key) => (
                  <Paper sx={style.paper} key={key}>
                    <Grid container spacing={2}>
                      <Grid item>
                        <ButtonBase sx={{ width: 50, height: 50 }}>
                          <Avatar></Avatar>
                        </ButtonBase>
                      </Grid>

                      <Grid item xs={10} sm container>
                        <Grid item xs container direction="column" spacing={2}>
                          <Grid item xs>
                            <Typography variant="body2" component="div">
                              {comment.UserCommentEmail}
                            </Typography>

                            <Typography
                              variant="caption"
                              color="text.secondary"
                            >
                              Posted {dayjs(comment.Created_at).fromNow()}
                            </Typography>
                          </Grid>
                          <Grid item>
                            <Rating
                              value={comment.UserRating}
                              readOnly
                              sx={style.rating}
                            />
                          </Grid>

                          <Grid item>
                            <Typography variant="body2">
                              {" "}
                              {comment.Comment}{" "}
                            </Typography>
                          </Grid>

                          <Grid item xs container direction="row" spacing={2}>
                            <Grid item xs></Grid>
                            <Grid item>
                              <IconButton
                                size="small"
                                color="inherit"
                                onClick={handleChangeComment}
                              >
                                <ChatBubbleOutlineOutlinedIcon />
                                <Typography sx={style.commentIconTypogpraphy}>
                                  {subCommentDetail.length} comments
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
                                <FormControl fullWidth>
                                  <OutlinedInput
                                    placeholder="Please enter text"
                                    rows={2}
                                    multiline
                                    onChange={handleSubComment}
                                  />
                                </FormControl>
                                <Button
                                  variant="contained"
                                  sx={{ m: 2 }}
                                  onClick={() =>
                                    submitSubComment(comment.UserCommentEmail)
                                  }
                                >
                                  Submit
                                </Button>
                              </Box>
                            </Paper>
                          ) : null}

                          {subCommentDetail.map((subCommentss) => (
                            <Paper
                              sx={
                                comment.UserCommentEmail ===
                                subCommentss.UserPostEmail
                                  ? style.showComment
                                  : { display: "none" }
                              }
                            >
                              <Box
                                sx={{
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "left",
                                }}
                              >
                                <ReplyOutlinedIcon fontSize="medium" />
                                <Typography variant="caption" sx={{ mx: 1 }}>
                                  {comment.UserCommentEmail ===
                                  subCommentss.UserPostEmail
                                    ? subCommentss.UserCommentEmail
                                    : ""}
                                </Typography>
                                <Typography variant="caption">
                                  {comment.UserCommentEmail ===
                                  subCommentss.UserPostEmail
                                    ? dayjs(subCommentss.Created_at).fromNow()
                                    : ""}
                                </Typography>
                              </Box>
                              <Box sx={style.boxAllRating}>
                                <Typography variant="caption">
                                  {comment.UserCommentEmail ===
                                  subCommentss.UserPostEmail
                                    ? subCommentss.Comment
                                    : ""}
                                </Typography>
                              </Box>
                            </Paper>
                          ))}
                        </Grid>
                      </Grid>
                    </Grid>
                  </Paper>
                ))}
              </Box>
            </Grid>

            <Pagination
              count={10}
              sx={{ display: "flex", justifyContent: "center", my: 3 }}
            />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
