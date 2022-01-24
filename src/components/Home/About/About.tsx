import {FC} from 'react';
import pots from '../../../assets/images/pots.png';
import whiskeyField from '../../../assets/images/field-whiskey.png';
import barrels from '../../../assets/images/barrels.png';
import './about.css';
import {Box, Typography} from '@mui/material';


export const About: FC = () => {
  return (
    <Box id='about' sx={{
      margin: '75px auto'
    }}>
      <Box className={'about-text'} sx={{
        padding: { xs: '33px 65px', lg: '65px calc((100vw - 1440px) / 2)px' },
        maxWidth: '1440px',
        margin: '0 auto'
      }}>
        <Typography variant='h1'>
          Authentic<br/>
          Approachable Irish<br/>
          Whiskey<br/>
        </Typography>
      </Box>
      <Box className={'carousel'} sx={{
        padding: { xs: '0 0 0 65px', lg: '0 calc((100vw - 1440px) / 2)px' },
        overflowX: 'scroll',
        display: 'flex',
        gap: { xs: '20px', md: '50px' },
        flexWrap: 'nowrap',
        '&::-webkit-scrollbar': {
          display: 'none'
        },
        '& img': {
          borderRadius: '16px',
          marginBottom: { xs: '12px', md: '25px' },
          maxHeight: { xs: '20vh', sm: '30vh', md: '50vh'}
        }
      }}>
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
        <Box className={'right-buffer'} sx={{
          padding: { xs: '33px', md: '65px' },
          minHeight: '100%'
        }}/>
      </Box>
    </Box>
  );
};
