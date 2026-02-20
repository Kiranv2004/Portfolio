import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import ParticleBackground from './components/ParticleBackground';
import MouseGlow from './components/MouseGlow';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Activities from './components/Activities';
import ContactSection from './components/Contact';
import Footer from './components/Footer';
import SplashScreen from './components/SplashScreen';

function App() {
    const [showSplash, setShowSplash] = useState(true);

    return (
        <>
            <AnimatePresence>
                {showSplash && <SplashScreen key="splash" onEnter={() => setShowSplash(false)} />}
            </AnimatePresence>

            {/* Navbar lives outside app-container so CSS transform/filter on the
                container don't trap its position:fixed and cause it to disappear */}
            {!showSplash && <Navbar />}

            <div className={`app-container ${showSplash ? 'loading' : ''}`}>
                <ParticleBackground />
                <MouseGlow />
                <main style={{ position: 'relative', zIndex: 2 }}>
                    <Hero />
                    <About />
                    <Skills />
                    <Experience />
                    <Projects />
                    <Education />
                    <Certifications />
                    <Activities />
                    <ContactSection />
                </main>
                <Footer />
            </div>
        </>
    );
}

export default App;
