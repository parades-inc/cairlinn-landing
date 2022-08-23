import {FC} from 'react';
import oldFashioned from '../../../assets/images/cocktails/old-fashioned.png';
import irishBoulevard from '../../../assets/images/cocktails/irish-boulevardier.png';
import thePioneer from '../../../assets/images/cocktails/the-pioneer.png';
import {Box, Divider, Grid, Typography} from '@mui/material';

export const Cocktails: FC = () => {
  return (
    <Box id={'our-cocktails'} sx={{
      marginTop: '150px'
    }}>
      <Typography variant={'h1'} sx={{
        textAlign: 'center',
        marginBottom: '100px'
      }}>
        Our Cocktails
      </Typography>
      <Grid container sx={{
        overflowX: 'scroll',
        display: 'flex',
        textAlign: 'center',
      }}>
        <Grid item xs={12} md={4} sx={{
          padding: { xs: '5px', md: '10px' }
        }}>
          <Typography variant={'h3'}>
            Cairlinn Bay Old Fashioned
          </Typography>
          <Typography variant={'h6'} sx={{
            margin: 'auto 25px'
          }}>
            An Irish twist on a true classic that delivers each and every time.
          </Typography>
          <Box
            component={'img'}
            src={oldFashioned}
            sx={{
              width: { xs: '50%', md: '70%' },
              marginTop: '10px',
              marginBottom: '10px'
            }}
          />
          <Typography variant={'h6'}>
            <ul style={{
              listStyle: 'none',
              padding: '4px'
            }}>
              <li>2 ounces Cairlinn Bay Oak & Coast Irish Whiskey</li>
              <li>1/4 ounce of Simple Syrup</li>
              <li>2 Dashes Angostura Bitters</li>
              <li>Orange Peel</li>
            </ul>
          </Typography>
        </Grid>
        <Grid item xs={12} md={4} sx={{
          padding: { xs: '5px', md: '10px' }
        }} alignSelf={'flex-end'}>
          <Typography variant={'h3'}>
            The Irish Boulevardier
          </Typography>
          <Typography variant={'h6'} sx={{
            margin: 'auto 25px'
          }}>
            A bold and delightfully complex cocktail that satisfies any palate.
          </Typography>
          <Box
            component={'img'}
            src={irishBoulevard}
            sx={{
              width: { xs: '50%', md: '70%' },
              alignSelf: 'flex-end',
              marginTop: '35px',
              marginBottom: '10px'
            }}
          />
          <Typography variant={'h6'}>
            <ul style={{
              listStyle: 'none',
              padding: '0'
            }}>
              <li>2 ounces CB Whiskey</li>
              <li>1 ounces Campari</li>
              <li>1 ounces Sweet Vermouth</li>
              <li>Orange Peel</li>
            </ul>
          </Typography>
        </Grid>
        <Grid item xs={12} md={4} sx={{
          padding: { xs: '3px' },
          marginTop: '0px'
        }}>
          <Typography variant={'h3'}>
            The Pioneer
          </Typography>
          <Typography variant={'h6'} sx={{
            margin: 'auto 25px'
          }}>
            A refreshing cocktail with three simple ingredients that make it easy to replicate at home.
          </Typography>
          <Box
            component={'img'}
            src={thePioneer}
            sx={{
              width: { xs: '50%', md: '70%' },
              padding: { xs: '5px', md: '10px' }

            }}
          />
          <Typography variant={'h6'}>
            <ul style={{
              listStyle: 'none',
              padding: '0'
            }}>
              <li>2 ounces CB Whiskey</li>
              <li>5 ounces Ginger Ale</li>
              <li>Lime Wedge</li>
            </ul>
          </Typography>
        </Grid>
      </Grid>
    </Box>

  );
};
