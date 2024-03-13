import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import { useNavigate } from "react-router-dom";
import '../SnakeGame.css';

const SnakeGame = () => {
  const [snake, setSnake] = useState([{ x: 10, y: 10 }]);
  const [food, setFood] = useState({ x: 5, y: 5 });
  const [direction, setDirection] = useState();
  const [speed, setSpeed] = useState(200);
  const [isGameCompleted, setGameCompleted] = useState(false);
  const navigate = useNavigate();

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
    return () => window.removeEventListener("keydown", handleKeyPress);
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

      const isOutOfBounds =
        head.x < 0 || head.x >= 50 || head.y < 0 || head.y >= 50;

      if (isOutOfBounds) {
        setSnake([{ x: 10, y: 10 }]);
        setFood({ x: 5, y: 5 });
        setDirection();
        setGameCompleted(true);
        setSpeed(200);
        return;
      }

      if (head.x === food.x && head.y === food.y) {
        newSnake.unshift({ x: food.x, y: food.y });

        const newFood = {
          x: Math.floor(Math.random() * 20),
          y: Math.floor(Math.random() * 20),
        };
        setFood(newFood);
      } else {
        newSnake.unshift(head);
        newSnake.pop();
      }

      setSnake(newSnake);
    };

    const gameLoop = setInterval(moveSnake, speed);

    return () => clearInterval(gameLoop);
  }, [snake, direction, speed, food]);

  const handleDirectionChange = (newDirection) => {
    setDirection(newDirection);
  };

  const closeGame = () => {
    setGameCompleted(false);
    navigate("/juegos");
  };

  return (
    <>
      <div translate="no" className="game-area">
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
      <div className="controls">
        <div className="vertical-controls">

          <img
            className="direction-arrow"
            src="/images/flechaarriba.png"
            alt="Up Arrow"
            onClick={() => handleDirectionChange("UP")}
          />
        </div>
        <div className="horizontal-controls">
          <img
            className="direction-arrow"
            src="/images/flechaizquierda.png"
            alt="Left Arrow"
            onClick={() => handleDirectionChange("LEFT")}
          />
          <img
            className="direction-arrow"
            src="/images/flechaderecha.png"
            alt="Right Arrow"
            onClick={() => handleDirectionChange("RIGHT")}
          />
        </div>
        <div className="vertical-controls">
       
          <img
            className="direction-arrow"
            src="/images/flechaabajo.png"
            alt="Down Arrow"
            onClick={() => handleDirectionChange("DOWN")}
          />
          <div>

          </div>

          <button className="button" onClick={closeGame}>
          BACK
        </button>
        </div>

       
      </div>
      <Modal
        isOpen={isGameCompleted}
        contentLabel="Game Completed Modal"
        className="custom-modal"
        overlayClassName="custom-overlay"
      >
        <h3  className="modaltext">GAME OVER!</h3>
        <button className="button" onClick={closeGame}>
          BACK
        </button>
      </Modal>
    </>
  );
};

export default SnakeGame;
