import createMuiTheme from "@material-ui/core/styles/createMuiTheme";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#61AEE9",
    },
    secondary: {
      main: "#404040",
    },
  },

  typography: {
    htmlFontSize: 16,
    fontFamily: '"Sansation Light", "Roboto", "Helvetica", "Arial", sans-serif',
    fontSize: 13
  },
});

export default theme;

