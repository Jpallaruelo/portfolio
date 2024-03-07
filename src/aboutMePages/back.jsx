import React from "react";
import { Navigate, useNavigate } from "react-router-dom";

const BackPage = () => {
  const navigate = useNavigate();

  const toggleButton = (path) => {
    navigate(path);
  };

  return (
    <div className="container">
      <section className="tech-section">
        <h3>AS A BACK-END </h3>
        <div className="tech-details">
          <div className="left-column">
            <img
              src="/images/back.webp"
              alt="React Logo"
              className="tech-logo"
              onClick={() => toggleButton("/proyectos/backPage")}
            />
          </div>
          <div className="right-column">
            <p>
              Especializado en Node.js y Laravel para construir robustas
              soluciones de backend, enfocándome en la eficiencia y seguridad.
            </p>
            <p>
              Con Node.js, desarrollo servicios escalables y no bloqueantes,
              aprovechando el modelo de eventos para manejar múltiples
              conexiones simultáneamente.
            </p>
            <p>
              Laravel me permite estructurar aplicaciones de manera elegante y
              simplificada, utilizando su potente ORM, sistema de migraciones y
              facilidad para integrar autenticación.
            </p>
            <p>
              La combinación de estas tecnologías me capacita para crear
              arquitecturas de servidor optimizadas y mantener un flujo de
              trabajo eficiente en el desarrollo de aplicaciones web.
            </p>

            <button className="button" type="button">
              PROJECTS
            </button>
          </div>
        </div>
      </section>
      {/* Otras secciones */}
    </div>
  );
};

export default BackPage;
