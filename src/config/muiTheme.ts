import { CenterFocusStrong } from '@mui/icons-material';
import createTheme from '@mui/material/styles/createTheme';
import Input from '@mui/material/Input';
import FilledInput from '@mui/material/FilledInput';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#327371',
    },
  },
  typography: {
    allVariants: {
      color: '#FAF7ED',
      fontFamily: ['\'CitrusGothicSolid-Regular\'', '\'DIN Condensed\'', 'Roboto'].join(','),
      padding: 0,
    },
    h1: {
      '@media (max-width:600px)': {
        fontSize: 40
      },
    }
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
          fontFamily: ['\'DIN Condensed\''].join(','),
          '@media (max-width:786px)': {
            fontSize: 16,
            padding: '8px 10px 4px 10px',
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          backgroundColor: 'grey', // needs to be black but then text doesnt appear
          borderRadius: 5,
          '::placeholder' : {
            color: '#327371'
          },
          marginBottom: 10
        },
      },
    },
  },
});
