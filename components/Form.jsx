import React from "react";
import styles from "../styles/Form.module.css"


export default function Form() {
    return(
        <div className={styles.form}>
            <h2>Fique por dentro das novidades</h2>
            <p> Assine nossa newsletter e receba atualizações sobre novos lançamentos e promoções exclusivas e dicas de leitura. </p>

            <form className={styles.newsletter}>
                <input type = "email" placeholder="Seu melhor e-mail"
                required />

                <button type="submit" className="button">Assinar</button>
            </form>
        </div>

    )
}