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

  logoTypography: {
    fontWeight: 400,
    fontSize: 24,
    fontFamily: 'Roboto',
    color: '#D1D4C9',
    mx: 2.5,
    display: {
      xs: "none",
      md: "flex"
    }
  },

  appbar: {
    backgroundColor: '#1E1F20',
  },

  boxPopover: {
    display: "block",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    maxWidth: 250,
    mx: 5,
    my: 2,
  },

  popover: {
    mt: 7,
    ml: -15
  },

  tabs: {
    display: {
      xs: "none",
      md: "flex"
    },
    fontSize:"16px",
    fontWeight: 400,

    
  },
  link:{
    lineHeight:"20px",
    fontSize:"14px",
    fontWeight: 400,
    color:"white"
   
  },
  linkContainer:{
    display: "flex",
    flexDirection:"column",
    alignItems: "center",
    mr:8
  
  },
  indicator:{
    mb:.5,
    height: "3px",
    width: "18px",
    backgroundColor:"#26CE8D",
    borderRadius:3
  },

};

export default style;
