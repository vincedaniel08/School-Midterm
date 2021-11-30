import * as React from "react";
import {
  Box,
  Tabs,
  Tab,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Paper,
  Popover,
  Avatar,
  Button
} from "@mui/material";

import { useDispatch } from 'react-redux'
import { toggleTab } from '../redux/actions/uiAction'

import googleIcon from "../assets/image/google.png";
import icon from "../assets/image/Gridicon.png";
import style from "../style/header";
import { makeStyles } from "@mui/styles";
import { styled } from "@mui/material/styles";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

import { auth } from "../utils/firebase";
import { getAuth, signInWithPopup, GoogleAuthProvider ,signOut} from "firebase/auth";
import { onAuthStateChanged } from "firebase/auth";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
  indicator: {
    top: "8px",
  },
});

const StyledTabs = styled((props) => (
  <Tabs
    {...props}
    TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
  />
))({
  "& .MuiTabs-indicator": {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "transparent",
  },
  "& .MuiTabs-indicatorSpan": {
    maxWidth: 20,
    width: "100%",
    height: 3,
    backgroundColor: "#26CE8D",
  },
});

const StyledTab = styled((props) => <Tab disableRipple {...props} />)(
  ({ theme }) => ({
    textTransform: "none",
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: theme.typography.pxToRem(13),
    marginRight: theme.spacing(1),

    color: "white",
    "&.Mui-selected": {
      color: "#26CE8D",
    },
    "&.Mui-focusVisible": {
      backgroundColor: "rgba(100, 95, 228, 0.32)",
    },
  })
);

export default function Header() {
  const history = useHistory();
  const user = getAuth();
  const provider = new GoogleAuthProvider();
  const dispatch = useDispatch();
  const classes = useStyles();
  const [tabValue, setTabValue] = React.useState(1);
  const [userAuth, setUserAuth] = React.useState(false);



  const handleChange = (event, newValue) => {
    setTabValue(newValue);
    dispatch(toggleTab(newValue));
    
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
 
  const handleClickEvaluation = () => {
 

    history.push("/studentevaluation")
  
  };

  const handleClickList = () => {
 
    history.push("/")
  
  };


  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popper' : undefined;

  const handleClose = () => {
    setAnchorEl(null);
  };

  function buttonGoogle() {

    const auth = getAuth();
    signInWithPopup(auth, provider)
      .then((result) => {


      }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        alert(errorCode, errorMessage, email);

        //   const credential = GoogleAuthProvider.credentialFromError(error);

        // ...
      });
  }


  React.useEffect(() => {
    onAuthStateChanged(auth, (user) => {


      if (user) {
      
        
        setUserAuth(true);
      } else {
        setUserAuth(false);
      }
    });



  });

  const buttonLogout = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        alert("Sign Off Successfully");
      })
      .catch((error) => {
        // An error happened.
      });
  };

  return (
    <Box>
      <AppBar position="static" sx={style.appbar}>
        <Toolbar>
          <Typography sx={style.logoTypography}>Student Review</Typography>
          <img src={icon} alt="asd" />
          <Box sx={{ display: "flex", flexGrow: 0.9 }} />
          <Box sx={style.tabs}>

            <StyledTabs
              centered
              value={tabValue}
             onChange={handleChange}
              aria-label="styled tabs example"
              classes={{
                indicator: classes.indicator,
              }}
            >
              <StyledTab label="Student List" value={1} onClick={handleClickList}/>
              <StyledTab label="Student Evaluation" value={2} onClick={handleClickEvaluation}/>
              <StyledTab label="Blog" value={3} />
            </StyledTabs>



          </Box>
          <Box sx={{ display: "flex", flexGrow: 0.5 }} />
          <Box sx={{ display: "flex", flexGrow: 0.5 }} />

          <IconButton
            onClick={handleClick}
            color="inherit"
            edge="end"
            aria-haspopup="true">
            <AccountCircleOutlinedIcon sx={{ fontSize: 28 }} />
          </IconButton>


          <Popover
            sx={style.popover}
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
          >
            {!userAuth ? <Box sx={style.boxPopover}>
                <Typography variant="h6" >Sign In</Typography>
                <Typography sx={{ p: 2 }}>Sign in to review and rate the Student</Typography>
                <IconButton onClick={buttonGoogle}><Avatar src={googleIcon} /></IconButton>
              </Box>
              :
              <Box sx={style.boxPopover}>
              <Typography variant="h6" >Hi {user.email}</Typography>
              <Typography sx={{ p: 2 }}>Sign in to review and rate the Student</Typography>
              <Button onClick={buttonLogout}>Logout</Button>
            </Box>
        

            }

          </Popover>


          <Paper
            component="form"
            sx={{
              mr:2,
              ml:2,
              display: "flex",
              alignItems: "center",
              width: "237px",
            }}
          >
            <IconButton aria-label="menu">
              <SearchOutlinedIcon />
            </IconButton>
          </Paper>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
