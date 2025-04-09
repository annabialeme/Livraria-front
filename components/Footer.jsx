import styles from "../styles/Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <h3>BookVerse</h3>
        <p>Descubra os melhores livros e lançamentos recentes.</p>
        <p>© 2025 BookVerse. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}