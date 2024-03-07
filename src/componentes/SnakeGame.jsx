// src/Board.js
import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import { useNavigate } from "react-router-dom";
// Asegúrate de crear este archivo CSS para los estilos

const SnakeGame = () => {
  const [snake, setSnake] = useState([{ x: 10, y: 10 }]);
  const [food, setFood] = useState({ x: 5, y: 5 });
  const [direction, setDirection] = useState();
  const [speed, setSpeed] = useState(200);
  const [isGameCompleted, setGameCompleted] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const handleKeyPress = (e) => {
      switch (e.key) {
        case "ArrowUp":
          setDirection("UP");
          break;
        case "ArrowDown":
          setDirection("DOWN");
          break;
        case "ArrowLeft":
          setDirection("LEFT");
          break;
        case "ArrowRight":
          setDirection("RIGHT");
          break;
        default:
          break;
      }
    };
    window.addEventListener("keydown", handleKeyPress);

    // return () => {
    //   window.removeEventListener("keydown", handleKeyPress);
    // };
  }, []);

  useEffect(() => {
    const moveSnake = () => {
      let newSnake = [...snake];
      let head = { ...newSnake[0] };

      switch (direction) {
        case "UP":
          head.y -= 1;
          break;
        case "DOWN":
          head.y += 1;
          break;
        case "LEFT":
          head.x -= 1;
          break;
        case "RIGHT":
          head.x += 1;
          break;
        default:
          break;
      }

      // Verificar colisiones con los bordes
      const isOutOfBounds =
        head.x < 0 || head.x >= 50 || head.y < 0 || head.y >= 50;

      if (isOutOfBounds) {
        // Reiniciar el juego si la serpiente colisiona con los bordes
        setSnake([{ x: 10, y: 10 }]);
        setFood({ x: 5, y: 5 });
        setDirection();
        // alert("has muerto")
        setGameCompleted(true)
        setSpeed(200);
        return;
      }

      // Verificar si la cabeza coincide con la posición de la comida
      if (head.x === food.x && head.y === food.y) {
        // Si ha comido la comida, agrega un nuevo segmento a la serpiente
        newSnake.unshift({ x: food.x, y: food.y });

        // Genera una nueva posición para la comida
        const newFood = {
          x: Math.floor(Math.random() * 20),
          y: Math.floor(Math.random() * 20),
        };
        setFood(newFood);
      } else {
        // Si no ha comido la comida, mueve la serpiente y quita el último segmento
        newSnake.unshift(head);
        newSnake.pop();
      }

      setSnake(newSnake);
    };

    const gameLoop = setInterval(moveSnake, speed);

    return () => clearInterval(gameLoop);
  }, [snake, direction, speed, food]);

  const closeDino = () => {
    setGameCompleted(false);
    navigate("/juegos/Dinosaurio");
  };
  const closeTicTac = () => {
    setGameCompleted(false);
    navigate("/juegos/tictac");
  };
  const closeModal = () => {
    setGameCompleted(false);
    navigate("/juegos/snake");
  };
  const closefinish = () => {
    setGameCompleted(false);
    navigate("/");
  };
  return (
    <div className="game-area">
      {snake.map((segment, index) => (
        <div
          key={index}
          className="snake-segment"
          style={{ left: `${segment.x * 2}%`, top: `${segment.y * 2}%` }}
        />
      ))}
      <div
        className="food"
        style={{ left: `${food.x * 2}%`, top: `${food.y * 2}%` }}
      />


      <Modal
        isOpen={isGameCompleted}

        contentLabel="Game Completed Modal"
        className="custom-modal"
        overlayClassName="custom-overlay"
      >
        <h4>HAS MUERTO</h4>

        <button className="button" onClick={closeDino}>
          DINO
        </button>
        <button className="button" onClick={closeTicTac}>
          TICTAC
        </button>
        <button className="button" onClick={closeModal}>
          SNAKE
        </button>


      </Modal>
    </div>






  );
};

export default SnakeGame;
