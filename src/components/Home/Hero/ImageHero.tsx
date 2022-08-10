import {FC} from 'react';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import marqueeImage from '../../../assets/images/whiskey_table.jpg';
import {Box, Button, Typography} from '@mui/material';
import { HashLink } from 'react-router-hash-link';


export const ImageHero: FC = () => {
  return (
    <Box className='hero-container' sx={{
      overflow: 'hidden',
      display: 'flex',
      position: 'relative',
      alignItems: 'center',
      maxWidth: { xs: '90vw', xl: '1440px' },
      marginLeft: 'auto',
      marginRight: 'auto',
    }}>
      <Box
        component='img'
        src={marqueeImage}
        sx={{
          borderRadius: { xs: '16px' },
          zIndex: -10,
          maxWidth: { xs: '90vw', xl: '1440px' },
          margin: 'auto'
        }}
      />
      <div className='hero-text' style={{
        position: 'absolute',
        maxWidth: '1440px',
        left: '8rem'
      }}>
        <Typography variant='h1' sx={{
          display: 'flex',
        }}>
          Pioneering<br/>
          Irish<br/>
          Whiskey<br/>
        </Typography>
        <Box sx={{
          display: 'flex',
          marginTop: '20px'
        }}>
          <HashLink to='/#our-story'>
            <Button variant='contained'>
              Explore
            </Button>
          </HashLink>
        </Box>
      </div>
    </Box>
  );
};
