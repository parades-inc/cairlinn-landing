import {FC} from 'react';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import heroVideo from '../../../assets/videos/hero-video.mp4';
import {Box, Button, Typography} from '@mui/material';



export const Hero: FC = () => {
  return (
    <Box id='hero' sx={{
      marginTop: { xs: '104px', sm: '50px', md: '100px', lg: '150px', xl: '150px' },
      marginBottom: { xs: 0, sm: '200px', md: '200px', lg: '300px', xl: '300px' },
    }}>
      <Box className='hero-container' sx={{
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        verticalAlign: 'top'
      }}>
        <Box
          sx={{
            position: 'absolute',
            marginLeft: 'auto',
            marginRight: 'auto',
            overflow: 'hidden',
            margin: { xs: '0', sm: '0 25px', xl: 0},
            '& video': {
              borderRadius: { sm: '16px' },
              zIndex: -10,
              maxWidth: { xs: '150%', sm: '100%', xl: '1440px' },
            }
          }}
        >
          <video autoPlay playsInline muted loop>
            <source src={heroVideo} type="video/mp4"/>
          </video>
        </Box>
        <div className='hero-text' style={{
          position: 'relative',
          height: '100%',
        }}>
          {/*<Typography variant='h1' sx={{*/}
          {/*  display: 'flex',*/}
          {/*  padding: { xs: '1rem 0 1rem 65px', md: '1rem 0 1rem 130px' },*/}
          {/*}}>*/}
          {/*  Pioneering<br/>*/}
          {/*  Irish<br/>*/}
          {/*  Whiskey<br/>*/}
          {/*</Typography>*/}
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
    </Box>
  );
};
