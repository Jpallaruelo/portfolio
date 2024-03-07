import Login from "./componentes/Login";
import Registro from "./componentes/registro";

import ArkanoidGame from "./componentes/ArkanoidGame";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Inicio from "./componentes/Inicio"; // Asegúrate de que la ruta sea correcta
import GameContainer from "./componentes/GameContainer";
import tictac from "./componentes/GameContainer";
import "./Sobremi.css";

import "./App.css"; // Asegúrate de ajustar la ruta según la ubicación de tu archivo
import DinosaurioGame from "./componentes/DinosaurioGame";
import ObstacleCanvas from "./componentes/suelo";
import AppTictac from "./componentes/AppTictac";
import Snake from "./componentes/SnakeGame";
import SnakeGame from "./componentes/SnakeGame";


import "./SnakeGame.css";
import "./Tareas.css";

import Testing from "./componentes/Testing";
import Sobremi from "./componentes/Sobremi";
import ProjectosPage from "./componentes/projectos";
import ParticlesJsComponent from "./componentes/particles";
import Cryptos from "./componentes/Cryptomonedas";
import { Navbar } from "./componentesCarrito/Navbar";

import { ShoopingCart } from "./componentesCarrito/ShoppingCart";
import { ItemList } from "./componentesCarrito/itemList";
import FrontPage from "./aboutMePages/front";
import BackPage from "./aboutMePages/back";
import TaskApp from "./projectsFront/task";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Utiliza el componente Inicio como página de inicio */}
          <Route path="/" element={<Sobremi />} />
          <Route path="/portfolio" element={<Inicio />} />

          <Route path="/cartMain" element={<ItemList />}></Route>
          <Route path="/cart" element={<ShoopingCart />}></Route>

          <Route path="/login" element={<Login />} />
          <Route path="/particles" element={<ParticlesJsComponent />} />
          <Route path="/cryptos" element={<Cryptos />} />


          <Route path="/tareas" element={<TaskApp />} />
          <Route path="/testing" element={<Testing />} />
          <Route path="/registro" element={<Registro />} />
          <Route path="/juegos/*" element={<GameContainer />} />

          <Route path="/juegos/arkanoid" element={<ArkanoidGame />} />
          <Route path="/juegos/Dinosaurio" element={<DinosaurioGame />} />
          <Route path="/proyectos" element={<ProjectosPage />} />
          <Route path="/proyectos/frontPage" element={<FrontPage />} />
          <Route path="/proyectos/backPage" element={<BackPage />} />

          <Route path="/juegos/tictac" element={<AppTictac />} />
          <Route path="/juegos/snake" element={<SnakeGame />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
