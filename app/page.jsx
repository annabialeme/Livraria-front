import styles from  "../styles/Section.module.css";
import LivrariaCard from "../components/LivrariaCard";


export default function Section ({ title, description, data }) {
    return (
        <section className={styles.section}>
            <div className={styles.content}>
                <h2></h2>
            </div>
        </section>
    );
}