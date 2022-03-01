import {Box, Button} from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import {FC} from 'react';
import logo from '../../assets/images/CairlinnBayLogo.png';
import './header.css';


export const Header: FC = () => {
  return (
    <header>
      <Toolbar className='app-bar-toolbar' sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '25px',

      }}>
        <Box>
          <Box
            component={'img'}
            src={logo}
            sx={{
              maxWidth: { xs: '75px', md: '125px', lg: '150px' }
            }}
          />
        </Box>
        <Box display={'flex'} alignItems={'flex-end'}>
          <a href='#our-story'>
            <Button>Our Story</Button>
          </a>
          <Box className={'pipe-spacer'} sx={{
            width: '1px',
            height: '100%',
            background: '#FAF7ED',
            opacity: 0.2
          }}/>
          <a href='#news'>
            <Button>News</Button>
          </a>
          <a href='#joinUs'>
            <Button color='primary' variant={'contained'}>Join Us</Button>
          </a>
        </Box>
      </Toolbar>
    </header>
  );
};
