import Box from "@mui/material/Box";
import {FC} from "react";
import {Hero} from "../../components/Home/Hero/Hero";
import {OurStory} from "../../components/Home/OurStory/OurStory";
import {About} from "../../components/Home/About/About";

export const HomeView: FC = () => {
  return (
    <div id='home'>
      <Hero/>
      <OurStory/>
      <About/>
    </div>
  )
}
