import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../logo.svg";
import "../inicio.css";
import { useEffect, useLocation } from "react";



const Inicio = () => {
    const navigate = useNavigate();

    return (
        <>
            <div className="logos-container">
                <img src="/images/laravel.png" className="laravel-logo" alt="Laravel logo" ></img>
                <img src={logo} className="App-logo" alt="React logo" />
                <img src="/images/vue.png" className="vue-logo" alt="Laravel logo" ></img>
            </div>

            <div className="buttons-container">
                <button className="button" onClick={() => navigate("/proyectos")}>
                    PROJECTS
                </button>
                <button className="button" onClick={() => navigate("/juegos")}>
                    GAMES
                </button>
                <button className="button" onClick={() => navigate("/")}>
                    ABOUT ME
                </button>
                <button className="button" onClick={() => navigate("/testing")}>
                    TESTING
                </button>
            </div>

            <div className="logos-containerback">
                <img src="/images/js.png" className="js-logo" alt="js" ></img>
                <img className="git-logo" src="/images/gitBueno.png" alt="git" ></img>
            </div>
        </>
    );
};

export default Inicio