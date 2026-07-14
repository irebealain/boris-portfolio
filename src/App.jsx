import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import CustomCursor from './components/CustomCursor';
import Home from './pages/Home';
import ProjectGallery from './pages/ProjectGallery';
import Footer from './components/Footer';
import SanityStudio from './sanity/Studio';

function App() {
  if (window.location.pathname.startsWith('/studio')) {
    return <SanityStudio />;
  }

  // Add script for cal.com embed if needed
  useEffect(() => {
    (function (C, A, L) {
      let p = function (a, ar) {
        a.q.push(ar);
      };
      let d = C.document;
      C.Cal =
        C.Cal ||
        function () {
          let cal = C.Cal;
          let ar = arguments;
          if (!cal.loaded) {
            cal.ns = {};
            cal.q = cal.q || [];
            d.head.appendChild(d.createElement("script")).src = A;
            cal.loaded = true;
          }
          if (ar[0] === L) {
            const api = function () {
              p(api, arguments);
            };
            const namespace = ar[1];
            api.q = api.q || [];
            if (typeof namespace === "string") {
              cal.ns[namespace] = cal.ns[namespace] || api;
              p(cal.ns[namespace], ar);
              p(cal, ["initNamespace", namespace]);
            } else p(cal, ar);
            return;
          }
          p(cal, ar);
        };
    })(window, "https://app.cal.com/embed/embed.js", "init");

    Cal("init", { origin: "https://cal.com" });
    Cal("ui", { "styles": { "branding": { "brandColor": "#aa3bff" } }, "hideEventTypeDetails": false, "layout": "month_view" });
  }, []);

  return (
    <div className="font-sans antialiased text-[#6b6375] bg-white selection:bg-[#aa3bff]/30 dark:text-[#9ca3af] dark:bg-[#16171d] overflow-x-hidden">
      <CustomCursor />
      <div id="root-container" className="w-full mx-auto text-left min-h-[100svh] flex flex-col box-border border-x border-[#e5e4e7] dark:border-[#2e303a] bg-black">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/gallery/:slug" element={<ProjectGallery />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
