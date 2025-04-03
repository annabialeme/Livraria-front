import styles from  "../styles/Section.module.css";
import LivrariaCard from "../components/LivrariaCard";
import { livros } from "../data/livros"
import { autores } from "../data/autores";
import { socialList } from "../data/socialList";

export default function Section ({ title, description, data }) {
    return (
        <section className={styles.section}>
            <div className={styles.content}>
                <h2>{title}</h2>
                <p>{description}</p>
                <ul className={styles.list} >
                { data.map((item) => (
                <LivrariaCard key={item.name} {...item}  />
                    ))}
                </ul>
            </div>
        </section>
    );
}