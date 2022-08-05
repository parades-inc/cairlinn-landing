import {FC} from 'react';
import pots from '../../../assets/images/pots.png';
import whiskeyField from '../../../assets/images/field-whiskey.png';
import barrels from '../../../assets/images/barrels.png';
import './ourWhisky.css';
import {Box, Grid, Typography} from '@mui/material';

type ImageData = {
  image: any,
  title: string,
  body: string
}

const images: ImageData[] = [
  {
    image: pots,
    title: 'The Whiskey',
    body: 'Irish Single Grain is the backbone of our whiskey, and is distilled in our column stills – “After all they were invented by an Irishman, Aeneas Coffey circa 1830”'
  },
  {
    image: whiskeyField,
    title: 'The Process',
    body: '“The Irish Pot Still is Ireland’s greatest gift to the whiskey world” This uniquely Irish triple distillation process in well worn copper pot stills yields an amazing nectar that is ultra smooth and creamy.'
  },
  {
    image: barrels,
    title: 'The Wood',
    body: 'We age our whiskey in heavily toasted virgin oak barrels, which imparts the delicious buttery vanilla caramel notes into our whiskey.'
  },
  {
    image: pots,
    title: 'The Finish',
    body: 'We have casks to finish our whiskies from all over the world. Casks used to age Beer, Rum, Bourbon, Rye, Wines, and a lot more. This is\n' +
      'where our craft reigns supreme, and we pick the truly exceptional ones to bring to you.'
  },
  {
    image: whiskeyField,
    title: 'The Blend',
    body: 'The Oak & Coast expression is a unique blend of 3 quintessential Irish whiskies'
  }
];

export const OurWhiskey: FC = () => {
  return (
    <Box id={'our-whiskey'}>
      <Grid container sx={{
        overflowX: 'scroll',
        display: 'flex',
      }}>
        {
          images.map((imageData, key) => (
            <Grid item xs={12} md={4} key={key} sx={{
              padding: { xs: '33px' }
            }}>
              <Box
                component={'img'}
                src={imageData.image}
                sx={{
                  width: '100%',
                }}
              />
              <Typography variant={'h3'}>
                {imageData.title}
              </Typography>
              <Typography variant={'body1'}>
                {`${imageData.body}`}
              </Typography>
            </Grid>
          ))
        }
        <Grid item xs={12} md={4} sx={{
          padding: { xs: '33px' }
        }}>
          <Box
            component={'img'}
            src={barrels}
            sx={{
              width: '100%',
            }}
          />
          <Typography variant={'h3'}>
            Tasting Notes
          </Typography>
          <Typography variant={'body1'}>
            Color: Golden hour amber<br/>
            Aroma: Captivating nose of honeycomb, dried fruit, crème brulée and toasted oak<br/>
            Taste: Elegant and soft, with toasted grains, candied fruit, and mild spice notes<br/>
            Finish: Ultra smooth and creamy with warm mild spice finish<br/>
            <br/>

          </Typography>
        </Grid>
      </Grid>
    </Box>

  );
};
