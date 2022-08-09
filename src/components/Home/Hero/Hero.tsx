import {FC} from 'react';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import heroVideo from '../../../assets/videos/hero-video.mp4';
import {Box, Button, Typography} from '@mui/material';



export const Hero: FC = () => {
  return (
    <Box id='hero' sx={{
      marginTop: '4rem'
    }}>
      <Box sx={{
        position: 'relative'
      }}>
        <Box component={'video'} autoPlay playsInline muted loop sx={{
          borderRadius: { sm: '16px' },
          zIndex: -10,
          maxWidth: { xs: '1440px' },
        }}>
          <source src={heroVideo} type="video/mp4"/>
        </Box>
        <Box sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)'
        }}>
          <Typography variant='h1' sx={{
          }}>
            Our Story
          </Typography>
        </Box>
      </Box>
      <div className='hero-text' style={{
        position: 'relative',
        height: '100%',
      }}>
        <Typography variant='h5' sx={{
          display: 'flex',
          padding: { xs: '2rem', md: '4rem' },
          fontSize: { xs: '20px', sm: '25px', md: '35px' },
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
      </div>
    </Box>
  );
};
