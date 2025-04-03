import styles from  "../styles/Section.module.css";
import LivrariaCard from "../components/LivrariaCard";

export default function Section ({ title, description, data, cardClassName}) {
    return (
        <section className={styles.section}>
            <div className={styles.content}>
                <h2>{title}</h2>
                <p>{description}</p>
                <ul className={styles.list} >
                    {data.map((item) => (
                        <LivrariaCard key={item.name} {...item} className={cardClassName} />
                    ))}
                </ul>
            </div>
        </section>
    );
}