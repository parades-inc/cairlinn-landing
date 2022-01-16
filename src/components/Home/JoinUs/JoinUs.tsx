import { FC } from 'react';
import './joinUs.css';
import joinUsImage from '../../../assets/images/joinUsImage.png';
import { Box, Button, Grid, Stack, Typography } from '@mui/material';
import { TextField } from '@mui/material';

export const JoinUs: FC = () => {
  return (
    <div id="joinUs">
      <Box className="join-us-container">
        <img src={joinUsImage} />
        <Grid container justifyContent={'right'}>
          <Grid item xs={12}>
            <Typography className="join-us-text" variant="h1">Join Us</Typography>
            <TextField label="Email" placeholder="Email" />
            <TextField
              label="DOB (MM/DD/YYYY)"
              placeholder="DOB (MM/DD/YYYY)"
            />
            <TextField
              label="ZIP CODE"
              placeholder="ZIP CODE"
            />
            <Button color="primary" variant={'contained'}>GET NOTIFIED</Button>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};
