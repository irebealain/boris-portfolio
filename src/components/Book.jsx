import React from 'react';
import { motion } from 'framer-motion';

const fadeUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const Book = () => {
  return (
    <section id="book" className="bg-[#050505] py-28 sm:py-44">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-16 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-8">
          <div>
            <motion.p 
              className="text-[10px] tracking-[0.5em] uppercase text-amber-400/60 mb-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              Booking
            </motion.p>
            <div className="overflow-hidden">
              <motion.h2 
                className="text-5xl sm:text-6xl lg:text-7xl font-thin text-white tracking-tight leading-[1.05]"
                initial={{ y: '100%' }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
                Let's<br/><span className="font-black italic">Create</span>
              </motion.h2>
            </div>
          </div>
          <motion.p 
            className="text-white/30 max-w-xs text-sm leading-relaxed sm:text-right"
            variants={fadeUpVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Pick a time that works for you — let's talk through your project.
          </motion.p>
        </div>
        
        <style>
          {`
            #book,
            #book cal-inline,
            #book [class*="cal-element-embed"] {
              color-scheme: dark;
              background-color: #000;
            }
            .cal-inline-container::-webkit-scrollbar {
              display: none;
            }
            .cal-inline-container {
              scrollbar-width: none;
            }
          `}
        </style>
        
        <motion.div 
          className="relative w-full lg:max-w-4xl mx-auto min-h-[760px] sm:min-h-[680px] md:min-h-[560px] lg:min-h-[480px] overflow-hidden bg-black border border-white/5"
          initial={{ opacity: 0, y: 30, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className="pointer-events-none absolute top-5 left-5 z-10 w-7 h-7 border-t border-l border-white/10"></div>
          <div className="pointer-events-none absolute top-5 right-5 z-10 w-7 h-7 border-t border-r border-white/10"></div>
          <div className="pointer-events-none absolute bottom-5 left-5 z-10 w-7 h-7 border-b border-l border-white/10"></div>
          <div className="pointer-events-none absolute bottom-5 right-5 z-10 w-7 h-7 border-b border-r border-white/10"></div>
          
          <div 
            className="cal-inline-container"
            style={{
              width: "calc(100% + 24px)",
              height: "auto",
              minHeight: "100%",
              marginLeft: "-12px",
              marginTop: "-12px",
              overflow: "hidden",
              background: "rgb(0, 0, 0)"
            }}
          >
            <iframe
              className="cal-embed"
              name="cal-embed="
              title="Book a call"
              allow="payment"
              data-effective-cal-link="mugisha-boris"
              src="https://app.cal.com/mugisha-boris/embed?layout=month_view&theme=dark&embedType=inline&ui.color-scheme=dark&embed="
              style={{ height: "538px", width: "100%", border: "none" }}
            ></iframe>
          </div>
        </motion.div>
        
        <motion.div 
          className="mt-8 flex items-center gap-4"
          variants={fadeUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="h-px w-8 bg-amber-400/30"></div>
          <p className="text-white/25 text-xs tracking-widest uppercase">
            Available for global projects
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Book;
