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
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import localizeFormat from "dayjs/plugin/localizedFormat";

import { styled } from "@mui/material/styles";
import style from "../style/studentEvaluation";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ReportGmailerrorredOutlinedIcon from "@mui/icons-material/ReportGmailerrorredOutlined";
import ReplyOutlinedIcon from "@mui/icons-material/ReplyOutlined";
import Header from "./Header";
import { useLocation } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import {
  findStudent,
  toggleProfile,
  addComment,
  getComment,
  getSubComment,
  addSubComment
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
  const [value] = useState(4);
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
    
    onAuthStateChanged(auth, (user) => {
      if (user && newValue) {
        console.log("Overall: " + newValue);
        setOverAll(newValue);
        setOpen(true);
        setTeamWork(newValue);
        setCreativity(newValue);
        setAdaptability(newValue);
        setLeadership(newValue);
        setPersuasion(newValue);
         
      } else {
        dispatch(toggleProfile(true));
        setOpen(false);
        setTeamWork(null);
        setCreativity(null);
        setAdaptability(null);
        setLeadership(null);
        setPersuasion(null);
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
      dispatch(addComment(
        
     {
        id: Math.floor(Math.random() * (999 - 100 + 1) + 100),
        commentEmail: user.email,
        studentName: studentId,
        commentInfo: commentMessage,
        teamworkRating: teamWork,
        creativityRating: creativity,
        adaptabilityRating: adaptability,
        leadershipRating:leadership,
        persuasionRating: persuasion,
        createdTime: new Date().getTime(),
     }
     )); 
     dispatch(findStudent(studentId));
    });

  };
  const subComment = (comment) => {
    onAuthStateChanged(auth, (user) => {
    dispatch(addSubComment(
       
      {
         id: Math.floor(Math.random() * (999 - 100 + 1) + 100),
         commentEmail: user.email,
         studentName: studentId,
         commentInfo: subCommentMessage,
         createdTime: new Date().getTime(),
      } 
      ),state.findStudent.id); 
    })
    setSubCommentMessage("");
    setOpenComment(false);
    setUserComment(comment.commentEmail)
  

  }

  useEffect(() => {
   
    dispatch(findStudent(studentId));
    dispatch(getComment(studentId));
    dispatch(getSubComment(studentId,userComment));
  }, [dispatch, studentId,userComment]);

  //rating formula

  //teamwork

  const totalTeamWorkRating =
    state.findStudent.teamworkFive +
    state.findStudent.teamworkFour +
    state.findStudent.teamworkThree +
    state.findStudent.teamworkTwo +
    state.findStudent.teamworkOne;

  const teamworkRatingAverage =
    (5 * state.findStudent.teamworkFive +
      4 * state.findStudent.teamworkFour +
      3 * state.findStudent.teamworkThree +
      2 * state.findStudent.teamworkTwo +
      1 * state.findStudent.teamworkOne) /
    totalTeamWorkRating;

  //creativity
  const totalCreativityRating =
    state.findStudent.creativityFive +
    state.findStudent.creativityFour +
    state.findStudent.creativityThree +
    state.findStudent.creativityTwo +
    state.findStudent.creativityOne;

  const creativityRatingAverage =
    (5 * state.findStudent.creativityFive +
      4 * state.findStudent.creativityFour +
      3 * state.findStudent.creativityThree +
      2 * state.findStudent.creativityTwo +
      1 * state.findStudent.creativityOne) /
    totalCreativityRating;

  //adaptability
  const totalAdaptabilityRating =
    state.findStudent.adaptabilityFive +
    state.findStudent.adaptabilityFour +
    state.findStudent.adaptabilityThree +
    state.findStudent.adaptabilityTwo +
    state.findStudent.adaptabilityOne;

  const adaptabilityRatingAverage =
    (5 * state.findStudent.adaptabilityFive +
      4 * state.findStudent.adaptabilityFour +
      3 * state.findStudent.adaptabilityThree +
      2 * state.findStudent.adaptabilityTwo +
      1 * state.findStudent.adaptabilityOne) /
    totalAdaptabilityRating;

  //leadership
  const totalLeadershipRating =
    state.findStudent.leadershipFive +
    state.findStudent.leadershipFour +
    state.findStudent.leadershipThree +
    state.findStudent.leadershipTwo +
    state.findStudent.leadershipOne;

  const leadershipRatingAverage =
    (5 * state.findStudent.leadershipFive +
      4 * state.findStudent.leadershipFour +
      3 * state.findStudent.leadershipThree +
      2 * state.findStudent.leadershipTwo +
      1 * state.findStudent.leadershipOne) /
    totalLeadershipRating;

  //persuasion
  const totalPersuasionRating =
    state.findStudent.persuasionFive +
    state.findStudent.persuasionFour +
    state.findStudent.persuasionThree +
    state.findStudent.persuasionTwo +
    state.findStudent.persuasionOne;

  const persuasionRatingAverage =
    (5 * state.findStudent.persuasionFive +
      4 * state.findStudent.persuasionFour +
      3 * state.findStudent.persuasionThree +
      2 * state.findStudent.persuasionTwo +
      1 * state.findStudent.persuasionOne) /
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
                      alt="complex"
                      src={state.findStudent.image}
                      sx={{ borderRadius: 1 }}
                    />
                  </ButtonBase>
                  <Rating
                    value={overallRatingAverage.toFixed(1)}
                    readOnly
                    sx={style.rating}
                    precision={0.5}
                  />
                  <Box sx={style.boxLeftProfile}>
                    <Typography sx={style.leftProfileValue}>
                      {overallRatingAverage.toFixed(1)}
                    </Typography>
                    <Typography sx={style.leftProfileTypography}>
                      Overall Rating
                    </Typography>
                    <Typography sx={style.leftProfileTypography}>
                      {state.findStudent.studentReview}
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
                    <Typography variant="h6">
                      {state.findStudent.studentName}
                    </Typography>
                    <Typography variant="inherit" sx={{ ml: 2 }}>
                      BSIT4B
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
                        {state.findStudent.studentGender}
                      </Typography>
                      <Typography
                        variant="body2"
                        gutterBottom
                        sx={{ fontSize: { xs: 14, md: 14 } }}
                      >
                        {state.findStudent.studentBirthdate}
                      </Typography>
                      <Typography
                        variant="body2"
                        gutterBottom
                        sx={{ fontSize: { xs: 12.5, md: 14 } }}
                      >
                        {state.findStudent.studentAddress}
                      </Typography>
                      <Typography
                        variant="body2"
                        gutterBottom
                        sx={{ fontSize: { xs: 14, md: 14 } }}
                      >
                        {state.findStudent.studentNickname}
                      </Typography>
                      <Typography
                        variant="body2"
                        gutterBottom
                        sx={{ fontSize: { xs: 13, md: 14 } }}
                      >
                        {state.findStudent.studentSkills}
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
                        }}
                      />
                    </Box>

                    <Typography>Share us your thoughts!</Typography>
                    <FormControl fullWidth>
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
                          <Typography variant="body2" component="div">
                            {comment.commentEmail}
                          </Typography>

                          <Typography variant="caption" color="text.secondary">
                            Posted {dayjs(comment.createdTime).fromNow()}
                          </Typography>
                        </Grid>
                        <Grid item>
                          <Typography component="legend"></Typography>
                          <Rating value={value} readOnly sx={style.rating} />
                        </Grid>

                        <Grid item>
                          <Typography variant="body2">
                            {" "}
                            {comment.commentInfo}{" "}
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
                              <FormControl fullWidth>
                                <OutlinedInput
                                  placeholder="Please enter text"
                                  rows={2}
                                  multiline
                                  value={subCommentMessage}
                                  onChange={handleSubCommentInfo}
                                />
                              </FormControl>
                              <Button variant="contained" sx={{ m: 2 }} onClick={()=>subComment(comment)}>
                                Submit
                              </Button>
                            </Box>
                          </Paper>
                        ) : null}

                         {state.subComments.map((sub, index) => (
                        <Paper sx={style.showComment} key={index + 1}>
                          <Box
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
                            <Typography variant="caption">
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
              count={10}
              sx={{ display: "flex", justifyContent: "center", my: 3 }}
            />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
