import React from "react";
import { Navigate, useNavigate } from "react-router-dom";

const FrontPage = () => {
const navigate = useNavigate()

const toggleButton = (path) => {

     navigate(path)
}

  return (
    <div className="container">
      <section className="tech-section">
        <h3>AS A FRONT-END </h3>
        <div className="tech-details">
          <div className="left-column">
            <img
              src="/images/reacVue.jpeg"
              alt="React Logo"
              className="tech-logo"
              onClick={() => toggleButton('/proyectos')}
            />
          </div>
          <div className="right-column">
            <p>
              Especializado en  React y Vue para crear interfaces dinámicas, maximizando
              la interactividad y la reusabilidad del código.
            </p>
            <p>
              Con React, facilito la creación de componentes modulares,
              agilizando el desarrollo y mantenimiento de proyectos.
            </p>
            <p>
              Vue me permite gestionar el estado de manera flexible con la
              Composition API, mejorando la estructura y reactividad del código.
            </p>
            <p>
              Esta integración de tecnologías me ayuda a desarrollar
              aplicaciones web eficientes, ofreciendo experiencias de usuario
              fluidas.
            </p>

            <button className="button" type="button" onClick={navigate("/")}>
              PROJECTS
            </button>
          </div>
        </div>
      </section>
      {/* Otras secciones */}
    </div>
  );
};

export default FrontPage;
