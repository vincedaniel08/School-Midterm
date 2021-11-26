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
} from "@mui/material";

import { useDispatch } from 'react-redux'
import { toggleTab } from '../redux/actions/uiAction'

import icon from "../assets/image/Gridicon.png";
import style from "../style/header";
import { makeStyles } from "@mui/styles";
import { styled } from "@mui/material/styles";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

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

  const dispatch = useDispatch();
  const classes = useStyles();
  const [tabValue, setTabValue] = React.useState(1);

  const handleChange = (event, newValue) => {
    setTabValue(newValue);
    dispatch(toggleTab(newValue));
  };

  return (
    <Box>
      <AppBar position="static" sx={style.appbar}>
        <Toolbar>
          <Typography sx={style.logoTypography}>Student Review</Typography>
          <img src={icon} alt="asd" />
          <Box sx={{ display: "flex", flexGrow: 0.9 }} />
          <Box>
        
              <StyledTabs
                centered
                value={tabValue}
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
          <AccountCircleOutlinedIcon sx={{ fontSize: 28 }} />
          <Paper
            component="form"
            sx={{
              mx: 5,
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
