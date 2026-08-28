import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Projects, { ProjectType } from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProjectDetail from './components/ProjectDetail';
import { ThemeProvider } from './context/ThemeContext';
import { LangueProvider } from './context/langueContext';

function App() {
  const [selectedProject, setSelectedProject] = useState<ProjectType | null>(null);
  const [allProjects, setAllProjects] = useState<ProjectType[]>([]);

  return (
    <LangueProvider>
      <ThemeProvider>
        <div className="App">
          {selectedProject ? (
            <ProjectDetail
              project={selectedProject}
              allProjects={allProjects}
              onBack={() => {
                setSelectedProject(null);
                setTimeout(() => {
                  document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                }, 100);
              }}
              onSelectProject={(proj) => setSelectedProject(proj)}
            />
          ) : (
            <>
              <Header />
              <main>
                <Hero />
                <About />
                <Skills />
                <Experience />
                <Education />
                <Projects onSelectProject={(proj, list) => {
                  setSelectedProject(proj);
                  setAllProjects(list);
                }} />
                <Contact />
              </main>
              <Footer />
            </>
          )}
        </div>
      </ThemeProvider>
    </LangueProvider>
  );
}

export default App;