// src/Board.js
import React, { useState, useEffect } from "react";
// Asegúrate de crear este archivo CSS para los estilos

const SnakeGame = () => {
  const [snake, setSnake] = useState([{ x: 10, y: 10 }]);
  const [food, setFood] = useState({ x: 5, y: 5 });
  const [direction, setDirection] = useState("RIGHT");
  const [speed, setSpeed] = useState(200);

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

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
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
    </div>
  );
};

export default SnakeGame;
