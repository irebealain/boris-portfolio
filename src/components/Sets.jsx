import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { client, urlFor } from '../sanity/client';

const fallbackSets = [
  { img: "/assets/images/WhatsApp_20Image_202026-05-14_20at_2020.36.35_20_1__1.jpeg", subtitle: "Street Pulse", title: "Kigali" },
  { img: "/assets/images/WhatsApp_20Image_202026-05-15_20at_2006.53.57_1.jpeg", subtitle: "Arsenal Collab", title: "London" },
  { img: "/assets/images/WhatsApp_20Image_202026-05-15_20at_2006.54.08_1.jpeg", subtitle: "Transform Africa", title: "Kigali" },
  { img: "/assets/images/WhatsApp_20Image_202026-05-15_20at_2006.54.11_1.jpeg", subtitle: "Night Game", title: "Rwanda" },
  { img: "/assets/images/WhatsApp_20Image_202026-05-15_20at_2006.53.55_1.jpeg", subtitle: "Dusk Light", title: "Rwanda" },
  { img: "/assets/images/WhatsApp_20Image_202026-05-15_20at_2006.54.08_20_1__1.jpeg", subtitle: "Ghetto Graff", title: "Guinée" },
  { img: "/assets/images/WhatsApp_20Image_202026-05-14_20at_2020.36.36_1.jpeg", subtitle: "Hard Ground", title: "Mine Site" },
  { img: "/assets/images/WhatsApp_20Image_202026-05-15_20at_2006.53.55_20_2__1.jpeg", subtitle: "Culture & Nature", title: "Highland Spirit" }
];

const fadeUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const Sets = () => {
  const [setsData, setSetsData] = useState(fallbackSets);

  useEffect(() => {
    client.fetch(`*[_type == "experience"]{
      title,
      subtitle,
      image,
      slug
    } | order(order asc)`)
      .then((data) => {
        if (data && data.length > 0) {
          setSetsData(data);
        }
      })
      .catch(console.error);
  }, []);

  return (
    <section id="sets" className="bg-secondary py-28 sm:py-44">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-16">
        <motion.p
          className="text-[10px] tracking-[0.5em] uppercase text-primaryAccent/60 mb-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.8 } } }}
        >
          Sets
        </motion.p>
        <div className="overflow-hidden">
          <motion.h2
            className="text-5xl sm:text-6xl lg:text-7xl font-thin text-primaryText tracking-tight leading-[1.05]"
            initial={{ y: '100%' }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            The<br /><span className="font-black italic">experience</span>
          </motion.h2>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-secondaryText/5">
        {setsData.map((item, index) => {
          const setUrl = item.slug?.current ? `/gallery/${item.slug.current}` : `/gallery/${item.title?.toLowerCase().replace(/\s+/g, '-') || 'unknown'}`;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link 
                to={setUrl}
                className="relative aspect-square overflow-hidden group cursor-pointer block w-full h-full"
              >
                <img src={item.image ? urlFor(item.image).url() : item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent flex flex-col justify-end p-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-[9px] tracking-[0.4em] uppercase text-primaryAccent/70 mb-1">{item.subtitle}</p>
                    <h3 className="text-primaryText text-xl font-light tracking-wide">{item.title}</h3>
                  </div>
                </div>
                <div className="absolute inset-0 border border-primaryAccent/0 pointer-events-none group-hover:border-accentHover/30 transition-colors duration-300"></div>
              </Link>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Sets;
