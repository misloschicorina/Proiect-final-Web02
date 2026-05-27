import { useState } from 'react';
import styles from './ProjectsGrid.module.css';

// Structura pe care o va avea fiecare proiect (interfata TypeScript)
interface Project {
  id: number;
  title: string;
  shortDescription: string;
  longDescription: string;
  imageUrl: string;
  projectUrl: string;
}

const ProjectsGrid = () => {
  // Lista de proiecte din portofoliu
  const projectsData: Project[] = [
    {
      id: 1,
      title: "Cmd-Line Client for REST API",
      shortDescription: "Client CLI în C pentru interacțiunea cu un API REST și gestionarea unei baze de date..",
      longDescription: "Aplicație Linux dezvoltată în C ce interacționează cu un API RESTful prin metode HTTP (GET, POST, PUT, DELETE). Include gestionarea stării sesiunii prin autentificare JWT, management de cookie-uri pentru controlul accesului bazat pe roluri (RBAC) și parsarea răspunsurilor JSON complexe folosind biblioteca Parson.",
      imageUrl: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?w=500&auto=format&fit=crop&q=60",
      projectUrl: "https://github.com/misloschicorina/CLI-Movie-API-Client" 
    },
    {
      id: 2,
      title: "E-Banking System",
      shortDescription: "Backend bancar în Java axat pe tranzacții, schimb valutar și logici de cashback.",
      longDescription: "Sistem complet de e-banking implementat în Java pe principii OOP curate. Dispune de automatizări pentru taxe și cashback în funcție de planul utilizatorului, plăți partajate (split) și conturi de business cu ierarhii de acces (owner, manager, angajat). Arhitectura folosește design pattern-urile Factory Method, Strategy și Command.",
      imageUrl: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=500&auto=format&fit=crop&q=60",
      projectUrl: "https://github.com/misloschicorina/E-Banking-System-part-two"
    },
    {
      id: 3,
      title: "Asynchronous Web Server",
      shortDescription: "Server HTTP de înaltă performanță în C, optimizat la nivel de kernel Linux.",
      longDescription: "Server web asincron capabil să gestioneze conexiuni concurente masive folosind multiplexarea I/O prin epoll și socket-uri non-blocante. Performanța transmisiei de date este optimizată prin mecanisme de tip zero-copy (sendfile) pentru fișiere statice și prin API-ul Linux Asynchronous I/O pentru livrare dinamică.",
      imageUrl: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=500&auto=format&fit=crop&q=60",
      projectUrl: "https://github.com/misloschicorina/Async-Web-Server-C"
    }
  ];

  // State care tine minte pe ce card se afla mouse-ul userului
  // Se ia id-ul proiectului sau null 
  const [hoveredProjectId, setHoveredProjectId] = useState<number | null>(null);

  return (
    <section className={styles.sectionContainer}>
      <h2 className={styles.sectionTitle}>Proiectele Mele</h2>
      
      <div className={styles.grid}>
        { /* Parcurge lista de proiecte si face un card pt fiecare */ }
        {projectsData.map((project) => (
          <a 
            key={project.id}
            href={project.projectUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.card}
            onMouseEnter={() => setHoveredProjectId(project.id)} // mouse pe card
            onMouseLeave={() => setHoveredProjectId(null)}       // mouse pleaca de pe card
          >
            <img src={project.imageUrl} alt={project.title} className={styles.cardImage} />
            
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>{project.title}</h3>
              
              {/* Afisare descriere scurta sau lunga in functie de hover */}
              <p className={styles.cardDescription}>
                {hoveredProjectId === project.id 
                  ? project.longDescription 
                  : project.shortDescription
                }
              </p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default ProjectsGrid;