import {FC} from 'react';
import './hero.css';
import heroImage from '../../../assets/images/hero.png';
import {Box, Button, Grid, Hidden, Typography} from '@mui/material';



export const Hero: FC = () => {
  return (
    <div id='hero'>
      <Box className='hero-container'>
        <img className='hero-background' src={heroImage}/>
        <div className='hero-text'>
          <Typography variant='h1' sx={{ display: { xs:'none', sm: 'none', md: 'flex' } }}>
            Pioneering<br/>
            Irish<br/>
            Whiskey<br/>
          </Typography>
          <Typography variant='h1' sx={{ display: { sm: 'flex', md: 'none' } }}>
            Pioneering Irish Whiskey
          </Typography>
          <Box pt={4}>
            <Button variant='contained'>
              Explore
            </Button>
          </Box>
        </div>
      </Box>
    </div>
  );
};
