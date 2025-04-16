import styles from "../styles/Section.module.css";
import LivrariaCard from "../components/LivrariaCard";

export default function Section({ title, description, data }) {
  return (
    <section className={styles.section}>
      <div className={styles.content}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>{description}</p>
        <ul className={styles.cardList}>
          {data.map((item, index) => (
            <LivrariaCard
              key={index}
              name={item.name}
              link={item.link}
              className={styles.card}
            />
          ))}
        </ul>
      </div>
    </section>
  );
}