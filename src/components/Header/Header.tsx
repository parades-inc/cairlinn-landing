import {Box, Button, Hidden, IconButton, List, ListItem, ListItemButton, ListItemText} from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Drawer from '@mui/material/Drawer';
import {FC, useState} from 'react';
import logo from '../../assets/images/CairlinnBayLogo.png';
import './header.css';
import {HashLink} from 'react-router-hash-link';
import MenuIcon from '@mui/icons-material/Menu';

const links = [
  {
    name: 'Home',
    to: '/#hero'
  },
  {
    name: 'Our Story',
    to: '/#our-story'
  },
  {
    name: 'Our Whiskey',
    to: '/#our-whiskey'
  },
  {
    name: 'Our Cocktails',
    to: '/#our-cocktails'
  },
  {
    name: 'News',
    to: '/#news'
  }
];


export const Header: FC = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  return (
    <header>
      <Toolbar className='app-bar-toolbar' sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '20px',
      }}>
        <Box sx={{ display: 'flex' }}>
          <Hidden mdUp>
            <IconButton onClick={() => setDrawerOpen(!drawerOpen)}>
              <MenuIcon/>
            </IconButton>
          </Hidden>
          <Box
            component={'img'}
            src={logo}
            sx={{
              maxWidth: { xs: '75px', md: '125px', lg: '150px' },
              marginLeft: { xs: '10px', md: '0' }
            }}
          />
        </Box>
        <Box display={'flex'} alignItems={'flex-end'}>
          <Hidden mdDown>
            {
              links.map(({name, to}) => (
                <HashLink key={name} to={to}>
                  <Button>{name}</Button>
                </HashLink>
              ))
            }

            <Box className={'pipe-spacer'} sx={{
              width: '1px',
              height: '100%',
              background: '#FAF7ED',
              opacity: 0.2
            }}/>
            <HashLink to='/#news'>
              <Button>News</Button>
            </HashLink>
          </Hidden>
          <a href='https://jensensliquors.com/cairlinn-bay-oak-coast-rye-cask-finish-irish-whiskey.html'>
            <Button color='primary' variant={'contained'}>Buy Now</Button>
          </a>
        </Box>
      </Toolbar>
      <Drawer
        anchor={'left'}
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        sx={{
          '& .MuiDrawer-paper': {
            backgroundColor: '#211F1D',
          }
        }}
      >
        <List>
          {
            links.map(({name, to}) => (
              <HashLink key={name} to={to} onClick={() => setDrawerOpen(false)}>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemText primary={name} />
                  </ListItemButton>
                </ListItem>
              </HashLink>
            ))
          }
        </List>
      </Drawer>
    </header>
  );
};
