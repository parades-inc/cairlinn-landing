import { FC } from 'react';
import './joinUs.css';
import joinUsImage from '../../../assets/images/joinUsImage.png';
import {Box, Button, FormControl, Typography} from '@mui/material';
import { TextField } from '@mui/material';

export const JoinUs: FC = () => {
  return (
    <Box id='joinUs' sx={{
      marginTop: { xs: '50px', sm: '75px', md: '150px', lg: '400px' },
      marginBottom: { xs: '50px', sm: '75px', md: '150px', lg: '400px' },
    }}>
      <Box className="join-us-container" sx={{
        overflow: 'hidden',
        display: 'flex',
        justifyContent: { xs: 'center', md: 'flex-end'},
        alignItems: 'center'
      }}>
        <Box
          component="img"
          sx={{
            display: { xs: 'none', md: 'flex' },
            position: 'absolute',
            marginLeft: 'auto',
            marginRight: 'auto',
            zIndex: -10,
            padding: { xs: '0 25px', lg: 0 },
            maxWidth: { xs: 'calc(100% - 50px)', lg: '100%' },
          }}
          alt="The house from the offer."
          src={joinUsImage}
        />
        <Box className={'join-us-content'} sx={{
          position: 'relative',
          height: '100%',
          width: { xs: '70%', md: '40%', lg: '30%' },
          textAlign: 'center',
          marginRight: { xs: 0, md: '260px' }
        }}>
          <Box className="join-us-text">
            <Typography variant="h1">Join Us</Typography>
          </Box>
          <Box component={'form'}>
            <FormControl fullWidth>
              <TextField
                placeholder="Email"
                variant={'outlined'}
                InputProps={{
                  inputProps: {
                    style: { textAlign: 'center', fontSize: 20 },
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
                    style: { textAlign: 'center', fontSize: 20 },
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
                    style: { textAlign: 'center', fontSize: 20 },
                  }
                }}
              />
            </FormControl>
            <Button color="primary" fullWidth variant={'contained'}>GET NOTIFIED</Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
