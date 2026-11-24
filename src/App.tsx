import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Services } from './components/Services';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ScrollProgress } from './components/ScrollProgress';
import { BackToTop } from './components/BackToTop';
import { MotionConfig } from 'framer-motion';

function App() {
  return (
    <MotionConfig reducedMotion="user">
    <div className="relative min-h-screen bg-[#0F172A] text-[#F8FAFC]">
      {/* Background ambient gradient glow */}
      <div className="nebula"></div>

      {/* Reading progress */}
      <ScrollProgress />

      {/* Navigation */}
      <Navbar />

      {/* Main Content Layout */}
      <main id="main-content" className="w-full">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Services />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Quick navigation */}
      <BackToTop />
    </div>
    </MotionConfig>
  );
}

export default App;
