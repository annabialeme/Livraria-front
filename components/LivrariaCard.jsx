import styles from "../styles/LivrariaCard.module.css";

export default function LivrariaCard ({ name, image, link, className}) {
    return (
        <li className={`${styles.card}${className || ""}`}>
            <a href={link} target="_blank" rel="noopener noreferrer">
                <img src= {image} alt={`Imagem do jogo ${name}`}/>
                <p>{name}</p>
            </a>
        </li>
    )
}