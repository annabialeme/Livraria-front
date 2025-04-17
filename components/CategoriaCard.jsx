import React from "react";

import styles from '../styles/CategoriaCard.module.css'

export default function CategoriaCard({icon, title}) {
    return (
        <div className={styles.card}>
            <div className={styles.icon}></div>
        <p>{title}</p>
        </div>
    )
}

