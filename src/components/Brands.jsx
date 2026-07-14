import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { client, urlFor } from '../sanity/client';

const fallbackBrandsRow1 = [
  { img: "/assets/images/equity-bank-logo_1.webp", alt: "Equity Bank" },
  { img: "/assets/images/bankofkigali_1.svg", alt: "Bank of Kigali" },
  { img: "/assets/images/irembo_1.svg", alt: "Irembo" },
  { img: "/assets/images/smart-africa_1.webp", alt: "Smart Africa" },
  { img: "/assets/images/afreximbank_1.svg", alt: "Afreximbank" },
  { img: "/assets/images/africa-usa_1.webp", alt: "Africa-USANow", invert: true }
];

const fallbackBrandsRow2 = [
  { img: "/assets/images/irembo_1.svg", alt: "Irembo" },
  { img: "/assets/images/smart-africa_1.webp", alt: "Smart Africa" },
  { img: "/assets/images/equity-bank-logo_1.webp", alt: "Equity Bank" },
  { img: "/assets/images/afreximbank_1.svg", alt: "Afreximbank" },
  { img: "/assets/images/bankofkigali_1.svg", alt: "Bank of Kigali" },
  { img: "/assets/images/africa-usa_1.webp", alt: "Africa-USANow", invert: true }
];

const Brands = () => {
  const [row1, setRow1] = useState(fallbackBrandsRow1);
  const [row2, setRow2] = useState(fallbackBrandsRow2);

  useEffect(() => {
    client.fetch(`*[_type == "brand"] | order(order asc)`)
      .then((data) => {
        if (data && data.length > 0) {
          const half = Math.ceil(data.length / 2);
          setRow1(data.slice(0, half));
          setRow2(data.slice(half));
        }
      })
      .catch(console.error);
  }, []);

  return (
    <section id="brands" className="bg-[#030303] py-20 sm:py-28 overflow-hidden border-t border-b border-white/5">
      <motion.div
        className="max-w-7xl mx-auto px-6 lg:px-8 mb-12 flex items-center gap-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <span className="h-px flex-1 bg-white/5"></span>
        <p className="text-[9px] tracking-[0.55em] uppercase text-white/30 shrink-0">
          Brands I've Worked With
        </p>
        <span className="h-px flex-1 bg-white/5"></span>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <div className="flex overflow-hidden group/track mb-8">
          {[1, 2].map((group) => (
            <div key={group} className="flex whitespace-nowrap animate-marquee group-hover/track:[animation-play-state:paused]">
              {row1.map((brand, idx) => (
                <div key={idx} className="flex items-center shrink-0 group/item">
                  <img
                    src={brand.logo ? urlFor(brand.logo).url() : brand.img}
                    alt={brand.name || brand.alt}
                    className={`h-8 sm:h-10 w-auto object-contain mx-10 sm:mx-14 transition-all duration-500 ease-out grayscale opacity-35 group-hover/item:grayscale-0 group-hover/item:opacity-90 ${brand.invert ? 'invert' : ''}`}
                    draggable="false"
                  />
                  <span className="text-amber-400/15 text-[10px] shrink-0">✦</span>
                </div>
              ))}
            </div>
          ))}
        </div>

        <div className="flex overflow-hidden group/track">
          {[1, 2].map((group) => (
            <div key={group} className="flex whitespace-nowrap animate-marquee-reverse group-hover/track:[animation-play-state:paused]">
              {row2.map((brand, idx) => (
                <div key={idx} className="flex items-center shrink-0 group/item">
                  <img
                    src={brand.logo ? urlFor(brand.logo).url() : brand.img}
                    alt={brand.name || brand.alt}
                    className={`h-8 sm:h-10 w-auto object-contain mx-10 sm:mx-14 transition-all duration-500 ease-out grayscale opacity-35 group-hover/item:grayscale-0 group-hover/item:opacity-90 ${brand.invert ? 'invert' : ''}`}
                    draggable="false"
                  />
                  <span className="text-amber-400/15 text-[10px] shrink-0">✦</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Brands;
