import '../styles/Footer.module.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-section">
        <h3>BookVerse</h3>
        <p>Onde histórias ganham vida</p>
        <p>A BookVerse é uma livraria online que conecta leitores ávidos com os melhores e mias diversos</p>
      </div>
      <div className="footer-section">
        <h3> Links Rápidos</h3>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#catalogo">Catálogo</a></li>
          <li><a href="#ofertas">Ofertas</a></li>
          <li><a href="#sobre-nos">Sobre Nós</a></li>
          <li><a href="#contato">Contato</a></li>
        </ul>
      </div>

      <div className="footer-section">
        <h3>Categorias</h3>
        <ul>
          <li><a href="#ficcao-cientifica">Ficção Científica</a></li>
          <li><a href="#romance">Romance</a></li>
          <li><a href="#tecnologia">Tecnologia</a></li>
          <li><a href="#fantasia">Fantasia</a></li>
          <li><a href="#historia">História</a></li>
        </ul>
      </div>
      <div className="footer-section">
        <h3>Redes Sociais</h3>
        <ul>
          <li><a href="#instagram">Instagram</a></li>
          <li><a href="#tiktok">TikTok</a></li>
          <li><a href="#twitter">Twitter</a></li>
          <li><a href="#youtube">Youtube</a></li>
        </ul>
      </div>
      <div className="footer-bottom">
       <p>© 2023 BookVerse. Todos os direitos reservados.</p>
        <ul>
          <li><a href="#privacidade">Política de Privacidade</a></li>
          <li><a href="#termos">Termos de Uso</a></li>
          <li><a href="#cookies">Política de Cookies</a></li>

        </ul>
      </div>
    </footer>
  )
}