import React from 'react';
import Title from '../../components/Title/Title';
import Hero from '../../components/Hero/Hero';
import AboutUs from "./AboutUs/AboutUs";
import BoardMembers from "./BoardMembers/BoardMembers";
import Responsibilities from './Responsibilities/Responsibilities';
import hero2 from "../../assets/images/hero2.jpg";



const AboutPage = () => {
  return (
    <div>
      <Hero header="About Header here" subheader="Little text here" heroBg={hero2}/>
    <div className='container'>
    <Title subTitle="The Royal Rock Foundation" title="About Us" />
    <AboutUs/>
    <Title subTitle="The Royal Rock Foundation" title="Board Members" />
    <BoardMembers/>
    <Title subTitle="The Royal Rock Foundation" title="Board Member Responsibilities" />
    <Responsibilities/>

    </div>
    </div>
  );
};

export default AboutPage;