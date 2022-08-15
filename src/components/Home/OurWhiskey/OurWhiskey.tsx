import {FC} from 'react';
import sunsetField from '../../../assets/images/sunset-field-sized.jpg';
import pots from '../../../assets/images/the-whiskey-sized.jpg';
import barrelFire from '../../../assets/images/barrel-fire.jpg';
import barrelsStack from '../../../assets/images/barrels-stack.jpg';
import whiskyTableRope from '../../../assets/images/whisky-table-rope.png';
import whiskyTableGlasses from '../../../assets/images/tasting-notes.jpg';
import './ourWhisky.css';
import {Box, Grid, Typography} from '@mui/material';

type ImageData = {
  image: any,
  title: string,
  body: string
}

const images: ImageData[] = [
  {
    image: sunsetField,
    title: 'The Whiskey',
    body: 'Irish Single Grain is the backbone of our whiskey, and is distilled in our column stills – “After all they were invented by an Irishman, Aeneas Coffey circa 1830”.'
  },
  {
    image: pots,
    title: 'The Process',
    body: '“The Irish Pot Still is Ireland’s greatest gift to the whiskey world” This uniquely Irish triple distillation process in well worn copper pot stills yields an amazing nectar that is ultra smooth and creamy.'
  },
  {
    image: barrelFire,
    title: 'The Wood',
    body: 'We age our whiskey in heavily toasted virgin oak barrels, which imparts the delicious buttery vanilla caramel notes into our whiskey.'
  },
  {
    image: barrelsStack,
    title: 'The Finish',
    body: 'We have casks to finish our whiskies from all over the world. Casks used to age Beer, Rum, Bourbon, Rye, Wines, and a lot more. This is\n' +
      'where our craft reigns supreme, and we pick the truly exceptional ones to bring to you.'
  },
  {
    image: whiskyTableRope,
    title: 'The Blend',
    body: 'The Oak & Coast expression is a unique blend of 3 quintessential Irish whiskies. 1. Single Grain aged in charred virgin oak, 2. Triple distilled malt finished in rye casks, and 3. Pot still finished in sherry casks.'
  }
];

export const OurWhiskey: FC = () => {
  return (
    <Box id={'our-whiskey'}>
      <Box className={'about-text'} sx={{
        padding: { xs: '33px 65px', lg: '65px calc((100vw - 1440px) / 2)px' },
        maxWidth: '1440px',
        margin: '0 auto'
      }}>
        <Typography variant='h2'>
          Authentic<br/>
          Approachable Irish<br/>
          Whiskey<br/>
        </Typography>
      </Box>
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
                  borderRadius: '16px'
                }}
              />
              <Typography variant={'h3'} sx={{
                marginTop: '20px'
              }}>
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
            src={whiskyTableGlasses}
            sx={{
              width: '100%',
              borderRadius: '16px'
            }}
          />
          <Typography variant={'h3'} sx={{
            marginTop: '20px'
          }}>
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
