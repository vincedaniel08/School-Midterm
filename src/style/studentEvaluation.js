

const style = {
  root: {

    bgcolor:"white"
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

  boxFilter: {
    mt: 7,
    mb: 2,
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "right",
    textAlign:"right"
  },
  boxFilterTypog: {
    fontSize: 14,
    mx:2
  },
 
  select: {
    height: 30,
    p: 0.5,
    fontSize: 13,
  },
  formcontrol: {
    minWidth: 100,
  
  },
  paper: {
    p: 2,
    margin: 'auto', 
    width: { xs: 400, md: 900 },
   flexGrow: 1,
   

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

  },
  leftProfileTypography: {
    fontSize: {
      xs: 9,
      sm: 10,
      md: 12,
    },
    mx: 1

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
  rightProfileDetails: {

    fontSize: {
      xs: 11,
      sm: 13,
      md: 15,
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
  boxAddRatingBox: {
 
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    boxShadow: 1,
    m: 5,

  },
  boxAddRating: {

    display: "block",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    boxShadow: 1,


  },
  addRating: {
    fontSize: {
      xs: 25,
      sm: 30,
      md: 40
    },
    my: 2,
  },

  showRating: {

    top: 28,
    right: 0,
    left: 0,
    zIndex: 1,
    //border: '1px solid',
    //bgcolor: 'background.paper',
    display: "block",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    boxShadow: 10,
    padding: 5,
  },
  
  showComment: {

    top: 28,
    right: 0,
    left: 0,
    zIndex: 1,
    //border: '1px solid',
    my:1,
  //  bgcolor: 'background.paper',
    display: "block",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "left",
    boxShadow: 2,
    padding: 2,
  },
  boxAllRating: {
    my: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    textAlign: "center",



  },
  allRatingTypography: {
 
    mr: 10
  },
  commentIconTypogpraphy:{
    fontSize:12,
    mx:1
  },

};

export default style;
