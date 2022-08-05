import {FC} from 'react';
import oldFashioned from '../../../assets/images/cocktails/old-fashioned.png';
import irishBoulevard from '../../../assets/images/cocktails/irish-boulevardier.png';
import thePioneer from '../../../assets/images/cocktails/the-pioneer.png';
import {Box, Grid, Typography} from '@mui/material';

export const Cocktails: FC = () => {
  return (
    <Box id={'our-cocktails'}>
      <Grid container sx={{
        overflowX: 'scroll',
        display: 'flex',
        textAlign: 'center',
      }}>
        <Grid item xs={12} md={4} sx={{
          padding: { xs: '33px' }
        }}>
          <Typography variant={'h5'} sx={{
            padding: '20px'
          }}>
            Old Fashioned
          </Typography>
          <Box
            component={'img'}
            src={oldFashioned}
            sx={{
              width: { xs: '100%', md: '50%' },
            }}
          />
          <Typography variant={'body1'}>
            <ul style={{
              listStyle: 'none',
              padding: '0'
            }}>
              <li>CB Whiskey Sugar</li>
              <li>Angostura Bitters Water</li>
              <li>Orange Peel</li>
            </ul>
          </Typography>
        </Grid>
        <Grid item xs={12} md={4} sx={{
          padding: { xs: '33px' }
        }} alignSelf={'flex-end'}>
          <Typography variant={'h5'} sx={{
            padding: '20px'
          }}>
            Irish Boulevardier
          </Typography>
          <Box
            component={'img'}
            src={irishBoulevard}
            sx={{
              width: { xs: '100%', md: '50%' },
              alignSelf: 'flex-end'
            }}
          />
          <Typography variant={'body1'}>
            <ul style={{
              listStyle: 'none',
              padding: '0'
            }}>
              <li>CB Whiskey</li>
              <li>Campari</li>
              <li>Sweet Vermouth</li>
              <li>Orange Peel</li>
            </ul>
          </Typography>
        </Grid>
        <Grid item xs={12} md={4} sx={{
          padding: { xs: '33px' }
        }}>
          <Typography variant={'h5'} sx={{
            padding: '20px'
          }}>
            The Pioneer
          </Typography>
          <Box
            component={'img'}
            src={thePioneer}
            sx={{
              width: { xs: '100%', md: '50%' },
            }}
          />
          <Typography variant={'body1'}>
            <ul style={{
              listStyle: 'none',
              padding: '0'
            }}>
              <li>CB Whiskey</li>
              <li>Ginger Ale</li>
              <li>Lime Wedge</li>
            </ul>
          </Typography>
        </Grid>
      </Grid>
    </Box>

  );
};
