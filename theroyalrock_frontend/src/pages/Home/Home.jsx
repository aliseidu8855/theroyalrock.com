import React from 'react';
import Hero from '../../components/Hero/Hero';
import About from '../../components/About/About';
import Title from '../../components/Title/Title';
import Gallery from '../../components/Gallery/Gallery';
import Programs from '../../components/Programs/Programs';
import Testimonials from '../../components/Testimonials/Testimonials';
import Contact from '../../components/Contact/Contact';

const Home = () => {
  return (
    <div>
      <Hero />
      <div className='container'>
        <About />
        <Title subTitle="Our Gallery" title="Our Work In Pictures" />
        <Gallery />
        <Title subTitle="Our Programs" title="What We Do" />
        <Programs />
        <Title subTitle="Success Stories" title="Testimonials and Feedback" />
        <Testimonials />
        <Title subTitle="Contact Us" title="Get in Touch" />
        <Contact />
      </div>
    </div>
  );
};

export default Home;