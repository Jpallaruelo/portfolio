import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../logo.svg";
import "../inicio.css";



const Inicio = () => {
    const navigate = useNavigate();

    return (
        <div className="inicio-container">
            <h3>WELCOME TO MY WEB PORTFOLIO</h3>

            {/* <img src={logo} className="App-logo" alt="logo" /> */}
            <div className="logos-container">
                <img src="/images/laravel.png" className="laravel-logo" alt="Laravel logo" ></img>
                <img src={logo} className="App-logo" alt="React logo" />
                <img src="/images/vue.png" className="vue-logo" alt="Laravel logo" ></img>
                {/* <img src={} className="Vue-logo" alt="Vue logo" />
                <img src={} className="Laravel-logo" alt="Laravel logo" /> */}
            </div>

            <div className="buttons-container">

                <button className="button" onClick={() => navigate("/proyectos")}>
                    PROJECTS
                </button>
                <button className="button" onClick={() => navigate("/")}>
                    ABOUT ME
                </button>
                <button className="button" onClick={() => navigate("/juegos")}>
                    GAMES
                </button>
                {/* <button className="button" onClick={() => navigate("/login")}>
                    login
                </button>
                <button className="button" onClick={() => navigate("Registro")}>
                    registro
                </button> */}

                <button className="button" onClick={() => navigate("/testing")}>
                    TESTING
                </button>
            </div>
            <div className="logos-container">
                {/* <img src="/images/node.png" className="laravel-logo" alt="node" ></img> */}
                <img src="/images/js.png" className="js-logo" alt="js" ></img>

                <img className="git-logo" src="/images/gitBueno.png" alt="git" ></img>
                {/* <img src={} className="Vue-logo" alt="Vue logo" />
                <img src={} className="Laravel-logo" alt="Laravel logo" /> */}
            </div>

        </div>
    );
};

export default Inicio;
