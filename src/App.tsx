import Hero from './components/Hero';
import ProjectsGrid from './components/ProjectsGrid';
import CommitHistory from './components/CommitHistory';
import './App.css';

function App() {
  return (
    <> {/* fragment pt a putea returna mai multe elem (React ne returnam un sg parinte) */}
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