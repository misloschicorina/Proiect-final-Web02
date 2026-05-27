import styles from './Hero.module.css';
import myProfileImg from '../assets/portret_cori2.jpeg'; // poza de profil

const Hero = () => {
  { /* functie care da scroll la sectiunea de proiecte cand se da click pe buton */ }
  const handleScrollDown = () => {
    const nextSection = document.getElementById('projects-section');
    if (nextSection) { // daca exista sectiunea, da scroll la ea
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className={styles.heroContainer}>
      <div className={styles.content}>
        <h1 className={styles.title}>Buna, numele meu este Cori!</h1>
        <p className={styles.description}>
          Sunt studentă la informatică și acesta este portofoliul meu personal realizat în 
          React și TypeScript[cite: 127, 150]. Aici îmi prezint proiectele și evoluția ca dezvoltator web.
        </p>
        <button className={styles.ctaButton} onClick={handleScrollDown}>
          Vezi proiectele mele ↓
        </button>
      </div>
      
      <div className={styles.imageContainer}>
        <img 
          src={myProfileImg} 
          alt="Poza mea de profil" 
          className={styles.profileImg}
        />
      </div>
    </section>
  );
};

export default Hero;