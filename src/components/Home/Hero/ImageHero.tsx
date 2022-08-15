import {FC, useEffect, useRef, useState} from 'react';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import marqueeImage from '../../../assets/images/whiskey_table.jpg';
import {Box, Button, Typography} from '@mui/material';
import { HashLink } from 'react-router-hash-link';


export const ImageHero: FC = () => {
  const imageRef = useRef<any>();
  const textRef = useRef<any>();
  const [imageHeight, setImageHeight] = useState(0);
  const [textHeight, setTextHeight] = useState(0);
  useEffect(() => {
    setImageHeight(imageRef?.current?.clientHeight);
    setTextHeight(textRef?.current?.clientHeight);
  }, []);
  console.log(textHeight, imageHeight);
  return (
    <Box id={'hero'} className='hero-container' sx={{
      display: 'flex',
      maxWidth: { xs: '90vw', xl: '1440px' },
      margin: '0 auto'
    }}>
      <Box
        component='img'
        src={marqueeImage}
        sx={{
          position: 'relative',
          borderRadius: { xs: '16px' },
          zIndex: -10,
          maxWidth: '100%'
        }}
        ref={imageRef}
      />
      <Box className='hero-text' ref={textRef} sx={{
        position: 'absolute',
        maxWidth: '1440px',
        left: { xs: 'calc(100vw - 90vw)', xl: 'calc(((100vw - 1440px) / 2) + 4rem)' },
        padding: `${-(imageHeight - textHeight) / 2}px 0`,
        minHeight: `${imageHeight}px`,
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
          marginTop: '10px'
        }}>
          <HashLink to='/#our-story'>
            <Button variant='contained'>
              Explore
            </Button>
          </HashLink>
        </Box>
      </Box>
    </Box>
  );
};
