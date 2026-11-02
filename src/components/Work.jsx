import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { client } from '../sanity/client';

const fadeUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const fallbackServices = [
  {
    num: "01",
    title: "Color Grading",
    desc: "Cinematic color treatments that define mood, atmosphere, and emotional tone. From brand commercials to feature film pipelines.",
    tags: ["DaVinci Resolve", "ACES Pipeline", "LUT Design"]
  },
  {
    num: "02",
    title: "Photography",
    desc: "Editorial, portrait, and landscape photography with a cinematic eye. Every shot composed with intention and craft.",
    tags: ["Sony Alpha", "Canon EOS", "Medium Format"]
  },
  {
    num: "03",
    title: "Videography",
    desc: "Full-service video production from pre-production strategy to final delivery. Motion that moves people.",
    tags: ["4K Cinema", "Drone Aerial", "Gimbal Work"]
  },
  {
    num: "04",
    title: "Post-Production",
    desc: "Complete post-production workflow management — editing, sound, color, and Film-making effects under one creative vision.",
    tags: ["Premiere Pro", "After Effects", "DaVinci"]
  }
];

const Work = () => {
  const [services, setServices] = useState(fallbackServices);

  useEffect(() => {
    client.fetch(`*[_type == "expertise"] | order(order asc)`)
      .then((data) => {
        if (data && data.length > 0) {
          setServices(data);
        }
      })
      .catch(console.error);
  }, []);

  return (
    <section id="work" className="bg-secondary py-28 sm:py-44 border-t border-divider/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-20">
          <motion.p 
            className="text-[10px] tracking-[0.5em] uppercase text-primaryAccent/60 mb-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.8 } } }}
          >
            Expertise
          </motion.p>
          <div className="overflow-hidden">
            <motion.h2 
              className="text-5xl sm:text-7xl lg:text-8xl font-thin text-primaryText tracking-tight leading-[1.0]"
              initial={{ y: '100%' }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="font-black italic">Services</span>
            </motion.h2>
          </div>
        </div>

        <div className="border-t border-divider/5">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              className="py-9 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 border-b border-divider/5 group cursor-default"
              variants={fadeUpVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="md:col-span-1 flex items-start pt-1">
                <span className="text-[11px] font-mono text-secondaryText/20 tracking-widest">{service.num}</span>
              </div>
              <div className="md:col-span-3">
                <h3 className="text-2xl sm:text-3xl text-primaryText font-light tracking-tight group-hover:text-accentHover transition-colors duration-400">{service.title}</h3>
              </div>
              <div className="md:col-span-5">
                <p className="text-secondaryText/35 text-sm leading-relaxed">{service.desc}</p>
              </div>
              <div className="md:col-span-3 flex flex-wrap gap-2 items-start pt-1">
                {service.tags && service.tags.map((tag, tIndex) => (
                  <span key={tIndex} className="text-[9px] tracking-[0.25em] uppercase text-secondaryText/20 border border-divider/8 px-2.5 py-1 group-hover:border-accentHover/20 group-hover:text-primaryAccent/40 transition-colors duration-400">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="mt-16 flex items-center gap-6"
          variants={fadeUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <span className="h-px flex-1 bg-divider/5"></span>
          <button className="text-[10px] tracking-[0.4em] uppercase text-secondaryText/30 hover:text-accentHover transition-colors duration-300 py-4 px-2">
            Ignite a Partnership →
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Work;
