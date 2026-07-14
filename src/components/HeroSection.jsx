import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { client, urlFor } from '../sanity/client';

const letterVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    }
  }
};

const HeroSection = () => {
  const subtitleLetters = "Filmmaker".split("");

  const [highlightData, setHighlightData] = useState(null);

  useEffect(() => {
    client.fetch(`*[_type == "highlight"][0]{
      heroImage
    }`)
      .then((data) => {
        if (data) setHighlightData(data);
      })
      .catch(console.error);
  }, []);

  const heroImageSrc = highlightData?.heroImage
    ? urlFor(highlightData.heroImage).url()
    : "https://pub-440ec315fbef45d880bb7429196ef9bd.r2.dev/assets/World%20Photography%20day_2.JPG";

  return (
    <section id="hero" className="relative h-[100svh] w-full flex items-start sm:items-center justify-start bg-black overflow-hidden grain-overlay">
      <div className="absolute inset-0 lg:hidden">
        <img src={heroImageSrc} alt="Mugisha Boris" className="w-full h-full object-cover object-[center_40%]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/20 to-black/90"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/30 to-transparent"></div>
      </div>
      <motion.div
        className="absolute inset-0 hidden lg:block"
        initial={{ scale: 1.2 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
      >
        <img src={heroImageSrc} alt="Mugisha Boris" className="w-full h-full object-cover object-[center_50%] scale-110" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/10 to-black/85"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/25 to-transparent"></div>
      </motion.div>

      <div className="relative z-20 text-center px-6 w-full max-w-6xl mx-auto h-full flex flex-col items-center justify-center mt-[2rem]">
        <motion.div
          className="flex items-center justify-center gap-3 mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <span className="h-px w-8 bg-amber-400/60"></span>
          <span className="text-[10px] tracking-[0.55em] text-white/50 uppercase">Filmmaker</span>
          <span className="h-px w-8 bg-amber-400/60"></span>
        </motion.div>

        <h1 className="leading-none tracking-tight mb-8 select-none">
          <motion.div
            className="block text-white font-thin" style={{ fontSize: 'clamp(2.8rem, 13vw, 11rem)' }}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <span className="inline-flex overflow-hidden">
              {"MUGISHA".split("").map((letter, i) => (
                <motion.span key={`c-${i}`} className="inline-block" variants={letterVariants} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}>
                  {letter}
                </motion.span>
              ))}
            </span>
          </motion.div>
          <motion.div
            className="block text-white font-black" style={{ fontSize: 'clamp(2.8rem, 13vw, 11rem)' }}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <span className="inline-flex overflow-hidden">
              {"BORIS".split("").map((letter, i) => (
                <motion.span key={`g-${i}`} className="inline-block" variants={letterVariants} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}>
                  {letter}
                </motion.span>
              ))}
            </span>
          </motion.div>
        </h1>

        <motion.div
          className="hidden sm:block"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 1 }}
        >
          <div className="flex items-center justify-center gap-6 mb-12">
            <span className="text-white/40 text-xs sm:text-sm tracking-[0.3em] uppercase">Storytelling through visuals</span>
          </div>
          <button className="relative inline-flex items-center gap-3 text-[11px] tracking-[0.35em] uppercase text-white border border-white/25 px-10 py-4 overflow-hidden group" tabIndex="0">
            <div className="absolute inset-0 bg-amber-400/10 -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
            <span className="relative z-10">Explore Work</span>
            <span className="relative z-10 w-4 h-px bg-white/60 inline-block group-hover:w-8 transition-all duration-300"></span>
          </button>
        </motion.div>
        <motion.div
          className="sm:hidden mt-12 flex flex-col items-center gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 1 }}
        >
          <span className="text-white/40 text-xs tracking-[0.3em] text-center uppercase">Storytelling through visuals</span>
          <button className="relative inline-flex items-center gap-3 text-[11px] tracking-[0.35em] uppercase text-white border border-white/25 px-10 py-4 overflow-hidden group" tabIndex="0">
            <div className="absolute inset-0 bg-amber-400/10 -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
            <span className="relative z-10">Explore Work</span>
          </button>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <span className="text-[9px] tracking-[0.5em] text-white/30 uppercase">Scroll</span>
        <div className="relative w-px h-14 bg-white/10 overflow-hidden">
          <motion.div
            className="absolute top-0 left-0 w-full bg-gradient-to-b from-amber-400 to-transparent"
            initial={{ height: '0%', top: '0%' }}
            animate={{ height: '100%', top: '100%' }}
            transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
          ></motion.div>
        </div>
      </motion.div>

      <motion.p
        className="absolute right-6 sm:right-8 top-1/2 -translate-y-1/2 hidden lg:block text-[9px] tracking-[0.45em] text-white/15 uppercase select-none"
        style={{ writingMode: 'vertical-rl' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        Photographer — Colorist — Filmmaker
      </motion.p>

      <motion.div
        className="absolute bottom-10 left-6 sm:left-8 hidden sm:block"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <span className="text-[9px] tracking-[0.4em] text-white/20 uppercase">Est. 2017</span>
      </motion.div>
    </section>
  );
};

export default HeroSection;
