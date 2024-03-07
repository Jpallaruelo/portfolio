import React, { useEffect } from 'react';

const initializeParticles = () => {
    // Crea un elemento script
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/particles.js@2.0.0/particles.min.js';
    script.async = true;

    // Función a ejecutar una vez cargado el script
    script.onload = () => {
        // Inicializa particles.js después de cargar el script
        window.particlesJS('particles-js', {
            particles: {
                number: {
                    value: 80,
                    density: {
                        enable: true,
                        value_area: 900,
                    },
                },
                color: {
                    value: '#0beee3',
                },
                // Puedes añadir más opciones aquí según necesites
            },
            // Añade otras configuraciones si son necesarias
        });
    };

    // Añade el script al documento
    document.body.appendChild(script);

    // Limpieza al salir
    return () => {
        document.body.removeChild(script);
    };
};

const ParticlesJsComponent = () => {
    useEffect(() => {
        initializeParticles();
    }, []); // Solo se ejecuta una vez al montar el componente

    return <div id="particles-js" style={{ position: 'absolute', width: '100%', height: '100%' }}></div>;
};

export default ParticlesJsComponent;
