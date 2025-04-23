import React from "react";

export default function Destaques() {
    const books = [
        {title: "A cinco passos de você", author: "Colleen Hoover", price: 49.90},
        {title: "Agora e para sempre Lara Jean", author: "Rachael Lippincott", price: 39.90},
        {title: "É assim que acaba", author: "Jenny Han", price: 55.90},
        {title: "Mil Beijos de Amor", author: "Tillie Cole", price: 47.90},
    ];
    return (
        <div style={styles.container}>
            <h2 style={styles.title}>Destaques da Semana</h2>
            <div style={styles.book}>
                {books.map((book, index) => (
                    <div key={index} style={styles.bookCard}>
                        <h3>{book.title}</h3>
                        <p style = {styles.author}>{book.author}</p>
                        <p style = {styles.price}>R${book.price.toFixed(2)}</p>

                        </div>
            ))}
            </div>
        </div>
    )
}