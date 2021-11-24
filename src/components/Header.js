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

import style from "../style/header";
import { makeStyles } from "@mui/styles";
import { styled } from "@mui/material/styles";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
const useStyles = makeStyles({
  indicator: {
    top: "0px",
    
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
    maxWidth: 40,
    width: "100%",
    backgroundColor: "#26CE8D",
  },
});

const StyledTab = styled((props) => <Tab disableRipple {...props} />)(
  ({ theme }) => ({
    textTransform: "none",
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: theme.typography.pxToRem(15),
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
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box >
      <AppBar position="static" sx={style.appbar}>
        <Toolbar>
          <Typography sx={style.logoTypography}>Student Review</Typography>
          <Box sx={{ display: "flex", flexGrow: .9 }} />
          <Box >
            <StyledTabs
              centered
              value={value}
              onChange={handleChange}
              aria-label="styled tabs example"
              classes={{
                indicator: classes.indicator,
              }}
            >
              <StyledTab label="Student List" />
              <StyledTab label="Student Evaluation" />
              <StyledTab label="Blog" />
            </StyledTabs>
          </Box>
          <Box sx={{ display: "flex", flexGrow: 0.5 }} />
          <AccountCircleOutlinedIcon />
          <Paper
            component="form"
            sx={{
              mx:5,
              display: "flex",
              alignItems: "center",
              width: "237px",
            }}
          >
            <IconButton  aria-label="menu">
              <SearchOutlinedIcon />
            </IconButton>
            
          </Paper>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
