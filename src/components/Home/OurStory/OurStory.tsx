import {FC} from 'react';
import whiskeyCoast from '../../../assets/images/whiskey-coast.png';
import longitude from '../../../assets/images/coords_longitude.png';
import latitude from '../../../assets/images/coords_latitude.png';
import waves from '../../../assets/images/wave-lines.png';
import './ourStory.css';
import {Box, Grid, Typography} from '@mui/material';


export const OurStory: FC = () => {
  return (
    <Box id='our-story' sx={{
      backgroundImage: `url(${waves})`,
      backgroundPosition: 'bottom',
      backgroundRepeat: 'no-repeat',
      backgroundSize: '100%',
      marginTop: { xs: '150px' },
      marginBottom: { xs: '150px' }
    }}>
      <Box
        component="img"
        sx={{
          position: 'absolute',
          marginTop: { xs: '50px', md: '100px'},
          left: { xs: '18px', md: '37px'},
          height: { xs: '25%', md: '45%'}
        }}
        alt="The house from the offer."
        src={longitude}
      />
      <Box className={'our-story-container'}
        sx={{
          maxWidth: '1440px',
          margin: '0 auto'
        }}
      >
        <Grid container justifyContent={'center'} alignItems={'center'} spacing={4}>
          <Grid item xs={10} md={5} sx={{
            display: { xs: 'none', md: 'flex'}
          }}>
            <Box
              component="img"
              sx={{
                maxWidth: { xs: '100%'},
              }}
              alt="Whisky Bottle Coastline"
              src={whiskeyCoast}
            />
          </Grid>
          <Grid item xs={8} md={6}>
            <Box className='content'>
              <Typography variant='h1'>
                Our<br/>
                Story<br/>
              </Typography>
              <Typography variant={'body1'}>
                We believe our whiskey should not be bound by rules and regulations or shackled to history and convention.
                <br/>
                <br/>
                Our whiskey comes from the originality of the people who make it and the people who drink it. True to the Irish spirit that the future holds more than the past and that anything is possible.
                <br/>
                <br/>
                We are proud of our traditions right enough, but we are driven to build on them, looking for ways to craft whiskey that is inspiring, diverse and above all enjoyable.
                <br/>
                <br/>
                Ours is a pioneering Irish spirit.
              </Typography>
            </Box>
            <Box
              component="img"
              sx={{
                position: 'absolute',
                marginTop: { xs: '50px', md: '100px'},
                height: { xs: '50px', md: '80px'},
                right: { xs: '18px', md: '37px'},
              }}
              alt="The house from the offer."
              src={latitude}
            />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};
