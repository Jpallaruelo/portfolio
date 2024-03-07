import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";



const SeccionResumen = styled.div`
  background-color: black; // Un color de fondo para distinguir esta sección
  color: white;

  border-radius: 10px;
  margin: 20px 0; // Añade espacio arriba y abajo
  text-align: center; // Centra el texto dentro de la sección
`;

const SeccionCentrada = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: ROW; // Cambiado a columna
  background-color: black; // Un fondo para destacar la sección, ajústalo a tus necesidades
  padding: 20px;
  border-radius: 10px; // Opcional, para darle bordes redondeados a la sección
  margin-top: 80px;
`;

const ImagenPerfil = styled.img`
  width: 350px; // Tamaño de la imagen, ajústalo a tus necesidades
  height: 350px; // Igual al ancho para mantener la imagen cuadrada
  border-radius: 20%; // Hace la imagen redonda
  margin-top: 10px; // Ajuste de espacio
  padding: 10px;
`;

const Titulo = styled.h1`
  color: #0beee3; // Color del texto, ajústalo a tus necesidades
  text-align: center;
 
  font-size: 50px;
  margin-top: 40px; // Ajuste de espacio
`;

const Subtitulo = styled.p`
  color: white;
  text-align: center;
  margin-top: 10px;
  font-size: 48px;
`;

const Button = styled.button`
  // Estilos específicos del botón
  background-color: #3498db;
  color: white;
  padding: 10px;
  font-size: 16px;
`;

const Habilidad = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const DescripcionHabilidad = styled.p`
  color: black;
`;

const SeccionHabilidades = styled.div`
  background-color: black; // Fondo oscuro para resaltar la sección
  padding: 20px;
  border-radius: 10px;
`;

const HabilidadesContainer = styled.div`
  display: flex;
  justify-content: space-between; /* Ajusta el espacio entre las habilidades */
  flex-wrap: wrap; /* Permite que las habilidades se envuelvan en la siguiente línea */
`;

const HabilidadCard = styled.div`
  width: 30%; /* Ajusta el ancho según tus necesidades */
  background-color: black;
  transition: transform 0.3s ease;
  &:hover {
    transform: scale(1.05);
  }
  cursor: pointer;
  h1 {
    transition: font-size 0.3s ease;
  }
  &:hover h1 {
    font-size: 32px; // Ajusta este valor a tus necesidades
  }
`;

const HabilidadImagen = styled.img`
  max-width: 100%; // Asegura que la imagen no sobrepase el ancho de la tarjeta
  border-radius: 10px; // Opcional: Da bordes redondeados a la imagen
  // Espacio entre la imagen y el texto debajo
`;

const SeccionImagenTitulo = () => {
  const [mostrarInfo, setMostrarInfo] = useState(false);
  const [mostrarCartas, setMostrarCartas] = useState(false);
  const [paragraphTexts, setParagraphTexts] = useState(["", "", "", ""]);
  const fullTexts = [
    "You already know I'm Jonathan Pallaruelo, deeply passionate about web development.",
    "My journey has been a blend of discovery and creation, with each code line telling its own story.",
    "I specialize in crafting simple, elegant solutions for complex ideas, balancing functionality and design.",
    "Every project reflects my commitment to quality and curiosity for the latest in technology and trends.",
  ];
  const navigate = useNavigate();
  const [animacionRealizada, setAnimacionRealizada] = useState(false);

  useEffect(() => {
    if (mostrarInfo) {
      let currentParagraph = 0;

      const animateParagraph = (index) => {
        if (index < fullTexts.length) {
          let text = fullTexts[index] + "_";
          let i = 0;

          const intervalId = setInterval(() => {
            setParagraphTexts((prevTexts) => {
              const newTexts = [...prevTexts];
              newTexts[index] =
                text.substring(0, i + 1) + (i < text.length - 1 ? "_" : "");
              return newTexts;
            });

            i++;

            if (i >= text.length) {
              clearInterval(intervalId);

              setParagraphTexts((prevTexts) => {
                const newTexts = [...prevTexts];
                newTexts[index] = text.substring(0, text.length - 1); // Elimina el guion bajo
                return newTexts;
              });

              if (index + 1 < fullTexts.length) {
                animateParagraph(index + 1);
              } else {
                setMostrarCartas(true); // Activa la visualización de las cartas solo después de la última animación
              }
            }
          }, 35);
        }
      };

      animateParagraph(currentParagraph);
    } else {
      setParagraphTexts(["", "", "", ""]);
      setMostrarCartas(false);
    }
  }, [mostrarInfo]);

  const toggleButton = () => {
    setMostrarInfo(!mostrarInfo);
  };

  const handleCardClick = (path) => {
    navigate(path);
  };

  const toogleporfolio = () => {
    navigate('/portfolio')

  }

  //texto para traducir

  return (
    <div>
      {!mostrarInfo && (
        <>   <Titulo>Jonathan Pallaruelo</Titulo>
          <SeccionCentrada>

            <ImagenPerfil
              src="images/react.jpg"
              alt="Jonathan Pallaruelo Elvira"
            />
          </SeccionCentrada>

          <Subtitulo>WEB-DEVELOPER</Subtitulo>
          <Button className="button" onClick={toggleButton}>
            MEET ME!
          </Button>
          <Button className="button" onClick={toogleporfolio}>
            PORTFOLIO
          </Button>
          <a
            href={"/images/CV.JonathanPallarueloElvira.pdf"}
            download="MiCV.pdf"
          >
            <button className="button">GET-CV</button>
          </a>
        </>
      )}

      {mostrarInfo && (
        <>
          <SeccionResumen>
            <h3>BEYONG THE CODE</h3>
            {paragraphTexts.map((text, index) => (
              <p key={index}>{text}</p>
            ))}
          </SeccionResumen>

          {mostrarCartas && (
            <SeccionHabilidades>
              <HabilidadesContainer>
                <HabilidadCard
                  onClick={() => handleCardClick("/proyectos/frontPage")}
                  className="fadeIn"
                >
                  <h1 onClick={() => handleCardClick("/proyectos/frontPage")}>FRONT</h1>

                  <HabilidadImagen src="images/frontend.jpg" alt="Frontend" />
                </HabilidadCard>
                <HabilidadCard
                  onClick={() => handleCardClick("/proyectos/backPage")}
                  className="fadeIn"
                >
                  <h1 onClick={() => handleCardClick("/proyectos/backPage")}>BACKEND</h1>

                  <HabilidadImagen src="images/backend.jpg" alt="Backend" />
                </HabilidadCard>

                <HabilidadCard
                  onClick={() => handleCardClick("/testing")}
                  className="fadeIn"
                >
                  <h1 onClick={() => handleCardClick("/testing")}>TESTING</h1>

                  <HabilidadImagen src="images/testing.jpg" alt="Testing" />
                </HabilidadCard>
              </HabilidadesContainer>
            </SeccionHabilidades>
          )}
        </>
      )}
    </div>
  );
};

export default SeccionImagenTitulo;
