import styles from "../styles/Footer.module.css";


export default function Footer() {
  return (
    <div className={styles.tabela}>
     <Section title ="BookVerse" description="Livros que lançaram recentemente" data={lançamentos}cardClassName ={styles.roundedCard} />
    </div>
  )
}
