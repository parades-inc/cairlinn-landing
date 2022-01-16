import {FC} from "react"
import './news.css'
import socialMediaImage from '../../../assets/images/social-media.png'
import {Box, Button, Grid, Typography} from "@mui/material";


export const News: FC = () => {
  return (
    <div id='news'>
      <Box className='news-container' p={10}>
        <Grid container justifyContent={'center'}>
          <Grid item xs={12} md={6}>
            <Typography variant='h1'>
              News
            </Typography>
            <Typography variant='body1'>
              Perhaps you want to talk about the timeline here, can put background photo on this if not too distracting.
              <ul>
                <li>Launch Dates</li>
                <li>Rollout information</li>
                <li>Merch</li>
                <li>Links to other documents or sponsors</li>
              </ul>
            </Typography>
            <Button variant='contained'>
              Join Instagram
            </Button>
          </Grid>
          <Grid item xs={12} md={6}>
            <img className='social-media-image' src={socialMediaImage}/>
          </Grid>
        </Grid>


      </Box>
    </div>
  )
}
