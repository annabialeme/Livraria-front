import styles from "../styles/SocialCard.module.css";

export default function SocialCard({ link, color, svg }) {
  return (
    <li className={styles.card}>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href={link}
        className={styles.link}
      >
        <svg
          className={styles.imgCard}
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g fill={color}>{svg}</g>
        </svg>
      </a>
    </li>
  );
}