import {Box, Button} from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import {FC} from 'react';
import logo from '../../assets/images/CairlinnBayLogo.png';
import './header.css';
import {HashLink} from 'react-router-hash-link';


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
          <HashLink to='/#our-story'>
            <Button>Our Story</Button>
          </HashLink>
          <HashLink to='/#our-whiskey'>
            <Button>Our Whiskey</Button>
          </HashLink>
          <HashLink to='/#our-cocktails'>
            <Button>Our Cocktails</Button>
          </HashLink>
          <Box className={'pipe-spacer'} sx={{
            width: '1px',
            height: '100%',
            background: '#FAF7ED',
            opacity: 0.2
          }}/>
          <HashLink to='/#news'>
            <Button>News</Button>
          </HashLink>
          <HashLink to='/#joinus'>
            <Button color='primary' variant={'contained'}>Join Us</Button>
          </HashLink>
        </Box>
      </Toolbar>
    </header>
  );
};
