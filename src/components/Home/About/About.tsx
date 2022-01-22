import {FC} from 'react';
import pots from '../../../assets/images/pots.png';
import whiskeyField from '../../../assets/images/field-whiskey.png';
import barrels from '../../../assets/images/barrels.png';
import './about.css';
import {Box, Button, Grid, Typography} from '@mui/material';


export const About: FC = () => {
  return (
    <div id='about'>
      <Box className={'about-text'}>
        <Typography variant='h1'>
          Authentic<br/>
          Approachable Irish<br/>
          Whiskey<br/>
        </Typography>
      </Box>
      <Box className={'carousel'}>
        <Box>
          <img src={pots}/>
          <Typography variant={'h6'}>Pot Still Process</Typography>
        </Box>
        <Box>
          <img src={whiskeyField}/>
          <Typography variant={'h6'}>Buttery and toasted vanilla Irish Whiskey</Typography>
        </Box>
        <Box>
          <img src={barrels}/>
          <Typography variant={'h6'}>Virgin Oak Barrels</Typography>
        </Box>
        <div className={'right-buffer'}></div>
      </Box>
    </div>
  );
};
