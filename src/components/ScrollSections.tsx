import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Introduction from './sections/Introduction';
import AboutUs from './sections/AboutUs';
import Projects from './sections/Projects';

const ScrollSections = () => {
  const [clickedSection, setClickedSection] = useState<string | null>(null);

  const { ref: introRef, inView: introInView } = useInView({ triggerOnce: false });
  const { ref: aboutRef, inView: aboutInView } = useInView({ triggerOnce: false });
  const { ref: projectsRef, inView: projectsInView } = useInView({ triggerOnce: false });

  const activeSection =
    introInView
    ? 'intro'
    : aboutInView
    ? 'about'
    : projectsInView
    ? 'projects'    
    : '';

  const handleNavClick = (sectionId: string) => {
    setClickedSection(sectionId);
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const sectionMotionProps = (id: string, inView: boolean) => ({
    initial: { opacity: 0, y: 50 },
    animate: { opacity: inView || clickedSection === id ? 1 : 0, y: inView || clickedSection === id ? 0 : 50 },
    transition: { duration: 0.8 },
  });

  return (
    <div className="w-full bg-[#F1EDE4] text-[#3E2F1C]">
      <header className="fixed top-0 left-0 w-full bg-[#FAF8F5] shadow-md z-50">
        <nav className="flex justify-center py-4 gap-x-4 flex-wrap">
          {[
            ['intro', 'Inicio'],
            ['about', 'Sobre Nosotros'],
            ['projects', 'Projectos'],
          ].map(([id, label]) => (
            <button
              key={id}
              onClick={() => handleNavClick(id)}
              className={`hover:text-[#BD9C86] transition-colors font-semibold cursor-pointer active:text-[#a0806a] active:scale-98 ${
                activeSection === id ? 'text-[#BD9C86]' : ''
              }`}
            >
              {label}
            </button>
          ))}
        </nav>
      </header>

      <main>
        <motion.section id="intro" ref={introRef} className="scroll-mt-24" {...sectionMotionProps('intro', introInView)}>
          <Introduction />
        </motion.section>
        <motion.section id="about" ref={aboutRef} className="scroll-mt-24" {...sectionMotionProps('about', aboutInView)}>
          <AboutUs />
        </motion.section>
        <motion.section id="projects" ref={projectsRef} className="scroll-mt-24" {...sectionMotionProps('projects', projectsInView)}>
          <Projects />
        </motion.section>
      </main>
    </div>
  );
};

export default ScrollSections;
