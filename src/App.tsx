import { useState, useEffect } from 'react';
import Hero from './components/Hero';
import ProjectsGrid from './components/ProjectsGrid';
import CommitHistory from './components/CommitHistory';
import './App.css';

function App() {
  // Lista de teme disponibile (scalabila)
  const availableThemes = ['default', 'retro', 'whimsical'];

  // Citim din LocalStorage la pornire. Daca e gol, punem 'default'
  const [theme, setTheme] = useState<string>(() => {
    return localStorage.getItem('portfolio-theme') || 'default';
  });

  // Aplicam tema pe eticheta HTML si o salvam in LocalStorage
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  // Schimba tema in mod circular prin lista
  const handleThemeChange = () => {
    const currentIndex = availableThemes.indexOf(theme);
    const nextIndex = (currentIndex + 1) % availableThemes.length;
    setTheme(availableThemes[nextIndex]);
  };

  return (
    <> {/* fragment pt a putea returna mai multe elem (React ne returnam un sg parinte) */}
      
      {/* Butonul pentru schimbarea temei pozitionat fix in colt */}
      <button 
        onClick={handleThemeChange} 
        className="theme-toggle-btn" /* Adăugat o clasă simplă pentru a injecta emoji-ul din CSS */
        style={{
          position: 'fixed',
          top: '20px',
          right: '20px',
          zIndex: 1000,
          padding: '12px 20px',
          borderRadius: '30px',
          border: '2px solid var(--text-main)',
          backgroundColor: 'var(--card-bg)',
          color: 'var(--text-main)',
          cursor: 'pointer',
          fontWeight: 'bold',
          boxShadow: '0 4px 15px var(--card-shadow)',
          transition: 'all 0.3s ease',
          display: 'flex',
          alignItems: 'center',
          gap: '8px'
        }}
      >
        Switch Style
      </button>

      {/* Sectiunea hero (cea de sus cu text si poza) */}
      <Hero />

      {/* Sectiunea de proiecte si activitate git (commituri) */}
      <div id="projects-section" className="projectsContainer">
        <ProjectsGrid />
        <CommitHistory />
      </div>
    </>
  );
}

export default App;