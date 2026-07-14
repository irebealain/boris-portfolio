import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { client, urlFor } from '../sanity/client';

const ProjectGallery = () => {
  const { slug } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    client.fetch(`*[_type in ["project", "experience"] && slug.current == $slug][0]{
      title,
      subtitle,
      gallery
    }`, { slug })
      .then((data) => {
        setProject(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#050505] flex items-center justify-center pt-20">
        <p className="text-white/50 tracking-widest text-sm uppercase">Loading...</p>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen bg-[#050505] flex flex-col items-center justify-center pt-20 gap-6">
        <p className="text-white/50 tracking-widest text-sm uppercase">Project not found</p>
        <Link to="/" className="text-[10px] tracking-[0.4em] uppercase text-white/30 hover:text-amber-400 transition-colors duration-300 py-4 px-2 border border-white/10 rounded-sm">
          ← Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#050505] pt-28 sm:pt-44 pb-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-16">
        <Link to="/" className="inline-flex items-center gap-2 text-[10px] tracking-[0.4em] uppercase text-amber-400/60 hover:text-amber-400 transition-colors mb-12">
          <span>←</span> Back
        </Link>
        <motion.p 
          className="text-[10px] tracking-[0.5em] uppercase text-white/50 mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {project.subtitle || 'Gallery'}
        </motion.p>
        <div className="overflow-hidden mb-16">
          <motion.h1 
            className="text-4xl sm:text-6xl lg:text-7xl font-thin text-white tracking-tight leading-[1.05]"
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            {project.title}
          </motion.h1>
        </div>

        {(!project.gallery || project.gallery.length === 0) ? (
          <div className="py-20 border-t border-white/5 text-center">
            <p className="text-white/30 tracking-widest text-sm uppercase">No images in this gallery yet.</p>
          </div>
        ) : (
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {project.gallery.map((image, index) => (
              <motion.div 
                key={index}
                className="relative break-inside-avoid overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <img 
                  src={urlFor(image).url()} 
                  alt={`${project.title} - ${index + 1}`} 
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700" 
                  loading="lazy"
                />
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectGallery;
