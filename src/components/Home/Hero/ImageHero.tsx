import {FC} from 'react';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import marqueeImage from '../../../assets/images/whiskey_table.jpg';
import {Box, Button, Typography} from '@mui/material';



export const ImageHero: FC = () => {
  return (
    <Box className='hero-container' sx={{
      overflow: 'hidden',
      display: 'flex',
      position: 'relative',
      alignItems: 'center',
      maxWidth: { xs: '100%', xl: '1440px' },
      marginLeft: 'auto',
      marginRight: 'auto',
    }}>
      <Box
        component='img'
        src={marqueeImage}
        sx={{
          borderRadius: { sm: '16px' },
          zIndex: -10,
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
          <a href='#our-story'>
            <Button variant='contained'>
              Explore
            </Button>
          </a>
        </Box>
      </div>
    </Box>
  );
};
