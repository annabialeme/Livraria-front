import styles from "../styles/Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.section}>
        <h3>BookVerse</h3>
        <p>Onde histórias ganham vida</p>
        <p>A BookVerse é uma livraria online que conecta leitores ávidos com os melhores e mias diversos</p>
      </div>
      <div className={styles.footer-section}>
        <h3> Links Rápidos</h3>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#catalogo">Catálogo</a></li>
          <li><a href="#ofertas">Ofertas</a></li>
          <li><a href="#sobre-nos">Sobre Nós</a></li>
          <li><a href="#contato">Contato</a></li>
        </ul>
      </div>

      <div className={styles.footer-section}>
        <h3>Categorias</h3>
        <ul>
          <li><a href="#ficcao-cientifica">Ficção Científica</a></li>
          <li><a href="#romance">Romance</a></li>
          <li><a href="#tecnologia">Tecnologia</a></li>
          <li><a href="#fantasia">Fantasia</a></li>
          <li><a href="#historia">História</a></li>
        </ul>
      </div>
    </footer>
  )
}