import {FC} from 'react';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import marqueeImage from '../../../assets/images/whiskey_table.jpg';
import {Box, Button, Typography} from '@mui/material';



export const ImageHero: FC = () => {
  return (
    <Box id='image-hero' sx={{
      marginTop: { xs: '104px', sm: '50px', md: '100px', lg: '150px', xl: '150px' },
      marginBottom: { xs: 0, sm: '200px', md: '200px', lg: '300px', xl: '300px' },
    }}>
      <Box className='hero-container' sx={{
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        verticalAlign: 'top'
      }}>
        <Box
          sx={{
            position: 'absolute',
            marginLeft: 'auto',
            marginRight: 'auto',
            overflow: 'hidden',
            margin: { xs: '0', sm: '0 25px', xl: 0},
            '& img': {
              borderRadius: { sm: '16px' },
              zIndex: -10,
              maxWidth: { xs: '150%', sm: '100%', xl: '1440px' },
            }
          }}
        >
          <Box
            component='img'
            src={marqueeImage}
          />
        </Box>
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
            padding: { xs: '0 0 1rem 65px', md: '1rem 0 1rem 130px' },
          }}>
            <a href='#our-story'>
              <Button variant='contained'>
                Explore
              </Button>
            </a>

          </Box>
        </div>
      </Box>
    </Box>
  );
};
