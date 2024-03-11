import { useEffect, useRef, useState } from "react";
import Modal from "react-modal";
import { useNavigate } from "react-router-dom";
import "../dino.css";


const DinosaurioGame = () => {
  const [isGameCompleted, setGameCompleted] = useState(false);
  const [username, setUserName] = useState(null)
  const dinoImage = useRef(new Image());
  const meteoriteImage = useRef(new Image());
  const navigate = useNavigate();
  const canvasRef = useRef(null);
  const gameStopped = useRef(false);
  const obstacles = useRef([]);

  useEffect(() => {
    dinoImage.current.src = '/images/dinoimg.png';
    meteoriteImage.current.src = '/images/meteorito.png';

    const storedUserName = localStorage.getItem("username");
    if (storedUserName) {
      setUserName(storedUserName);
    }

    const canvas = canvasRef.current;
    const dinoHeight = 80;
    let dinoY = canvas.height - dinoHeight - 10;
    let dinoVelocity = 0;

    const drawDino = () => {
      if (dinoImage.current.complete) {
        ctx.drawImage(dinoImage.current, 50, dinoY, 120, dinoHeight);
      }
    };

    const jump = () => {
      if (dinoY === canvas.height - dinoHeight - 20) {
        dinoVelocity = -10;
      }
    };

    window.addEventListener("keydown", (e) => {
      if (e.code === "Space") {
        jump();
      }
    });

    const handleTouchStart = () => {
      jump();
      console.log("he tocado la tecla")
    };

    const jumpButton = document.getElementById('jumpButton');

    if (jumpButton) {
      jumpButton.addEventListener('touchstart', handleTouchStart);
    }

    let animationFrameId;
    let obstacleInterval;

    const ctx = canvas.getContext("2d");
    const groundHeight = 20;

    canvas.width = 400;
    canvas.height = 250;

    const drawGround = () => {
      ctx.fillStyle = "#ADD8E6";
      ctx.fillRect(0, canvas.height - groundHeight, canvas.width, groundHeight);
    };

    const createObstacle = () => {
      const obstacleHeight = 10 + Math.random() * 50;
      const obstacle = {
        x: canvas.width,
        y: canvas.height - groundHeight - obstacleHeight,
        width: 70,
        height: obstacleHeight,
        speed: 7,
      };
      obstacles.current.push(obstacle);
    };

    const checkCollision = (obstacle) => {
      const dinoX = 50;
      const dinoWidth = 50;

      return (
        dinoY < obstacle.y + obstacle.height &&
        dinoY + dinoHeight > obstacle.y &&
        dinoX < obstacle.x + obstacle.width &&
        dinoX + dinoWidth > obstacle.x
      );
    };

    const drawObstacle = (obstacle) => {
      if (meteoriteImage.current.complete) {
        ctx.drawImage(meteoriteImage.current, obstacle.x, obstacle.y, obstacle.width, obstacle.height);
      } else {
        ctx.fillStyle = "yellow";
        ctx.fillRect(obstacle.x, obstacle.y, obstacle.width, obstacle.height);
      }
    };

    const updateObstacles = () => {
      for (let i = 0; i < obstacles.current.length; i++) {
        const obstacle = obstacles.current[i];
        obstacle.x -= obstacle.speed;
        if (checkCollision(obstacle)) {
          gameStopped.current = true;
          setGameCompleted(true)
          break;
        }
        if (obstacle.x + obstacle.width < 0) {
          obstacles.current.splice(i, 1);
          i--;
        }
      }
    };

    const updateCanvas = () => {
      if (gameStopped.current) {
        return;
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      updateObstacles();

      for (const obstacle of obstacles.current) {
        drawObstacle(obstacle);
      }

      dinoVelocity += 0.5;
      dinoY += dinoVelocity;

      if (dinoY > canvas.height - dinoHeight - 20) {
        dinoY = canvas.height - dinoHeight - 20;
        dinoVelocity = 0;
      }
      drawDino();
      drawGround();

      animationFrameId = requestAnimationFrame(updateCanvas);
    };

    obstacleInterval = setInterval(() => {
      createObstacle();
    }, 1000);

    updateCanvas();

    return () => {
      clearInterval(obstacleInterval);
      cancelAnimationFrame(animationFrameId);
      if (jumpButton) {
        jumpButton.removeEventListener('touchstart', handleTouchStart);
      }
    };
  }, []);

  const toggleNavigate = () => {
    navigate("/");
  };

  const ticNavigate = () => {
    navigate("/juegos/tictac");
  };

  const snakeNavigate = () => {
    navigate("/juegos/snake");
  };

  const inicioNavigate = () => {
    navigate("/");
  };

  return (
    <div style={{ backgroundColor: "black", position: "relative" }}>
      <Modal
        isOpen={isGameCompleted}
        contentLabel="Game Completed Modal"
        className="custom-modal"
        overlayClassName="custom-overlay"
      >
        <h4 className="h4-modal">HAS PERDIDO</h4>
        <button className="button" onClick={ticNavigate}>
          TICTAC
        </button>
        <button className="button" onClick={snakeNavigate}>
          SNAKE
        </button>
        <button className="button" onClick={inicioNavigate}>
          BACK
        </button>
      </Modal>
      <canvas className="canvasDino"
        ref={canvasRef}
        style={{ border: "7px solid black" }}
      />

      <button className="button" onClick={inicioNavigate}>
        BACK
      </button>
      return (
      <div style={{ backgroundColor: "black", position: "relative" }}>
        {/* Resto del código */}
        <img
          className="dinotecla"
          src="/images/spacio.png"
          alt="Boton Salto"
          style={{
            position: "absolute",
            bottom: "-125px", // Ajusta esta posición según tus necesidades
            left: "50%", // Centra horizontalmente la imagen
            transform: "translateX(-50%)", // Centra horizontalmente la imagen
            width: "90px",
            height: "30px",
            cursor: "pointer",
            display: "none", // Ocultar por defecto en dispositivos no móviles
          }}
          id="jumpButton"
        />

        {/* CSS para mostrar la imagen solo en dispositivos móviles */}
        <style>
          {`
        @media only screen and (max-width: 600px) {
          .dinotecla {
            display: block !important; /* Mostrar en dispositivos móviles con ancho máximo de 600px */
     
          }
        }
      `}
        </style>
      </div>
      );
    </div>

  );
};

export default DinosaurioGame;
