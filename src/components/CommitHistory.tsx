import { useState, useEffect } from 'react';
import styles from './CommitHistory.module.css';

interface ProjectCommit {
  id: string;
  repoName: string;
  message: string;
  date: string;
  author: string;
}

const CommitHistory = () => {
  const [commits, setCommits] = useState<ProjectCommit[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // ==========================================
  // CONFIGURARE: Pune aici datele repo-ului public
  // ==========================================
  const owner = 'misloschicorina'; // Ex: 'cori123'
  const repo = 'CLI-Movie-API-Client';  // Ex: 'pthreads-lab' sau 'portofoliu-proiect'
  // ==========================================

  useEffect(() => {
    const fetchProjectCommits = async () => {
      try {
        setLoading(true);
        // Tragem ultimele 5 commit-uri din acest repository public specific
        const response = await fetch(`https://api.github.com/repos/${owner}/${repo}/commits?per_page=5`);
        
        if (!response.ok) {
          throw new Error('Nu s-a putut accesa repository-ul. Verifică dacă numele este corect și proiectul e Public.');
        }

        const data = await response.json();
        
        // Mapăm array-ul primit de la GitHub în structura noastră locală
        const formatted = data.map((item: any) => ({
          id: item.sha,
          repoName: repo,
          message: item.commit.message,
          date: item.commit.author.date,
          author: item.commit.author.name
        }));

        setCommits(formatted);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProjectCommits();
  }, []);

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { 
      year: 'numeric', month: 'long', day: 'numeric',
      hour: '2-digit', minute: '2-digit'
    };
    return new Date(dateString).toLocaleDateString('ro-RO', options);
  };

  if (loading) return <div className={styles.status}>Se încarcă istoricul activității...</div>;
  if (error) return <div className={styles.error}>Eroare: {error}</div>;

  return (
    <div className={styles.historyContainer}>
      <h3 className={styles.title}>Activitate Live pe GitHub</h3>
      <p className={styles.subtitle}>
        Ultimele actualizări din proiectul <strong style={{color: '#007acc'}}>{repo}</strong>:
      </p>
      
      <div className={styles.timeline}>
        {commits.map((item) => (
          <div key={item.id} className={styles.timelineItem}>
            <div className={styles.bullet}></div>
            <div className={styles.commitContent}>
              <span className={styles.date}>{formatDate(item.date)}</span>
              <p className={styles.message}>{item.message}</p>
              <span className={styles.author}>De la: {item.author}</span>
            </div>
          </div>
        ))}
        {commits.length === 0 && (
          <div className={styles.status}>Nu s-au găsit commit-uri în acest proiect.</div>
        )}
      </div>
    </div>
  );
};

export default CommitHistory;