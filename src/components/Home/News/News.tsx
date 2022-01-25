import {FC} from 'react';
import './news.css';
import socialMediaImage from '../../../assets/images/social-media.png';
import {Box, Button, Grid, Typography} from '@mui/material';


export const News: FC = () => {
  return (
    <Box id='news' sx={{
      margin: { xs: '0 25px' },
      width: { xs: 'calc(100% - 50px)' },
      padding: { xs: '0 25px', md: '0' }
    }}>
      <Box className='news-container' sx={{
        borderRadius: '16px',
        backgroundColor: '#2C2A27',
        padding: '50px 0'
      }}>
        <Grid container justifyContent={'space-around'} alignItems={'center'}>
          <Grid item xs={10} md={4} className={'news-text'}>
            <Typography variant='h1'>
              News
            </Typography>
            <Typography variant='body1'>
              Perhaps you want to talk about the timeline here, can put background photo on this if not too distracting.
            </Typography>
            <ul>
              <li><Typography variant='body1'>Launch Dates</Typography></li>
              <li><Typography variant='body1'>Rollout Information</Typography></li>
              <li><Typography variant='body1'>Merch</Typography></li>
              <li><Typography variant='body1'>Links to other documents or sponsors</Typography></li>
            </ul>
            <Box py={6}>
              <a href={'https://www.instagram.com/cairlinnbay/'} target={'_blank'} rel="noreferrer" >
                <Button variant='contained'>
                  Join Instagram
                </Button>
              </a>
            </Box>
          </Grid>
          <Grid item xs={10} md={6}>
            <Box
              component="img"
              sx={{
                maxWidth: { xs: '100%'},
              }}
              alt="Whisky Bottle Coastline"
              src={socialMediaImage}
            />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};
