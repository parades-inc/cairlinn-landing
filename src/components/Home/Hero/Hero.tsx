import {FC} from 'react';
import './hero.css';
import heroImage from '../../../assets/images/hero.png';
import whiskeyBottle from '../../../assets/images/whiskey-bottle.png';
import {Box, Button, Grid, Hidden, Typography} from '@mui/material';



export const Hero: FC = () => {
  return (
    <div id='hero'>
      <Box className='hero-container'>
        <img className='hero-background' src={heroImage}/>
        <div className='hero-text'>
          <Hidden smDown>
            <Typography variant='h1'>
              Pioneering<br/>
              Irish<br/>
              Whiskey<br/>
            </Typography>
          </Hidden>
          <Hidden smUp>
            <Typography variant='h1'>
              Pioneering Irish Whiskey
            </Typography>
          </Hidden>
          <Button variant='contained'>
            Explore
          </Button>
        </div>
        <img className={'whiskey-bottle'} src={whiskeyBottle}/>
      </Box>
    </div>
  );
};
