import Header from "../components/Header";
import Section from "../components/Section";
import SocialCard from "../components/LivrariaCard";

import styles from "../styles/Section.module.css";


export default function Home({ livros, lançamentos, socialList  }) {
  return(
    <div>
      <Header />
      <main>
        <Section title ="Nossos livros" description="Os nossos livros favoritos!" data={livros}cardClassName ={styles.card} />
        <Section title ="Lançamentos de livros" description="Livros que lançaram recentemente" data={lançamentos}cardClassName ={styles.roundedCard} />
      </main>

      <footer>
        <ul className="footer">
        {Array.isArray(socialList) && socialList.map((social, index) => (
  <SocialCard key={index} link={social.link} color={social.color} svg={social.svg} />
))}
        </ul>
      </footer>
    </div>
  )
}