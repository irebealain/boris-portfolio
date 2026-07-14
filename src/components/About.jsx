import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { client, urlFor } from '../sanity/client';

const fadeUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const About = () => {
  const [aboutData, setAboutData] = useState(null);

  useEffect(() => {
    client.fetch(`*[_type == "about"][0]`)
      .then((data) => {
        if (data) {
          setAboutData(data);
        }
      })
      .catch(console.error);
  }, []);

  const title = aboutData?.title || 'The Creator';
  const imageUrl = aboutData?.image ? urlFor(aboutData.image).url() : '/assets/images/Artwork_20by_20Kalibana.JPG';
  const paragraphs = aboutData?.story?.length > 0 ? aboutData.story : [
    "Born and raised in Rwanda, I’m a visual storyteller driven by emotion, atmosphere, and the power of cinematic imagery. My creative journey began with a fascination for color, light, movement, and the way a single frame can communicate what words often cannot.",
    "Working across photography, cinematography, and post-production, I create visuals that combine authenticity with cinematic storytelling and strong artistic direction. Inspired by diverse cultures, environments, and collaborations, I craft emotionally grounded imagery for brands, campaigns, documentaries, and commercial productions. From concept development to editing and color grading, I approach every project with creativity, precision, and attention to detail.",
    "Every frame is a canvas. Every grade is a mood. Every project is a story waiting to be told through color. The goal remains the same: to create timeless visuals that connect, inspire, and tell stories worth remembering."
  ];
  const stats = aboutData?.stats?.length > 0 ? aboutData.stats : [
    { number: "10+", label: "Years", link: "#sets" },
    { number: "200+", label: "Projects", link: "#projects" },
    { number: "50+", label: "Brands", link: "#brands" }
  ];

  return (
    <section id="about" className="relative bg-[#080808] py-28 sm:py-44 overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-400/3 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-28 items-center">

          <motion.div
            className="relative order-2 lg:order-1 -mx-6 sm:mx-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="aspect-[3/4] w-full overflow-hidden relative">
              <motion.div
                className="absolute inset-0 bg-[#080808] z-10"
                initial={{ scaleY: 1 }}
                whileInView={{ scaleY: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 1.2, ease: [0.77, 0, 0.175, 1], originY: 0 }}
              ></motion.div>
              <motion.img
                src={imageUrl}
                alt="Mugisha Boris"
                className="w-full h-full object-cover object-center"
                initial={{ scale: 1.2 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
              />
            </div>
            <motion.div
              className="absolute -bottom-5 -right-5 w-24 h-24 hidden lg:block"
              variants={fadeUpVariant}
            >
              <div className="absolute right-0 top-0 w-full h-px bg-amber-400/30"></div>
              <div className="absolute right-0 top-0 h-full w-px bg-amber-400/30"></div>
            </motion.div>
            <motion.div
              className="absolute -top-5 -left-5 w-24 h-24 hidden lg:block"
              variants={fadeUpVariant}
            >
              <div className="absolute left-0 top-0 w-full h-px bg-white/10"></div>
              <div className="absolute left-0 top-0 h-full w-px bg-white/10"></div>
            </motion.div>
          </motion.div>

          <div className="order-1 lg:order-2 space-y-10">
            <motion.p
              className="text-[10px] tracking-[0.5em] uppercase text-amber-400/60"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              The Story
            </motion.p>

            <div className="overflow-hidden">
              <motion.h2
                className="text-5xl sm:text-6xl lg:text-7xl font-thin text-white leading-[1.05] tracking-tight"
                initial={{ y: '100%' }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
                The<br /><span className="font-black italic text-white">{title.replace('The ', '')}</span>
              </motion.h2>
            </div>

            <div className="space-y-5 border-l border-white/8 pl-6">
              {paragraphs.map((text, i) => (
                <motion.p
                  key={i}
                  className="text-white/65 leading-relaxed text-sm sm:text-base"
                  variants={fadeUpVariant}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * i }}
                >
                  {text}
                </motion.p>
              ))}
            </div>

            <motion.div
              className="flex flex-wrap gap-6 sm:gap-10 pt-4"
              variants={fadeUpVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {stats.map((stat, i) => (
                <div key={i} className="flex flex-col gap-1">
                  <a href={stat.link} className="flex flex-col gap-1 group">
                    <span className="text-5xl sm:text-6xl font-thin text-white leading-none group-hover:text-amber-400/80 transition-colors duration-300" style={{ fontVariantNumeric: 'tabular-nums' }}>
                      {stat.number}
                    </span>
                    <span className="text-[10px] tracking-[0.4em] uppercase text-white/55 group-hover:text-amber-400/50 transition-colors duration-300">
                      {stat.label}
                    </span>
                  </a>
                </div>
              ))}
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
