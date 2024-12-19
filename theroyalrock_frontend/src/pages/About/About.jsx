import React from 'react';
import Title from '../../components/Title/Title';
import Hero from '../../components/Hero/Hero';
import AboutUs from "./AboutUs/AboutUs";
import BoardMembers from "./BoardMembers/BoardMembers";


const AboutPage = () => {
  return (
    <div>
      <Hero header="About Header here" subheader="Little text here"/>
    <div className='container'>
    <Title subTitle="The Royal Rock Foundation" title="About Us" />
    <AboutUs/>
    <Title subTitle="The Royal Rock Foundation" title="Board Members" />
    <BoardMembers/>
    </div>
    </div>
  );
};

export default AboutPage;