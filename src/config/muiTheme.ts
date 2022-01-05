import createTheme from "@mui/material/styles/createTheme";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#327371"
    }
  },
  typography: {
    allVariants: {
      color: 'white',
      fontFamily: [
        "'DIN Condensed'",
        'Roboto'
      ].join(','),
      padding: 0
    },

  },
  components: {
    // Name of the component
    MuiButton: {
      styleOverrides: {
        root: {
          color: '#FAF7ED',
          fontSize: 24,
          padding: '16px 20px 8px 20px',

          fontStyle: 'normal',
          fontWeight: 'bold',
          fontFamily: [
            "'DIN Condensed'",
          ].join(','),
        },
      },
    },
  },
});
