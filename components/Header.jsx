import React from "react";
import styles from "../styles/Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>BookVerse📚</div>
      <nav>
        <ul className={styles.navList}>
          <li><a href="#inicio">Início</a></li>
          <li><a href="#livros">Livros</a></li>
          <li><a href="#categorias">Categorias</a></li>
          <li><a href="#autores">Autores</a></li>
          <li><a href="#ofertas">Ofertas</a></li>
        </ul>
      </nav>
      <div className={styles.icons}>
        <input type="text" placeholder="Buscar" />
        <span className="favorites">🤍</span>
        <span className="cart">🛒</span>
        <span className="profile">👨🏻‍🦲</span>
      </div>
    </header>
  );
}