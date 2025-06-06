import styles from "../styles/LivrariaCard.module.css";

export default function LivrariaCard({ name, link, className }) {
  return (
    <li className={`${styles.card} ${className || ""}`}>
      <a href={link} target="_blank" rel="noopener noreferrer" className={styles.link}>
        <h2 className={styles.title}>Livraria</h2>
        <p className={styles.name}>{name}</p>
      </a>
    </li>
  );
}