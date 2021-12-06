const style = {
  root: {
    fontFamily: 'Roboto',
    backgroundColor: "#131414"
  },
  box: {
    display: "block",
    mx: {
      xs: 2,
      sm: 6,
      md: 15,
      lg: 25,
    },
  },

  studenttitlename: {
    color: '#D1D4C9',
    fontSize: '24px',
  },

  boxFilter: {
    mt: 7,
    mb: 2,
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "right",
    textAlign: "right"
  },
  boxFilterTypog: {
    fontSize: 14,
    mx: 2,
    color:"#D1D4C9"
  },

  select: {
    height: 30,
    p: 0.5,
    fontSize: 13,
    color: '#D1D4C9',
    border: '1px solid #303336',
  },
  formcontrol: {
    minWidth: 100,

  },
  paper: {
    p: 2,
    margin: 'auto',
    width: { xs: 400, md: 800 },
    boxShadow: '4px 4px 20px rgba(0,0,0,0.4)',
    alignItems: 'center',
    padding: '30px',
    flexGrow: 1,
    backgroundColor: '#1E1F20',

  },
  listText: {
    fontSize: {
      xs: 13,
      sm: 14,
      md: 15,
    },

    fontWeight: "medium",
    letterSpacing: 0,
    mr: 5,
  },
  rating: {
    fontSize: {
      xs: 10,
      sm: 20,
      md: 25,
    },
    mr: 2,
    color: '#26CE8D',
    mt: '15px',
  },
  boxLeftProfile: {
    display: "flex",
    width: 250,
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center"
  },
  leftProfileValue: {
    fontSize: {
      xs: 10,
      sm: 11,
      md: 14,
    },
    color: '#D1D4C9',
  },
  leftProfileTypography: {
    fontSize: {
      xs: 9,
      sm: 10,
      md: 12,
    },
    mx: 1,
    color: '#D1D4C9',
  },
  boxRightProfile: {
    display: "block",
    width: 700,
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    border: 1
  },
  rightBoxProfileName: {
    display: "flex",
    justifyContent: "left",
    alignItems: "center",
    textAlign: "left",
    border: 1,
    mx: 10

  },
  rightProfileName: {

    fontSize: {
      xs: 15,
      sm: 17,
      md: 20,
    },
    mr: 1,
  },
  boxRightScoreRed: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    backgroundColor: "red",
    borderRadius: 1,
    mb: .5,

    height: 20,
    width: 30
  },

  boxRightScoreGreen: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    backgroundColor: "green",
    borderRadius: 1,
    mb: .5,

    height: 20,
    width: 30
  },
  rightProfileDetails: {

    fontSize: {
      xs: 11,
      sm: 13,
      md: 15,
    },
    mr: 1,
  },
  boxRightScore: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    backgroundColor: "red",
    borderRadius: 1,
    mb: .5,

    height: 20,
    width: 30
  },
  boxAddRatingBox: {

    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    boxShadow: 1,
    m: 5,
    color: '#D1D4C9',


  },
  boxAddRating: {

    display: "block",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    
  },
  addRating: {
    fontSize: {
      xs: 25,
      sm: 30,
      md: 40
    },
    my: 2,
    color: '#26CE8D',
  },

  showRating: {

    top: 28,
    right: 0,
    left: 0,
    zIndex: 1,
    //border: '1px solid',
    bgcolor: '#1E1F20',
    display: "block",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    boxShadow: '4px 4px 20px rgba(0,0,0,0.4)',
    padding: 5,
  },

  showComment: {
    color: '#D1D4C9',
    top: 28,
    right: 0,
    left: 0,
    zIndex: 1,
    //border: '1px solid',
    my: 1,
    bgcolor: '#2C2F31',
    display: "block",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "left",
    boxShadow: 2,
    padding: 2,
    "& .MuiOutlinedInput-root":{
      backgroundColor: '#131414',
      color: '#D1D4C9',
    },
  },

  inputcomment: {
    "& .MuiOutlinedInput-root":{
      backgroundColor: '#131414',
      color: '#D1D4C9',
    },
  },

  boxAllRating: {
    my: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    textAlign: "center",



  },

  commentbox: {
    
      backgroundColor: '#131414',
    border: '1px solid #303336',
    color: '#D1D4C9',
    
  },

 
  allRatingTypography: {
    color: '#D1D4C9',
    fontSize: '14px',
    mr: 10
  },
  commentIconTypogpraphy: {
    fontSize: 12,
    mx: 1
  },

};

export default style;
