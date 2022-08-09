import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import './index.css';
import App from './App';
import { theme } from './config/muiTheme';
import { ThemeProvider } from '@mui/material/styles';


ReactDOM.render(
  <>
    <CssBaseline/>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </>,
  document.getElementById('root')
);


