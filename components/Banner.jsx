import React from "react";

import styles from "../styles/Banner.module.css"

export default function Banner() {
    return (
        <section className={styles.banner}>
            <h1>Descubra mundos extraordinários</h1>
            <p>Promoção de lançamentos com até 30% de desconto! </p>
            <button>Ver ofertas</button>
        </section>
    )
}