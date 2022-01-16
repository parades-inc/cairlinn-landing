import {FC} from 'react';
import './hero.css';
import heroImage from '../../../assets/images/hero.png';
import whiskeyBottle from '../../../assets/images/whiskey-bottle.png';
import {Box, Button, Grid, Typography} from '@mui/material';


export const Hero: FC = () => {
  return (
    <div id='hero'>
      <Box className='hero-container'>
        <img className='hero-background' src={heroImage}/>
        <Grid container justifyContent={'center'}>
          <Grid item xs={12} md={6} lg={4}>
            <Typography className='hero-text' variant='h1'>
              Pioneering<br/>
              Irish<br/>
              Whiskey<br/>
              <Button variant='contained'>
                Explore
              </Button>
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}  lg={4}>
            <img className={'whiskey-bottle'} src={whiskeyBottle}/>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};
