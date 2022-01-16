import {FC} from 'react';


import {Box, Button, Grid, Typography} from '@mui/material';


export const About: FC = () => {
  return (
    <div id='about'>
      <Grid container justifyContent={'center'}>
        <Grid item xs={8}>
          <Typography variant='h1'>
            Authentic<br/>
            Approachable Irish<br/>
            Whiskey<br/>
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};
