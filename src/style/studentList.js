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
      md: 10
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
    backgroundColor: '#1E1F20',
    boxShadow: '4px 4px 20px rgba(0,0,0,0.4)',
    border: '1px solid #303336',
    p: 2,
    margin: 'auto',
    mx: 2,
    my: 2,
    flexGrow: {
      xs: 1,
      sm: 0,
      md: 0,
      lg: 1
    },


  },

  paperTitle: {
    p: 2,


    width: {
      xs: 340,
      md: 300
    },
    flexGrow: 2,
    backgroundColor: "transparent"
  },

  listText: {
    fontSize: {
      xs: 13,
      sm: 14,
      md: 15
    },

    fontWeight: "medium",
    letterSpacing: 0,
    mr: 5
  },
  rating: {
    fontSize: {
      xs: 10,
      sm: 15,
      md: 20
    },
    mr: 2,
  },

  cardname: {
    fontSize: '14px',
    fontWeight: 500,
    color: '#D1D4C9',
    maxWidth:150,
  },

  cardreview: {
    fontSize: '14px',
    color: '#62666D',
  },
};

export default style;
