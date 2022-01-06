import {FC} from "react";
import './hero.css'
import heroImage from '../../../assets/images/hero.png'
import {Box, Button, Typography} from "@mui/material";


export const Hero: FC = () => {
  return (
    <div id='hero'>
      <Box className='hero-container'>
        <img src={heroImage}/>
        <Typography className='hero-text'>
          Pioneering<br/>
          Irish<br/>
          Whiskey<br/>
          <Button variant='contained'>
            Explore
          </Button>
        </Typography>
      </Box>
    </div>
  )
}
