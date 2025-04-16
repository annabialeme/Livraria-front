import React from "react";
import CategoriaCard from "./CategoriaCard";
import '../styles/CategoriaPopular.module.css'


export default function CategoriasPopulares() {
    const categorias = [
        {icon: "🚀", title: "Ficção Científica"},
        {icon: "❤", title: "Romance"},
        {icon: "👤", title: "Biografia"},
        {icon: "💻", title: "Tecnologia"},
        {icon: "🧙", title: "Fantasia"},
        {icon: "📜", title: "História"},
        {icon: "🌱", title: "Autoajuda"},
        {icon: "🔍", title: "Mistério"},
    ];

    return (
        <section className="popular">
            <div className="header">
                <h2>Categorias Populares</h2>
                <a href="#ver-todas">Ver todas</a>
            </div>

            <div className="grid">
                {categorias.map((categoria, index) => (
                    <CategoriaCard
                    key={index}
                    icon={categoria.icon}
                    title={categoria.title} 
                    />
                )
            )}
            </div>
        </section>
    )
}