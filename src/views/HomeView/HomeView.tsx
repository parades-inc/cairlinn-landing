import {FC} from 'react';
import {Hero} from '../../components/Home/Hero/Hero';
import {OurStory} from '../../components/Home/OurStory/OurStory';
import {About} from '../../components/Home/About/About';
import {News} from '../../components/Home/News/News';
import { JoinUs } from '../../components/Home/JoinUs/JoinUs';
import './home.css';
import { AgeDialog } from '../../components/AgeDialog/AgeDialog';
import {ImageHero} from '../../components/Home/Hero/ImageHero';
import {OurWhiskey} from '../../components/Home/OurWhiskey/OurWhiskey';
import {Cocktails} from '../../components/Home/Cocktails/Cocktails';
export const HomeView: FC = () => {
  return (
    <div id='home'>
      <AgeDialog/>
      <ImageHero/>
      <Hero/>
      <OurStory/>
      <OurWhiskey/>
      <Cocktails/>
      <News/>
      <JoinUs />
    </div>
  );
};
