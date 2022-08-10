import {FC} from 'react';
import './news.css';
import socialMediaImage from '../../../assets/images/social-media.png';
import {Box, Button, Grid, Typography} from '@mui/material';
import waves from '../../../assets/images/wave-lines.png';


export const News: FC = () => {
  return (
    <Box id='news' sx={{
      padding: { xs: '100px 0' },
      backgroundImage: `url(${waves})`,
      backgroundPosition: 'bottom',
      backgroundRepeat: 'no-repeat',
      backgroundSize: '100%',
    }}>
      <Box className='news-container' sx={{
        borderRadius: '16px',
        maxWidth: '1440px',
        margin: '0 auto'
      }}>
        <Grid container justifyContent={'space-around'} alignItems={'center'}>
          <Grid item xs={10} md={4} className={'news-text'}>
            <Typography variant='h1'>
              News
            </Typography>
            <Typography variant='h5' sx={{
              marginTop: '20px',
              marginBottom: '40px'
            }}>
              Cairlinn Bay Oak & Coast achieves “Excellent, Highly Recommended” score of &nbsp;
              <Box
                component={'a'}
                sx={{
                  textDecoration: 'underline',
                  color: '#327371 !important'
                }}
                target={'_blank'}
                href={'https://www.ultimate-beverage.com/usc-2022/2022-spirits-results/Cairlinn-Bay-Oak-Coast-Irish-Blended-Whiskey/'}
              >
                93 by Ultimate Spirits Challenge
              </Box>
            </Typography>
            <Typography variant='h4'>Available Summer 2022</Typography>
            <Box py={6}>
              <a href={'https://www.instagram.com/cairlinnbay/'} target={'_blank'} rel="noreferrer" >
                <Button variant='contained'>
                  Follow Us On Instagram
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
