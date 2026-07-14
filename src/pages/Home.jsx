import React from 'react';
import HeroSection from '../components/HeroSection';
import About from '../components/About';
import Work from '../components/Work';
import Showreel from '../components/Showreel';
import Sets from '../components/Sets';
import Projects from '../components/Projects';
import Brands from '../components/Brands';

const Home = () => {
  return (
    <>
      <HeroSection />
      <About />
      <Work />
      <Showreel />
      <Sets />
      <Projects />
      <Brands />
    </>
  );
};

export default Home;
