import { FC } from 'react';
import './joinUs.css';
import joinUsImage from '../../../assets/images/joinUsImage.png';
import {Box, Button, FormControl, Grid, Stack, Typography} from '@mui/material';
import { TextField } from '@mui/material';

export const JoinUs: FC = () => {
  return (
    <div id="joinUs">
      <Box className="join-us-container">
        <Grid container justifyContent={'center'}>
          <Grid item xs={12} md={4}>

          </Grid>
          <Grid item xs={12} md={4}>
            <Box className={'join-us-content'}>
              <Typography className="join-us-text" variant="h1">Join Us</Typography>
              <form>
                <FormControl fullWidth>
                  <TextField
                    label="Email"
                    placeholder="Email"
                  />
                </FormControl>
                <FormControl fullWidth>
                  <TextField
                    label="DOB (MM/DD/YYYY)"
                    placeholder="DOB (MM/DD/YYYY)"
                  />
                </FormControl>
                <FormControl fullWidth>
                  <TextField
                    label="ZIP CODE"
                    placeholder="ZIP CODE"
                  />
                </FormControl>
                <Button color="primary" variant={'contained'}>GET NOTIFIED</Button>
              </form>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};
