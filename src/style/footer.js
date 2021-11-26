const style = {
    root: {
        display: "block",
        flexDirection:"row",
        alignItems: "center",
        justifyContent: "center",
        boxShadow:1,
        position: "static",
        left: 0,
        mt:20,
        bottom: 0,
        width: "100%",
       // backgroundColor: (theme) => theme.palette.background.default,
       backgroundColor: "gray"
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
  