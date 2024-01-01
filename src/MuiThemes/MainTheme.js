import createTheme from "@material-ui/core/styles/createTheme";

const theme = createTheme({
  overrides: {
    MuiTooltip: {
      tooltip: {
        fontSize: "13px",
      }
    }
  },

  palette: {
    type: "light",

    primary: {
      main: "#61AEE9",
    },

    secondary: {
      main: "#404040",
    },

    text: {
      primary: '#000',
      secondary: '#61AEE9'
    },

    background: {
      paper: '#E0EDF7',
      default: '#303030'
    },

    action: {
      active: '#979797',
      selected: '#a8c4f9',
      hover: '#61AEE9',
    }
  },

  typography: {
    htmlFontSize: 16,
    fontFamily: '"Sansation Light", "Roboto", "Helvetica", "Arial", sans-serif',
    fontSize: 13
  },
});

export default theme;

