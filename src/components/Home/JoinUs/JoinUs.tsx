import { FC } from 'react';
import './joinUs.css';
import joinUsImage from '../../../assets/images/joinUsImage.png';
import {Box, Button, FormControl, Grid, Typography} from '@mui/material';
import { TextField } from '@mui/material';

export const JoinUs: FC = () => {
  return (
    <div id="joinUs">
      <Box>
        <img className='join-us-background' src={joinUsImage}/>
      </Box>
      <Box className="join-us-container">
        <Box className={'join-us-content'}>
          <Box className="join-us-text">
            <Typography variant="h1">Join Us</Typography>
          </Box>
          <form>
            <FormControl fullWidth>
              <TextField
                placeholder="Email"
                variant={'outlined'}
                InputProps={{
                  inputProps: {
                    style: { textAlign: 'center' },
                  }
                }}
              />
            </FormControl>
            <FormControl fullWidth>
              <TextField
                placeholder="DOB (MM/DD/YYYY)"
                variant={'outlined'}
                InputProps={{
                  inputProps: {
                    style: { textAlign: 'center' },
                  }
                }}
              />
            </FormControl>
            <FormControl fullWidth>
              <TextField
                placeholder="ZIP CODE"
                variant={'outlined'}
                InputProps={{
                  inputProps: {
                    style: { textAlign: 'center' },
                  }
                }}
              />
            </FormControl>
            <Button color="primary" fullWidth variant={'contained'}>GET NOTIFIED</Button>
          </form>
        </Box>
      </Box>
    </div>
  );
};
