import styles from "../styles/LivrariaCard.module.css";

export default function LivrariaCard ({ name, link, className}) {
    return (
        <li className={`${styles.card}${className || ""}`}>
            <a href={link} target="_blank" rel="noopener noreferrer">
              <h2>teste</h2>
                <p>{name}</p>
            </a>
        </li>
    )
}