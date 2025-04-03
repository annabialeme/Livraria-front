import styles from "../styles/Header.module.css";

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.profile}>
                <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fmyloview.com.br%2Fadesivo-livraria-emblema-vintage-no-68DC808&psig=AOvVaw2YcDqmhmrsKe3hg90OimDb&ust=1743768930092000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCMiW2PTru4wDFQAAAAAdAAAAABAE"></img>
            </div>
            <nav className={styles.nav}>
        <ul className={styles.menu}>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">Sobre</a></li>
          <li><a href="#services">Serviços</a></li>
          <li><a href="#contact">Contato</a></li>
          
        </ul>
      </nav>
        </header>
    )
}