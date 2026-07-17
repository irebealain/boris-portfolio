import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';

const navItems = [
  { label: 'Origin', id: 'home' },
  { label: 'The Story', id: 'about' },
  { label: 'The Craft', id: 'work' },
  { label: 'Gallery', id: 'projects' },
  { label: 'Engage', id: 'connect' }
];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/' && location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

  const scrollToSection = (id) => {
    setIsMobileMenuOpen(false);
    let sectionId = id.toLowerCase();
    if (sectionId === 'home') sectionId = 'hero';

    if (location.pathname !== '/') {
      navigate(`/#${sectionId}`);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isMobileMenuOpen ? 'bg-secondary' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            <button className="flex items-center gap-3 group min-h-12 py-2 relative z-50">
              <div className="relative w-8 h-8 border border-divider/20 group-hover:border-accentHover/40 transition-colors duration-400 flex items-center justify-center shrink-0">
                <span className="text-[10px] font-bold text-primaryText tracking-wider leading-none select-none">BM</span>
                <span className="absolute bottom-0 left-0 w-3 h-px bg-primaryAccent/70 group-hover:w-full transition-all duration-500"></span>
                <span className="absolute bottom-0 left-0 w-px h-3 bg-primaryAccent/70 group-hover:h-full transition-all duration-500"></span>
              </div>
              <span className="hidden sm:block text-primaryText font-thin text-[13px] tracking-[0.4em] uppercase group-hover:tracking-[0.5em] transition-all duration-500">CREATE</span>
            </button>
            <div className="hidden md:flex items-center gap-10">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-[11px] tracking-[0.3em] text-secondaryText/50 hover:text-primaryText uppercase transition-colors duration-300 relative group py-4 px-1 cursor-pointer"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index, duration: 0.5 }}
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-primaryAccent group-hover:w-full transition-all duration-300"></span>
                </motion.button>
              ))}
            </div>
            <button
              className="md:hidden text-secondaryText/70 hover:text-primaryText transition-colors p-3 relative z-50"
              tabIndex="0"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x">
                  <path d="M18 6 6 18" /><path d="m6 6 12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu">
                  <line x1="4" x2="20" y1="12" y2="12"></line>
                  <line x1="4" x2="20" y1="6" y2="6"></line>
                  <line x1="4" x2="20" y1="18" y2="18"></line>
                </svg>
              )}
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-secondary flex flex-col items-center justify-center pt-20 pb-10"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col items-center gap-8 w-full px-6">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-2xl font-light text-secondaryText/70 hover:text-primaryText tracking-widest uppercase transition-colors"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ delay: 0.05 * index, duration: 0.3 }}
                >
                  {item.label}
                </motion.button>
              ))}
            </div>
            <motion.div
              className="mt-auto flex flex-col items-center gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <div className="h-px w-12 bg-primaryAccent/30"></div>
              <p className="text-[10px] tracking-[0.4em] text-secondaryText/30 uppercase">We script your next chapter</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
