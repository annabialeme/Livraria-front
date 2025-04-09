import styles from "../styles/LivroCard.module.css";

export default function LivroCard({ name, image, link, className }) {
  return (
    <li className={`${styles.card} ${className || ""}`}>
      <a href={link} target="_blank" rel="noopener noreferrer" className={styles.link}>
        <img src={image} alt={`Imagem do livro ${name}`} className={styles.image} />
        <p className={styles.name}>{name}</p>
      </a>
    </li>
  );
}