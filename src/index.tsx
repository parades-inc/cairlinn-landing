import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter} from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import './index.css';
import App from './App';
import { theme } from './config/muiTheme';
import { ThemeProvider } from '@mui/material/styles';


ReactDOM.render(
  <>
    <CssBaseline/>
    <ThemeProvider theme={theme}>
      <HashRouter>
        <App />
      </HashRouter>
    </ThemeProvider>
  </>,
  document.getElementById('root')
);


