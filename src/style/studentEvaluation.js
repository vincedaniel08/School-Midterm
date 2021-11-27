const style = {
  root: {
    mt: -12,
    mx: {
      xs: 1,
      sm: 2,
      md: 3,
      lg: 9,
    },
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
    justifyContent: "right",
  },
  boxFilterTypog: {
    fontSize: 14,
  },
  boxCategory: {
    display: "flex",
    flexDirection: "row",
    alignItems: "right",
    justifyContent: "right",
    ml: {
      xs: 0,
      md: 10,
    },
  },
  select: {
    height: 30,
    p: 0.5,
    fontSize: 13,
  },
  formcontrol: {
    minWidth: 100,
    mx: 2,
  },
  paper: {
    p: 2, margin: 'auto', width:{xs:330,md:900},flexGrow: 1 
  
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
      sm: 15,
      md: 30,
    },
    mr: 2,
  },
  boxLeftProfile:{
      display:"flex",
      width:250,
      alignItems: "center",
      justifyContent: "center",
      textAlign:"center"
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
    mx:1

  },
  boxRightProfile:{
    display:"block",
    width:700,
    alignItems: "center",
    justifyContent: "center",
    textAlign:"center",
    border:1
},
    rightBoxProfileName:{
        display:"flex",
        justifyContent: "left",
        alignItems: "center",
        textAlign:"left",
        border:1,
        mx:10
        
    },
  rightProfileName:{
    
    fontSize: {
        xs: 15,
        sm: 17,
        md: 20,
      }, 
      mr:1,
  },
  rightProfileDetails:{
    
    fontSize: {
        xs: 11,
        sm: 13,
        md: 15,
      }, 
      mr:1,
  },
  boxRightScore:{
      display:"flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign:"center",
    backgroundColor:"red",
    borderRadius:1,
    mb:.5,

    height:20,
    width:30
  },
};

export default style;
