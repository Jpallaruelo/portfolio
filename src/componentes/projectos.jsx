import React from "react";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';

const styles = {
    cardsSection: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    card: {
        margin: '20px',
        textAlign: 'center',
        padding: '20px',
        width: '480px', // Ajusta este valor según sea necesario
        transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
        cursor: 'pointer',
    },
    roundImage: {
        borderRadius: '20%',
        width: '100%', // Ajusta este valor según sea necesario
        height: '300px', // Ajusta este valor según sea necesario
        objectFit: 'cover',
    },
};

const ProjectosPage = () => {
    const navigate = useNavigate()
    const [hoveredCard, setHoveredCard] = useState(null);

    const projects = [
        { id: 1, title: "TASKS", image: "images/tareas.jpg", path: "/tareas" },
        { id: 2, title: "PARTICLES", image: "images/particles.png", path: "/particles" },
        { id: 3, title: "CRIPTOS", image: "images/cryptos.jpg", path: "/cryptos" },
        { id: 4, title: "CARD", image: "images/carrito.jpg", path: "/cartMain" },
        // { id: 4, title: "P-GENERATE", image: "images/password.webp", path: "/card" },
        // Agrega aquí más proyectos según necesites
    ];

    return (
        <div>
            <h3>Featured Projects</h3>
            <div style={styles.cardsSection}>
                {projects.map((project) => (
                    <div
                        key={project.id}
                        style={{
                            ...styles.card,
                            boxShadow: hoveredCard === project.id ? '0 10px 20px rgba(0, 0, 0, 0.2)' : '0 4px 8px rgba(0, 0, 0, 0.1)',
                            transform: `scale(${hoveredCard === project.id ? 1.1 : 1})`,
                        }}
                        onMouseEnter={() => setHoveredCard(project.id)}
                        onMouseLeave={() => setHoveredCard(null)}
                        onClick={() => navigate(project.path)} // Navegar al hacer clic
                    >
                        <img src={project.image} alt={project.title} style={styles.roundImage} />
                        <p>{project.title}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProjectosPage;
