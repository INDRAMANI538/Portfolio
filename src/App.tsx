import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education'; // ✅ Import Education
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Cursor from './components/Cursor';
import Certificates from './components/Certificates';



function App() {
  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <Cursor />
      <Navbar />
      <Hero />
      <About />
      <Education /> {/* ✅ Add Education section here */}
      <Skills />
      <Certificates/>
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
