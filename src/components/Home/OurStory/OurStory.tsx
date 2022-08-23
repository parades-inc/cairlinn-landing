import {FC} from 'react';
import coordinatesLongitude from '../../../assets/images/coords_longitude_horizontal.png';
import coordinatesLatitude from '../../../assets/images/coords_latitude_vertical.png';
import waves from '../../../assets/images/wave-lines.png';
import './ourStory.css';
import {Box, Typography} from '@mui/material';
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
      margin: '50px auto'
    }}>
      <Box sx={{
        position: 'relative'
      }}>
        <Box
          component="img"
          sx={{
            position: 'absolute',
            marginTop: { xs: '5vw'},
            maxWidth: { xs: '30px', xl: '80px' },
            left: { xs: '5vw' },
            zIndex: 1
          }}
          alt=""
          src={coordinatesLatitude}
        />
        <Box
          component="img"
          sx={{
            position: 'absolute',
            height: { xs: '30px', xl: '80px' },
            right: { xs: '5vw' },
            bottom: { xs: '5vw' },
            zIndex: 1
          }}
          alt="The house from the offer."
          src={coordinatesLongitude}
        />
        <Box component={'video'} autoPlay playsInline muted loop sx={{
          zIndex: 0,
          maxWidth: { xs: '100%' },
          borderRadius: { xs: 0, },
          margin: '0 auto',
        }}>
          <source src={heroVideo} type="video/mp4"/>
        </Box>
      </Box>
      <Box className={'our-story-container'}
        sx={{
          maxWidth: { xs: '100vw' },
          margin: '0 auto',
        }}
      >
        <Box sx={{
          position: 'relative',
          height: '100%',
          maxWidth: { xs: '90vw', xl: '1440px' },
          margin: '40px auto',
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
      </Box>
    </Box>
  );
};
