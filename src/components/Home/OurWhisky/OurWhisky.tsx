import {FC} from 'react';
import pots from '../../../assets/images/pots.png';
import whiskeyField from '../../../assets/images/field-whiskey.png';
import barrels from '../../../assets/images/barrels.png';
import './ourWhisky.css';
import {Box, Grid, Typography} from '@mui/material';

const images = [
  pots, whiskeyField, barrels, pots, whiskeyField, barrels
];

export const OurWhisky: FC = () => {
  return (
    <Box id={'our-whisky'}>
      <Grid container sx={{
        overflowX: 'scroll',
        display: 'flex',
      }}>
        {
          images.map((images, key) => (
            <Grid item xs={12} md={4} key={key} sx={{
              padding: { xs: '33px' }
            }}>
              <Box
                component={'img'}
                src={images}
                sx={{
                  width: '100%',
                }}
              />
            </Grid>
          ))
        }
      </Grid>
    </Box>

  );
};
