import Box from "@mui/material/Box";
import { FC } from "react";
import { Hero } from "../../components/Home/Hero/Hero";
import { OurStory } from "../../components/Home/OurStory/OurStory";
import { About } from "../../components/Home/About/About";
import { JoinUs } from "../../components/Home/JoinUs/JoinUs";

export const HomeView: FC = () => {
    return (
        <div id="home">
            <Hero />
            <OurStory />
            <About />
            <JoinUs />
        </div>
    );
};
