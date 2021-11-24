
const theme = (isDarkMode) => ({

  palette: {
      mode: isDarkMode ? 'light' : "dark",
      primary: {
        main: "#26CE8D",
      },
      secondary: {
        main: '#E03E65',
      },
    },
});

export default theme;