import {FC} from 'react';
import './news.css';
import socialMediaImage from '../../../assets/images/social-media.png';
import {Box, Button, Grid, Typography} from '@mui/material';
import waves from '../../../assets/images/wave-lines.png';
import award from '../../../assets/images/93Points.png';
import award2 from '../../../assets/images/BTIGold.png';
import award3 from '../../../assets/images/NYWSCGold.png';


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
        <Typography variant='h1' align="center" sx={{paddingBottom: '100px'}}>
          News
        </Typography>
        <Grid container justifyContent={'space-around'} alignItems={'center'}>
          <Grid item xs={10} md={3} className={'news-text'}>
            <Box
              component={'img'}
              src={award2}
              sx={{
                width: { xs: '100%', md: '100%' },
                padding: { xs: '10px', md: '10px' }

              }}
            >
            </Box>
            <Typography variant='h5' align="center">
              <a href="https://www.tastings.com/Spirits-Review/Cairlinn-Bay-Oak-and-Coast-Irish-Whiskey-Ireland-92-Proof-700-ml-10-01-2022.aspx?Id=MR
https://secure.bevtest.com/Secure/MyReviews.aspx?Tab=REVIEWS&Year=LATEST
">
                 <u>2022 Beverage  Testing Institute Rating: GOLD Medal/91 Points/Exceptional</u>
              </a>
            </Typography>
          </Grid>
          <Grid item xs={10} md={3} className={'news-text'}>
            <Box
              component={'img'}
              src={award}
              sx={{
                width: { xs: '100%', md: '100%' },
                padding: { xs: '10px', md: '10px' }

              }}
            >
            </Box>
            <Typography variant='h5' align="center">
              <a href="https://www.ultimate-beverage.com/usc-2022/2022-spirits-results/Cairlinn-Bay-Oak-Coast-Irish-Blended-Whiskey/">
                 <u>“Excellent, Highly Recommended” score of  93 by Ultimate Spirits Challenge</u>
              </a>
            </Typography>
          </Grid>
          <Grid item xs={10} md={3} className={'news-text'}>
            <Box
              component={'img'}
              src={award3}
              sx={{
                width: { xs: '100%', md: '100%' },
                padding: { xs: '10px', md: '10px' }

              }}
            >
            </Box>
            <Typography variant='h5' align="center">
              <a href="https://thetastingalliance.com/results/nywsc-2022-results/">
                 <u>2022 New York World Spirits Competition: GOLD Medal</u>
              </a>
            </Typography>
          </Grid>

        </Grid>
      </Box>
    </Box>
  );
};


{/* <Typography variant='h5' sx={{
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
</Typography> */}