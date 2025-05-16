import { useState, useEffect } from "react";
import "./index.css";
import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Achievements from "./components/Achievements";
import Footer from "./components/Footer";
import MobileMenu from "./components/MobileMenu";

const App = () => {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <div className={`relative min-h-screen ${darkMode ? "dark" : ""}`}>
      {/* Video Background */}
      <video 
        autoPlay 
        loop 
        muted 
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
      >
        <source src="/bgvideo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {isMobile ? (
        <>
          <Header
            darkMode={darkMode}
            toggleDarkMode={toggleDarkMode}
            toggleMobileMenu={toggleMobileMenu}
          />
          <MobileMenu isOpen={isMobileMenuOpen} onClose={toggleMobileMenu} />
          <main className="pt-16 relative z-10 text-white">
            <Home />
            <About />
            <Skills />
            <Projects />
            <Achievements />
          </main>
        </>
      ) : (
        <div className="flex relative z-10 text-white">
          {/* Sidebar */}
          <div className="w-1/3 fixed left-0 top-0 h-screen overflow-hidden">
            <Home />
          </div>

          {/* Main Content */}
          <div className="w-2/3 ml-auto overflow-y-auto p-2 space-y-8">
            <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
            <main className="space-y-2">
              <section id="about" className="py-10 px-4">
                <About />
              </section>
              <section id="skills" className="py-10 px-2">
                <Skills />
              </section>
              <section id="projects" className="py-10 px-2">
                <Projects />
              </section>
              <section id="achievements" className="py-10 px-2">
                <Achievements />
              </section>
            </main>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default App;
