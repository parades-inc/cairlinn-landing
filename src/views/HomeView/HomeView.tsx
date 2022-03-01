import {FC} from 'react';
import {Hero} from '../../components/Home/Hero/Hero';
import {OurStory} from '../../components/Home/OurStory/OurStory';
import {About} from '../../components/Home/About/About';
import {News} from '../../components/Home/News/News';
import { JoinUs } from '../../components/Home/JoinUs/JoinUs';
import './home.css';
import { AgeDialog } from '../../components/AgeDialog/AgeDialog';
export const HomeView: FC = () => {
  return (
    <div id='home'>
      <AgeDialog/>
      <Hero/>
      <OurStory/>
      <About/>
      <News/>
      <JoinUs />
    </div>
  );
};
