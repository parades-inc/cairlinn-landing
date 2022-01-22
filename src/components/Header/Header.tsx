import {Box, IconButton, MenuItem, Typography, Menu, Button} from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import MenuIcon from '@mui/icons-material/Menu';
import {FC} from 'react';
import logo from '../../assets/images/CairlinnBayLogo.png';
import './header.css';


export const Header: FC = () => {
  return (
    <header>
      <AppBar className='app-bar' position='relative'>
        <Toolbar className='app-bar-toolbar'>
          <Box flexGrow={1}>
            <img className='logo' src={logo}/>
          </Box>
          <Box display={'flex'} justify-content={'flex-end'}>
            <Button>Our Story</Button>
            <div className={'pipe-spacer'}/>
            <Button>News</Button>
            <Button color='primary' variant={'contained'}>Join Us</Button>
          </Box>
        </Toolbar>
      </AppBar>
    </header>
  );
};
