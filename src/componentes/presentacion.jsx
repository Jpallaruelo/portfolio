// PortfolioSection.js

import React from 'react';
import '../presentacion.css';
import { useNavigate } from 'react-router-dom';
import { Outlet, useLocation } from 'react-router-dom';
import { useEffect } from 'react';



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
            <h3>Contact me</h3>
            <p>
                Excited to hear from you! Reach out to me for collaborations, job opportunities, or any inquiries related to web development.
            </p>
            <p>
                I'll be delighted to discuss projects and explore possibilities of working together. Let's talk!
            </p>

            <div className="contact-section">
                <div className="contact-form">
                    <form>
                        <div className="form-group">
                            <label htmlFor="name">Nombre:</label>
                            <input type="text" id="name" name="name" required className="responsive-input" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="correo">Correo Electrónico:</label>
                            <input type="email" id="email" name="email" required className="responsive-input" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="message">Mensaje:</label>
                            <textarea id="message" name="message" rows="4" required className="responsive-textarea"></textarea>
                        </div>

                        <button className='button' type="submit">Enviar Mensaje</button>
                    </form>
                </div>

                <div className="contact-info">
                    {/* Agrega la imagen aquí */}
                    <img className='responsive-image' src="images/git.avif" alt="Imagen de contacto" />
                    <img className='responsive-image' src="images/linkedin.png" alt="Imagen de contacto" />
                </div>
            </div>

        </div>




    );
};
export default PortfolioSection;
