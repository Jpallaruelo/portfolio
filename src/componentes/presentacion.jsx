// PortfolioSection.js

import React from 'react';
import '../presentacion.css';
import { useNavigate } from 'react-router-dom';
import { Outlet, useLocation } from 'react-router-dom';



const PortfolioSection = () => {
    const navigate = useNavigate();

    const togglenavigate = () => {
        navigate("/portfolio");
    }

    return (
        <div className="portfolio-section">
            <h3 className="name">HI, I'M JONATHAN</h3>
            <div className="profile-image-container">
                <img src="IMAGES/perfil.png" alt="Imagen de perfil" className="profile-image" />
            </div>
            <div className="phrases">
                <p>Junior Frontend Developer with expertise in React</p>
                <p>Passionate about building user-friendly interfaces</p>
                <p>GitHub Star Alumni | Contributor to Open Source Projects</p>
            </div>
            <button className='button' onClick={togglenavigate}>PORTFOLIO</button>

            {/* Nueva sección con tres cartas */}
            <div className="info-section">
                <div className="info-card">
                    <h4 className='p-sobremi'>Skills</h4>
                    <p >
                        React, JavaScript, HTML5/CSS3 {/* Agrega más habilidades según sea necesario */}
                    </p>
                    <p >
                        Git,Boostrap,Wordpress {/* Agrega más habilidades según sea necesario */}
                    </p>
                </div>

                <div className="info-card">
                    <h4 className='p-sobremi'>Experience</h4>
                    <p >
                        Network Systems Technician {/* Agrega más experiencias según sea necesario */}
                    </p>
                    <p >
                        Junior Frontend Developer {/* Agrega más experiencias según sea necesario */}
                    </p>
                </div>

                <div className="info-card">
                    <h4 className='p-sobremi'>Academy</h4>
                    <p >
                        DAW, DAM, ASIR {/* Agrega más estudios según sea necesario */}
                    </p>
                </div>
            </div>
        </div>
    );
};
export default PortfolioSection;
