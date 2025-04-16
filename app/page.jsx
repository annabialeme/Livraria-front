import Header from "../components/Header";
import Section from "../components/Section";
import Banner from "../components/Banner"
import CategoriaCard from "../components/CategoriaCard"
import CategoriaPopular from "../components/CategoriaPopular"
import Form from "../components/Form"
import Footer from "../components/Footer";


import styles from "../styles/Section.module.css";
import { livros } from "../data/livros";
import { autores } from "../data/autores";



export default function Home() {
  return (
    <div>
      <Header />
      
      <CategoriaCard />
      <Banner />
      <CategoriaPopular />
  

      <main>
        <Section
          title="Nossos livros"
          description="Os nossos livros favoritos!"
          data={livros}
          cardClassName={styles.card}
        />
        <Section
          title="Lançamentos de livros"
          description="Livros que lançaram recentemente"
          data={autores} 
          cardClassName={styles.roundedCard}
        />
        
      </main>
      <Form />
      <Footer/>
      
    </div>
  );
}

