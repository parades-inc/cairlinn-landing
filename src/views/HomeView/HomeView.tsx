import Box from "@mui/material/Box";
import {FC} from "react";
import {Hero} from "../../components/Home/Hero/Hero";

export const HomeView: FC = () => {
  return (
    <div id='home'>
      <Box>
        <Hero/>
      </Box>
    </div>
  )
}
