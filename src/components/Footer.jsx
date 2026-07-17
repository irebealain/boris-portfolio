import React from 'react';
import { motion } from 'framer-motion';

const fadeUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="connect" className="bg-[#030303]">
      <div className="border-t border-divider/5 py-20 sm:py-36">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.p
            className="text-[10px] tracking-[0.5em] uppercase text-primaryAccent mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Get in Touch
          </motion.p>
          <div className="overflow-hidden mb-10 sm:mb-14">
            <motion.h2
              className="font-thin text-primaryText tracking-tight leading-[1.0]"
              style={{ fontSize: 'clamp(2.8rem, 11vw, 7rem)' }}
              initial={{ y: '100%' }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              We Script Your<br /><span className="font-black italic">Next Chapter</span>
            </motion.h2>
          </div>

          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 mb-16 sm:mb-24">
            <motion.form 
              className="flex-1 w-full flex flex-col gap-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              onSubmit={(e) => { e.preventDefault(); alert("Message captured!"); }}
            >
              <div className="flex flex-col sm:flex-row gap-6">
                <input type="text" placeholder="Your Name" className="w-full bg-transparent border-b border-divider/10 pb-3 text-primaryText placeholder:text-secondaryText/30 focus:outline-none focus:border-primaryAccent/50 transition-colors" required />
                <input type="email" placeholder="Your Email" className="w-full bg-transparent border-b border-divider/10 pb-3 text-primaryText placeholder:text-secondaryText/30 focus:outline-none focus:border-primaryAccent/50 transition-colors" required />
              </div>
              <textarea placeholder="Tell me about your project" rows="4" className="w-full bg-transparent border-b border-divider/10 pb-3 text-primaryText placeholder:text-secondaryText/30 focus:outline-none focus:border-primaryAccent/50 transition-colors resize-none" required></textarea>
              <button type="submit" className="self-start mt-2 inline-flex items-center gap-3 border border-divider/20 hover:border-accentHover/50 px-8 py-4 text-[11px] tracking-[0.3em] uppercase text-primaryText transition-all group overflow-hidden relative" tabIndex="0">
                <div className="absolute inset-0 bg-primaryAccent/10 -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
                <span className="relative z-10">Transmit Vision</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right relative z-10 text-secondaryText/50 group-hover:text-accentHover transition-colors duration-300">
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </button>
            </motion.form>

            <div className="flex-1 flex flex-col items-start">
              <motion.a
                href="mailto:mugishaboris@gmail.com"
                className="group inline-flex items-center gap-3 border-b border-divider/10 hover:border-accentHover/40 pb-3 transition-colors duration-300 mb-12 sm:mb-16 w-full"
                variants={fadeUpVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <span className="text-secondaryText/60 group-hover:text-primaryText text-base sm:text-xl tracking-wide transition-colors duration-300">
                  mugishaboris@gmail.com
                </span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up-right text-secondaryText/20 group-hover:text-accentHover transition-colors duration-300 shrink-0 ml-auto">
                  <path d="M7 7h10v10"></path>
                  <path d="M7 17 17 7"></path>
                </svg>
              </motion.a>

              <motion.div
                className="flex flex-col sm:flex-row sm:items-center gap-8 w-full mb-12 sm:mb-16"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="flex items-center gap-6 sm:gap-10">
                  <div>
                    <p className="text-[9px] tracking-[0.45em] uppercase text-secondaryText/20 mb-1.5">Based in</p>
                    <p className="text-secondaryText/50 text-sm">Kigali, Rwanda</p>
                  </div>
                  <div className="w-px h-8 bg-divider/8"></div>
                  <div>
                    <p className="text-[9px] tracking-[0.45em] uppercase text-secondaryText/20 mb-1.5">Available for</p>
                    <p className="text-secondaryText/50 text-sm">Global projects</p>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                className="flex flex-wrap items-center gap-4 border-t border-divider/5 pt-8 w-full"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <a href="https://www.instagram.com/himself_boris/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="flex items-center gap-2 text-secondaryText/30 hover:text-primaryText transition-colors duration-300 py-2">
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="16" width="16" xmlns="http://www.w3.org/2000/svg">
                    <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
                  </svg>
                  <span className="text-[10px] tracking-[0.3em] uppercase">Connect on IG</span>
                </a>
                <a href="https://www.linkedin.com/in/mugisha-boris-7a2302242" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="flex items-center gap-2 text-secondaryText/30 hover:text-primaryText transition-colors duration-300 py-2 ml-4">
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="16" width="16" xmlns="http://www.w3.org/2000/svg">
                    <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
                  </svg>
                  <span className="text-[10px] tracking-[0.3em] uppercase">Connect on LinkedIn</span>
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-divider/5">
        <motion.div
          className="max-w-7xl mx-auto px-6 lg:px-8 py-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-between mb-5">
            <button className="flex items-center gap-2.5 group">
              <div className="relative w-6 h-6 border border-divider/15 group-hover:border-accentHover/40 transition-colors duration-400 flex items-center justify-center shrink-0">
                <span className="text-[8px] font-bold text-secondaryText/40 tracking-wider leading-none">BM</span>
                <span className="absolute bottom-0 left-0 w-2 h-px bg-primaryAccent/60 group-hover:w-full transition-all duration-500"></span>
                <span className="absolute bottom-0 left-0 w-px h-2 bg-primaryAccent/60 group-hover:h-full transition-all duration-500"></span>
              </div>
              <span className="text-secondaryText/20 text-[10px] tracking-[0.4em] uppercase group-hover:text-secondaryText/40 transition-colors duration-300">BEGIN</span>
            </button>
            <button
              onClick={scrollToTop}
              className="w-8 h-8 border border-divider/10 hover:border-accentHover/40 flex items-center justify-center text-secondaryText/25 hover:text-primaryText transition-all duration-300"
              aria-label="Back to top"
              tabIndex="0"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up">
                <path d="m5 12 7-7 7 7"></path>
                <path d="M12 19V5"></path>
              </svg>
            </button>
          </div>
          <div className="flex flex-wrap items-center gap-y-3 border-t border-divider/5 pt-5">
            <nav className="hidden lg:flex flex-wrap gap-x-5 gap-y-2 flex-1">
              {['The Story', 'The Craft', 'Gallery', 'Engage'].map((item, i) => (
                <button key={i} className="text-[10px] tracking-[0.35em] uppercase text-secondaryText/25 hover:text-primaryText transition-colors duration-300 py-1">
                  {item}
                </button>
              ))}
            </nav>
            <p className="text-secondaryText/15 text-[10px] tracking-wider flex-1 text-center">
              © 2026 Mugisha Boris
            </p>
            <div className="hidden lg:block flex-1"></div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
