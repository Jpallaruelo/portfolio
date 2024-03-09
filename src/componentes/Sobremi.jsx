// SeccionImagenTitulo.jsx

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../aboutm.css";

const SeccionImagenTitulo = () => {
  const [mostrarInfo, setMostrarInfo] = useState(false);
  const [mostrarCartas, setMostrarCartas] = useState(false);
  const [paragraphTexts] = useState([
    "You already know I'm Jonathan Pallaruelo, deeply passionate about web development.",
    "My journey has been a blend of discovery and creation, with each code line telling its own story.",
    "I specialize in crafting simple, elegant solutions for complex ideas, balancing functionality and design.",
    "Every project reflects my commitment to quality and curiosity for the latest in technology and trends.",
  ]);
  const navigate = useNavigate();

  const toggleButton = () => {
    setMostrarInfo(!mostrarInfo);
    if (!mostrarInfo) {
      setMostrarCartas(true);
    }
  };

  const handleCardClick = (path) => {
    navigate(path);
  };

  const toogleporfolio = () => {
    navigate('/portfolio');
  };

  return (
    <div>
      {!mostrarInfo && (
        <>
          <h1 className="Titulo">Jonathan Pallaruelo</h1>

          <div className="SeccionCentrada">
            <img className="ImagenPerfil" src="images/react.jpg" alt="Jonathan Pallaruelo Elvira" />
          </div>
          <p className="Subtitulo">WEB-DEVELOPER</p>
          <button className="button" onClick={toggleButton}>
            MEET ME!
          </button>
          <button className="button" onClick={toogleporfolio}>
            PORTFOLIO
          </button>
          <a href={"/images/CV.JonathanPallarueloElvira.pdf"} download="MiCV.pdf">
            <button className="button">GET-CV</button>
          </a>
        </>
      )}

      {mostrarInfo && (
        <>
          <div className="SeccionResumen">
            <h3>HELLOW WORLD</h3>
            {paragraphTexts.map((text, index) => (
              <p key={index}>{text}</p>
            ))}
          </div>
          <div>
            <h3>WHAT I DO</h3>
          </div>
          {mostrarCartas && (
            <div className="HabilidadesContainer">
              <div className="cartaEstilo" onClick={() => handleCardClick("/proyectos/frontPage")}>
                <h1 onClick={() => handleCardClick("/proyectos/frontPage")}>FRONT</h1>
                <img src="images/front.jpg" alt="Frontend" />
              </div>
              <div className="cartaEstilo" onClick={() => handleCardClick("/proyectos/backPage")}>
                <h1 onClick={() => handleCardClick("/proyectos/backPage")}>BACKEND</h1>
                <img src="images/backennd.webp" alt="Backend" />
              </div>
              <div className="cartaEstilo" onClick={() => handleCardClick("/testing")}>
                <h1 onClick={() => handleCardClick("/testing")}>TESTING</h1>
                <img src="images/test.jpg" alt="Testing" />
              </div>
            </div>
          )}
          <div>
            <h3>sadasdasdsadas</h3>
          </div>
        </>
      )}
    </div>
  );
};

export default SeccionImagenTitulo;
