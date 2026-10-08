import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { client, urlFor } from '../sanity/client';

const Projects = () => {
  const [projectsData, setProjectsData] = useState([]);

  useEffect(() => {
    client.fetch(`*[_type == "project"]{
      title,
      subtitle,
      image,
      slug
    } | order(order asc)`)
      .then((data) => {
        if (data && data.length > 0) {
          setProjectsData(data);
        }
      })
      .catch(console.error);
  }, []);
  if (projectsData.length === 0) {
    return null;
  }

  return (
    <section id="projects" className="bg-secondary py-28 sm:py-44">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-16">
        <motion.p
          className="text-[10px] tracking-[0.5em] uppercase text-primaryAccent/60 mb-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          The work
        </motion.p>
        <div className="overflow-hidden">
          <motion.h2
            className="text-5xl sm:text-6xl lg:text-7xl font-thin text-primaryText tracking-tight leading-[1.05]"
            initial={{ y: '100%' }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            Active<br /><span className="font-black italic">Endeavors</span>
          </motion.h2>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-secondaryText/5">
        {projectsData.map((item, index) => {
          const projectUrl = item.slug?.current ? `/gallery/${item.slug.current}` : `/gallery/${item.title?.toLowerCase().replace(/\s+/g, '-') || 'unknown'}`;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
            >
              <Link 
                to={projectUrl}
                className="relative aspect-square overflow-hidden group cursor-pointer block w-full h-full"
              >
                <img src={item.image ? urlFor(item.image).url() : item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent"></div>

                <div className="absolute inset-0 bg-primary/55 flex flex-col items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-[9px] tracking-[0.45em] uppercase text-primaryAccent/70 translate-y-3 group-hover:translate-y-0 transition-transform duration-300">
                    {item.subtitle}
                  </span>
                  <h3 className="text-primaryText text-xl font-light tracking-wide text-center px-4 translate-y-3 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                    {item.title}
                  </h3>
                </div>
              </Link>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
