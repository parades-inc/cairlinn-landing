import {FC} from 'react';
import './footer.css';
import logo from '../../assets/images/CairlinnBayLogo.png';
import {Box, Grid, Typography} from '@mui/material';
import {Circle} from '@mui/icons-material';
import instagram from '../../assets/images/instagram_icon.png';


export const Footer: FC = () => {
  return (
    <div id='footer'>
      <Grid container justifyContent={'center'} alignItems={'center'} >
        <Grid item xs={12} md={4}>
          <Typography variant={'body1'} sx={{
            marginBottom: '25px'
          }}>
            &copy; { new Date().getFullYear() } Cairlinn Bay
          </Typography>
        </Grid>
        <Grid item xs={12} md={4}>
          <img className='footer-logo' src={logo}/>
        </Grid>
        <Grid item xs={12} md={4}>
          <a href='https://www.instagram.com/cairlinnbay/' rel='noreferrer' target='_blank'>
            <Box
              component="img"
              sx={{
                height: '30px',
                width: '30px'
              }}
              alt="Instagram"
              src={instagram}
            />
          </a>
        </Grid>
      </Grid>
    </div>
  );
};
