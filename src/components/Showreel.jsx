import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { client } from '../sanity/client';

const thumbnails = [
  { img: "/assets/images/showreel_1.jpg", title: "Recent", subtitle: "Showreel" },
  { img: "/assets/images/trinity_1.jpg", title: "We are Trinity", subtitle: "Mining" },
  { img: "/assets/images/awfc_1.jpg", title: "Visit Rwanda", subtitle: "Arsenal WFC" },
  { img: "/assets/images/bigereho_1.jpg", title: "Bigereho na BK", subtitle: "TVC" },
  { img: "/assets/images/goballistic_1.jpg", title: "Go Ballistic", subtitle: "Food" },
  { img: "/assets/images/javier_1.jpg", title: "PSG", subtitle: "Visit Rwanda" },
  { img: "/assets/images/kazi_1.jpg", title: "Kazi", subtitle: "Fashion" },
  { img: "/assets/images/shenseea_1.jpg", title: "Shenseea", subtitle: "Lifestyle" },
  { img: "/assets/images/tdr_1.jpg", title: "TDR 2025", subtitle: "TVC" }
];

const fadeUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const Showreel = () => {
  const [activeVideo, setActiveVideo] = useState(0);
  const [highlightData, setHighlightData] = useState(null);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    client.fetch(`*[_type == "highlight"][0]{
      title,
      showreelVideoType,
      showreelVideoUrl,
      "showreelVideoFileUrl": showreelVideoFile.asset->url
    }`)
      .then((data) => {
        if (data) setHighlightData(data);
      })
      .catch(console.error);
  }, []);

  // Determine video URL
  let videoSrc = "https://pub-440ec315fbef45d880bb7429196ef9bd.r2.dev/assets/A%20show%20Reel%20by%20Gitego.mp4";
  if (highlightData) {
    if (highlightData.showreelVideoType === 'file' && highlightData.showreelVideoFileUrl) {
      videoSrc = highlightData.showreelVideoFileUrl;
    } else if (highlightData.showreelVideoType === 'url' && highlightData.showreelVideoUrl) {
      videoSrc = highlightData.showreelVideoUrl;
    }
  }

  return (
    <section className="bg-primary py-28 sm:py-44">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-16 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-8">
          <div>
            <motion.p
              className="text-[10px] tracking-[0.5em] uppercase text-primaryAccent/60 mb-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.8 } } }}
            >
              Showreel
            </motion.p>
            <div className="overflow-hidden">
              <motion.h2
                className="text-5xl sm:text-6xl lg:text-7xl font-thin text-primaryText tracking-tight leading-[1.05]"
                initial={{ y: '100%' }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
                Featured<br /><span className="font-black italic">Work</span>
              </motion.h2>
            </div>
          </div>
          <motion.p
            className="text-secondaryText/30 max-w-xs text-sm leading-relaxed sm:text-right"
            variants={fadeUpVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            9 films — commercial, documentary & music
          </motion.p>
        </div>

        <motion.div
          className="relative w-full overflow-hidden bg-surface aspect-video rounded-sm"
          variants={fadeUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <video className="w-full h-full object-contain" src={videoSrc} autoPlay playsInline muted={isMuted} loop></video>
          <div className="absolute inset-0 z-10 cursor-pointer"></div>
          <div className="absolute top-0 inset-x-0 h-[7%] bg-gradient-to-b from-primary to-transparent pointer-events-none"></div>
          <div className="absolute bottom-0 inset-x-0 h-[7%] bg-gradient-to-t from-primary to-transparent pointer-events-none"></div>

          <div className="absolute top-[10%] left-6 sm:left-10 z-20 pointer-events-none">
            <p className="text-[9px] tracking-[0.45em] uppercase text-primaryAccent/50 mb-1.5">Now playing</p>
            <p className="text-secondaryText/70 text-sm sm:text-base font-light tracking-wide">{thumbnails[activeVideo].title}</p>
            <p className="text-[9px] tracking-[0.4em] uppercase text-secondaryText/25 mt-1">{thumbnails[activeVideo].subtitle}</p>
          </div>
          <div className="absolute top-[10%] right-6 sm:right-10 z-20 text-right pointer-events-none">
            <span className="text-[10px] tracking-[0.4em] text-secondaryText/20">0{activeVideo + 1} / 0{thumbnails.length}</span>
          </div>

          <button 
            onClick={() => setIsMuted(!isMuted)}
            className="absolute bottom-[12%] right-6 sm:right-10 z-20 w-12 h-12 rounded-full border border-divider/20 flex items-center justify-center bg-primary/40 hover:bg-primary/60 backdrop-blur-sm transition-colors cursor-pointer" 
            aria-label={isMuted ? "Unmute" : "Mute"} 
            tabIndex="0"
          >
            {isMuted ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-volume-x text-secondaryText/60">
                <path d="M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z" />
                <line x1="22" x2="16" y1="9" y2="15" />
                <line x1="16" x2="22" y1="9" y2="15" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-volume-2 text-primaryText">
                <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
                <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
              </svg>
            )}
          </button>
        </motion.div>

        <div className="flex gap-px mt-px overflow-x-auto [&::-webkit-scrollbar]:hidden [scrollbar-width:none]">
          {thumbnails.map((thumb, index) => (
            <motion.button
              key={index}
              onClick={() => setActiveVideo(index)}
              className="relative flex flex-col justify-end w-40 sm:w-48 h-28 sm:h-32 flex-shrink-0 text-left overflow-hidden group"
              variants={fadeUpVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.05 * index }}
            >
              <img src={thumb.img} alt={thumb.title} className="absolute inset-0 w-full h-full object-cover" />
              <div className={`absolute inset-0 transition-opacity duration-300 ${activeVideo === index ? 'bg-primary/40' : 'bg-primary/65 group-hover:bg-primary/50'}`}></div>
              {activeVideo === index && <div className="absolute top-0 inset-x-0 h-0.5 bg-primaryAccent"></div>}
              <div className="relative z-10 p-3 sm:p-4">
                <span className="block text-[8px] tracking-[0.4em] uppercase text-primaryAccent/70 mb-1">{thumb.subtitle}</span>
                <span className={`block text-[12px] sm:text-[13px] font-light leading-snug transition-colors ${activeVideo === index ? 'text-primaryText' : 'text-secondaryText/60'}`}>{thumb.title}</span>
              </div>
            </motion.button>
          ))}
        </div>

        <motion.div
          className="mt-8 flex items-center gap-4"
          variants={fadeUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="h-px w-8 bg-primaryAccent/30"></div>
          <p className="text-secondaryText/25 text-xs tracking-widest uppercase">Available for global projects</p>
        </motion.div>
      </div>
    </section>
  );
};

export default Showreel;
