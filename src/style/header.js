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
    fontSize: 20,
    mx: 2.5,
    display:{
      xs:"none",
      md:"flex"
    }

  },

  appbar: {
    backgroundColor: '#1E1F20',
  },
  boxPopover: {
   // bgcolor: 'background.paper',
    display: "block",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
   maxWidth:250,
    mx:5,
    my:2,
    

  },
  popover: {
    mt: 7,
    ml: -15

  },
  tabs:{
    display:{
      xs:"none",
      md:"flex"
    }
  },

};

export default style;
