import React, { useState } from "react";
import ArkanoidGame from "./ArkanoidGame"; // Asegúrate de que este es el componente de tu juego
import GameCard from "./GameCard";
import { useNavigate } from "react-router-dom"; // Asegúrate de importar el componente GameCard
import DinosaurioGame from "./Game";
import AppTictac from "./AppTictac";
import SnakeGame from "./SnakeGame";

// Importa aquí otros juegos que quieras incluir

const GameContainer = () => {
  const [selectedGame, setSelectedGame] = useState(null);

  const handleButtonClick = (route) => {
    navigate(route);
  };

  const navigate = useNavigate();
  // Puedes expandir esto para incluir más juegos
  const renderGame = () => {
    switch (selectedGame) {
      case "arkanoid":
        return <ArkanoidGame />;
      // Añade aquí casos adicionales para otros juegos

      case "dinosaurio":
        return <DinosaurioGame />;
      case "tictac":
        return <AppTictac />;
      case "snake":
        return <SnakeGame />;

      default:
        return <p></p>;
    }
  };

  const handleGameSelection = (game) => {
    setSelectedGame(game);
    navigate(`/juegos/${game}`); // Navega a la ruta correspondiente al juego seleccionado
  };

  return (
    <div style={{ backgroundColor: "black", padding: "20px" }}>
      <h3>Choose a Game to Play</h3>
      <p
        style={{
          textAlign: "center",
          margin: "0 auto 20px",
          maxWidth: "600px",
        }}
      >
        Explore my collection of games created with React.
      </p>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "60px",
        }}
      >
        <GameCard
          // title="ARKANOID"
          onClick={() => handleGameSelection("arkanoid")}
          image="images/arkanoid.jpg" // Ajusta la ruta de la imagen
        />
        <GameCard
          // title="DINO"
          onClick={() => handleGameSelection("dinosaurio")}
          image="images/dinofondo.png"
        />
        <GameCard
          // title="TIC,TAC"
          onClick={() => handleGameSelection("tictac")}
          image="images/tictac.jpg"
        />
        <GameCard
          // title="SNAKE"
          onClick={() => handleGameSelection("snake")}
          image="images/snake.png"
        />
      </div>
      <div>{renderGame()}</div>
      <button
        className="button"
        onClick={() => handleButtonClick("/portfolio")}
      >
        BACK
      </button>
      <button className="button" onClick={() => handleButtonClick("/testing")}>
        TESTING
      </button>
    </div>
  );
};

export default GameContainer;
