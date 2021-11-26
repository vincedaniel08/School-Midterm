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
    mb:2,
    display: "flex",
    alignItems: "center",
    justifyContent: "right",
  },
  boxFilterTypog: {
    fontSize: 14,
  },
  boxCategory:{
    display: "flex",
    flexDirection:"row",
    alignItems: "right",
    justifyContent: "right",
    ml:{
      xs:0,
      md:10
    }
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
    p: 2,
    margin: "auto",
    maxWidth: 500,
    flexGrow: 2,
  },
  listText:{
    fontSize: {
      xs:13,
      sm:14,
      md:15
  },

  fontWeight: "medium",
  letterSpacing: 0,
  mr:5
  },
  rating: {
    fontSize: {
      xs:10,
      sm:15,
      md:20
  },
    mr: 2,
  },
};

export default style;
