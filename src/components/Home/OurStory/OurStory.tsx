import {FC} from 'react';
import whiskeyCoast from '../../../assets/images/whiskey-coast.png';
import longitude from '../../../assets/images/coords_longitude.png';
import latitude from '../../../assets/images/coords_latitude.png';
import waves from '../../../assets/images/wave-lines.png';
import './ourStory.css';
import {Box, Grid, Typography} from '@mui/material';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import heroVideo from '../../../assets/videos/hero-video.mp4';


export const OurStory: FC = () => {

  return (
    <Box id='our-story' sx={{
      backgroundImage: `url(${waves})`,
      backgroundPosition: 'bottom',
      backgroundRepeat: 'no-repeat',
      backgroundSize: '100%',
      marginTop: { xs: '150px' },
      marginBottom: { xs: '100px' }
    }}>
      <Box
        component="img"
        sx={{
          position: 'absolute',
          marginTop: { xs: '0px'},
          left: { xs: '18px', md: '37px'},
          height: { xs: '25%', md: '25%'},
          maxWidth: { xs: '90vw', xl: '1440px' },
          zIndex: -10
        }}
        alt=""
        src={longitude}
      />
      <Box className={'our-story-container'}
        sx={{
          maxWidth: { xs: '90vw', xl: '1440px' },
          margin: '0 auto',
        }}
      >
        <Box sx={{
          position: 'relative',
          display: 'flex',
          justifyContent: 'center'
        }}>
          <Box component={'video'} autoPlay playsInline muted loop sx={{
            borderRadius: { xs: '16px' },
            zIndex: 0,
            maxWidth: { xs: '80vw', xl: '1440px' },
            margin: '0 auto',
          }}>
            <source src={heroVideo} type="video/mp4"/>
          </Box>
          {/*<Box sx={{*/}
          {/*  position: 'absolute',*/}
          {/*  top: '50%',*/}
          {/*  left: '50%',*/}
          {/*  transform: 'translate(-50%, -50%)'*/}
          {/*}}>*/}
          {/*  <Typography variant='h1' sx={{*/}
          {/*  }}>*/}
          {/*    Our Story*/}
          {/*  </Typography>*/}
          {/*</Box>*/}
        </Box>
        <Box sx={{
          position: 'relative',
          height: '100%',
          marginTop: '40px',
          maxWidth: { xs: '90vw', xl: '1440px' }
        }}>
          <Typography variant='h1' sx={{
            marginBottom: '20px'
          }}>
            Our Story
          </Typography>
          <Typography variant='h5' sx={{
            display: 'flex',
            fontSize: { xs: '15px', sm: '20px', md: '25px' },
          }}>
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
            height: { xs: '50px', md: '80px'},
            right: { xs: '18px', md: '37px'},
          }}
          alt="The house from the offer."
          src={latitude}
        />
      </Box>
    </Box>
  );
};
