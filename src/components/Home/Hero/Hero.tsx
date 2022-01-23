import {FC} from 'react';
import heroImage from '../../../assets/images/hero.png';
import {Box, Button, Typography} from '@mui/material';


export const Hero: FC = () => {
  return (
    <Box id='hero' sx={{
      marginTop: { xs: 0, sm: '100px', md: '200px', lg: '300px' },
      marginBottom: { xs: 0, sm: '200px', md: '200px', lg: '400px' },

    }}>
      <Box className='hero-container' sx={{
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
      }}>
        <Box
          component="img"
          sx={{
            position: 'absolute',
            marginLeft: 'auto',
            marginRight: 'auto',
            zIndex: -10,
            padding: { xs: '0 25px', xl: 0},
            maxWidth: { xs: 'calc(100% - 50px)', xl: '100%' },
          }}
          alt="The house from the offer."
          src={heroImage}
        />
        <div className='hero-text' style={{
          position: 'relative',
          height: '100%'
        }}>
          <Typography variant='h1' sx={{
            display: 'flex',
            padding: { xs: '1rem 0 1rem 65px', md: '1rem 0 1rem 130px' },
          }}>
            Pioneering<br/>
            Irish<br/>
            Whiskey<br/>
          </Typography>
          <Box sx={{
            display: 'flex',
            padding: { xs: '1rem 0 1rem 65px', md: '1rem 0 1rem 130px' },
          }}>
            <Button variant='contained'>
              Explore
            </Button>
          </Box>
        </div>
      </Box>
    </Box>
  );
};
