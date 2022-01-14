import {FC} from "react";
import './footer.css'
import logo from '../../assets/images/CairlinnBayLogo.png'
import {Box, Button, Grid, Typography} from "@mui/material";
import {Circle} from "@mui/icons-material";


export const Footer: FC = () => {
  return (
    <div id='footer'>
      <Grid container justifyContent={'center'} alignItems={'center'} >
        <Grid item xs={12} md={4}>
          &copy; { new Date().getFullYear() } Cairlinn Bay
        </Grid>
        <Grid item xs={12} md={4}>
          <img src={logo}/>
        </Grid>
        <Grid item xs={12} md={4}>
          <Circle />
          <Circle/>
          <Circle/>
        </Grid>
      </Grid>
    </div>
  )
}
