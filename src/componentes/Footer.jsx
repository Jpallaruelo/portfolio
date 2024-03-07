import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    const footerStyle = {
        backgroundColor: '#20232a', // Un fondo oscuro para un look más moderno
        color: '#61dafb', // Usando el color de React para los textos, para mantener la coherencia
        textAlign: 'center',
        padding: '20px 0',
        marginTop: 'auto', // Asegura que el footer se quede en la parte inferior si hay poco contenido
        width: '100%',
        fontSize: '1rem',
    };

    const contentStyle = {
        display: 'flex',
        flexDirection: 'column', // Cambiado a columna para una mejor visualización en móviles
        justifyContent: 'center',
        alignItems: 'center',
        gap: '10px', // Espacio entre elementos
    };

    const socialLinksStyle = {
        display: 'flex',
        gap: '20px', // Más espacio entre enlaces para una mejor interacción
    };

    const linkStyle = {
        color: '#61dafb', // Mismo color que el texto para coherencia
        textDecoration: 'none', // Sin subrayado en los enlaces
    };

    return (
        <footer style={footerStyle}>
            <div style={contentStyle}>
                <div style={socialLinksStyle}>
                    <a href="https://linkedin.com/tu-perfil" style={linkStyle} target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
                    </a>
                    <a href="https://github.com/tu-usuario" style={linkStyle} target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faGithub} /> GitHub
                    </a>
                    {/* Agrega más enlaces a tus redes sociales según sea necesario */}
                </div>
                <div>
                    <p className='pfooter'>Email: jonathanpallarueloelvira92@gmail.com</p>
                    <p className='pfooter'> Teléfono: 657357740</p>
                    {/* Agrega más detalles de contacto según sea necesario */}
                </div>
            </div>
            <p className='pfooter' style={{ marginTop: '20px' }}>&copy; 2024 JP Todos los derechos reservados.</p>
        </footer>
    );
};

export default Footer;
