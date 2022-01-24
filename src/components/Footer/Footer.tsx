import {FC} from 'react';
import './footer.css';
import logo from '../../assets/images/CairlinnBayLogo.png';
import {Grid, Typography} from '@mui/material';
import {Circle} from '@mui/icons-material';


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
          <Circle />
          <Circle/>
          <Circle/>
        </Grid>
      </Grid>
    </div>
  );
};
