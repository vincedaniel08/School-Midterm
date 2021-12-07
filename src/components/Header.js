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
  Button,
  Menu,
  MenuItem
} from "@mui/material";


import { useDispatch } from 'react-redux'
import { toggleTab } from '../redux/actions/uiAction'
import { toggleProfile } from '../redux/actions/userAction'
import { useSelector } from "react-redux";

import googleIcon from "../assets/image/google.png";
import icon from "../assets/image/Gridicon.png";
import style from "../style/header";
import { makeStyles } from "@mui/styles";
import { styled } from "@mui/material/styles";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

import { auth } from "../utils/firebase";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
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
    fontWeight: 500,
    fontSize: '14px',
    marginRight: theme.spacing(1),
    fontFamily: 'Roboto',
    color: '#D1D4C9',
    "&.Mui-selected": {
      color: "#26CE8D",
    },
    "&.Mui-focusVisible": {
      backgroundColor: "rgba(100, 95, 228, 0.32)",
    },
  })
);

export default function Header() {
  const state = useSelector((state) => state.user);
  const stateui = useSelector((state) => state.ui);
  const history = useHistory();
  const provider = new GoogleAuthProvider();
  const dispatch = useDispatch();
  const classes = useStyles();
  const [userAuth, setUserAuth] = React.useState(false);
  const [openMenu, setOpenMenu] = React.useState(false);


  const handleChange = (event, newValue) => {

    dispatch(toggleTab(newValue));
    if (newValue === 1) {
      history.push("/")
    } else {
      history.push("/studentevaluation?student=Vince%20Daniel%20De%20Leon")
    }

  };

  const [anchorEl, setAnchorEl] = React.useState(null);




  const handleClick = (event) => {

    dispatch(toggleProfile(true));

  };

  const open = state.profile;
  const id = open ? 'simple-popper' : undefined;

  const handleClose = () => {
    setAnchorEl(null);
    dispatch(toggleProfile(null));
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
        history.push("/")
      })
      .catch((error) => {
        // An error happened.
      });
  };

  const handleMenu = () => {
    setOpenMenu(true)
  }
  const handleCloseMenu = () => {
    setOpenMenu(false);
  };
  const handleGotoList = () => {
    setOpenMenu(false)
    history.push("/")
    dispatch(toggleTab(1));
  };

  const handleGotoEvaluation = () => {
    setOpenMenu(false)
    history.push("/studentevaluation?student=Vince%20Daniel%20De%20Leon")
    dispatch(toggleTab(2));
  };


  return (
    <Box>
      <AppBar position="static" sx={style.appbar}>
        <Toolbar>
          <Typography sx={style.logoTypography}>Student Review</Typography>
          <img src={icon} alt="asd" onClick={handleMenu} />
          <Box sx={{ mt: 5 }}>
            <Menu open={openMenu}
              onClose={handleCloseMenu}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'left',

              }}

            >
              <MenuItem onClick={handleGotoList}>Student List </MenuItem>
              <MenuItem onClick={handleGotoEvaluation}>Student Evaluation</MenuItem>

            </Menu>
          </Box>
          <Box sx={{ display: "flex", flexGrow: 0.9 }} />
          <Box sx={style.tabs}>

            <StyledTabs
              centered
              value={stateui.tab}
              onChange={handleChange}
              aria-label="styled tabs example"
              classes={{
                indicator: classes.indicator,
              }}
            >
              <StyledTab label="Student List" value={1} />
              <StyledTab label="Student Evaluation" value={2} />
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
                <Typography variant="h6" >Hi</Typography>
                <Typography sx={{ p: 2 }}>Welcome, Student Review</Typography>
                <Button onClick={buttonLogout}>Logout</Button>
              </Box>


            }

          </Popover>


          <Paper
            component="form"
            sx={{
              mr: 2,
              ml: 2,
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
