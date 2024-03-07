import React, { useRef, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import Modal from "react-modal";

const ArkanoidGame = () => {
  const canvasRef = useRef(null);
  const navigate = useNavigate();
  const [username, setUserName] = useState("");
  const [isGameCompleted, setGameCompleted] = useState(false);
  const [brokenBlocksCount, setBrokenBlocksCount] = useState(0);

  const handleSubmit = (event) => {

    navigate("/");

  };
  // const [timeElapsed, setTimeElapsed] = useState(0);

  const paddleImage = new Image();
  paddleImage.src = "/images/raqueta.png";

  const ballImage = new Image();
  ballImage.src = "/images/reacPelota.jpg";

  const [blocks, setBlocks] = useState([
    { x: 50, y: 50, width: 50, height: 20, isBroken: false },
    { x: 150, y: 50, width: 50, height: 20, isBroken: false },
    { x: 250, y: 50, width: 50, height: 20, isBroken: false },

    // ... otros bloques
  ]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    canvas.width = 400; // Ajusta según sea necesario
    canvas.height = 500; // Ajusta según sea necesario

    const ballRadius = 15;
    let x = canvas.width / 2;
    let y = ballRadius;
    let dy = 10;
    let dx = 2;

    let paddleHeight = 60;
    let paddleWidth = 250;
    let paddleX = (canvas.width - paddleWidth) / 2;
    const paddleY = canvas.height - paddleHeight - 10;

    let rightPressed = false;
    let leftPressed = false;

    const keyDownHandler = (e) => {
      if (e.key === "Right" || e.key === "ArrowRight") {
        rightPressed = true;
      } else if (e.key === "Left" || e.key === "ArrowLeft") {
        leftPressed = true;
      }
    };

    const keyUpHandler = (e) => {
      if (e.key === "Right" || e.key === "ArrowRight") {
        rightPressed = false;
      } else if (e.key === "Left" || e.key === "ArrowLeft") {
        leftPressed = false;
      }
    };

    document.addEventListener("keydown", keyDownHandler);
    document.addEventListener("keyup", keyUpHandler);

    const drawBall = () => {
      ctx.beginPath();
      ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
      ctx.fillStyle = "yellow";
      ctx.fill();
      ctx.closePath();
    };

    const drawPaddle = () => {
      if (paddleImage.complete) {
        ctx.drawImage(paddleImage, paddleX, paddleY, paddleWidth, paddleHeight);
      }
    };

    const handleCollision = () => {
      let count = brokenBlocksCount;
      let allBlocksBroken = true;

      blocks.forEach((block) => {
        if (!block.isBroken) {
          if (
            x + ballRadius > block.x &&
            x - ballRadius < block.x + block.width &&
            y + ballRadius > block.y &&
            y - ballRadius < block.y + block.height
          ) {
            dy = -dy;
            block.isBroken = true;
            count++;
          }
        }

        // Verificar si hay bloques sin romper
        if (!block.isBroken) {
          allBlocksBroken = false;
        }
      });

      setBrokenBlocksCount(count);

      // Verificar si todos los bloques están rotos
      if (allBlocksBroken) {
        console.log(
          "¡Felicidades! Has destruido todos los bloques. Fin del juego."
        );
        setGameCompleted(true);

        // Navegar a la página de GameContainer

      }
    };

    const drawBlocks = () => {
      blocks.forEach((block) => {
        if (!block.isBroken) {
          ctx.fillStyle = "blue";
          ctx.fillRect(block.x, block.y, block.width, block.height);
        }
      });
    };

    const updateGame = () => {
      x += dx;
      y += dy;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drawBall();
      drawPaddle();

      handleCollision();
      drawBlocks();

      if (x - ballRadius < 0 || x + ballRadius > canvas.width) {
        dx = -dx;
      }

      if (y - ballRadius < 0) {
        dy = -dy;
      }

      if (y + ballRadius > canvas.height) {
        x = Math.random() * (canvas.width - 2 * ballRadius) + ballRadius; // Nueva posición x aleatoria
        y = ballRadius; // Nueva posición y en la parte superior
        dy = -8;
      }

      if (
        y + ballRadius > paddleY &&
        y - ballRadius < paddleY + paddleHeight &&
        x + ballRadius > paddleX &&
        x - ballRadius < paddleX + paddleWidth
      ) {
        dy = -dy;
        let impactPoint = x - (paddleX + paddleWidth / 2);
        let normalizedImpactPoint = impactPoint / (paddleWidth / 2);
        dx = normalizedImpactPoint * 5;
      }

      if (rightPressed && paddleX < canvas.width - paddleWidth) {
        paddleX += 7;
      } else if (leftPressed && paddleX > 0) {
        paddleX -= 7;
      }

      requestAnimationFrame(updateGame);
    };

    const loadImages = async () => {
      await Promise.all([loadImage(paddleImage), loadImage(ballImage)]);
      updateGame();
    };

    const loadImage = (image) =>
      new Promise((resolve) => {
        image.onload = resolve;
      });

    loadImages();

    return () => {
      document.removeEventListener("keydown", keyDownHandler);
      document.removeEventListener("keyup", keyUpHandler);
    };
  }, []);

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
  // const closeModal = () => {
  //   setGameCompleted(false);
  //   navigate("/juegos/Dinosaurio");
  // };

  return (
    <div>
      <Modal
        isOpen={isGameCompleted}

        contentLabel="Game Completed Modal"
        className="custom-modal"
        overlayClassName="custom-overlay"
      >
        <h4>JUEGO COMPLETADO</h4>

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
      <canvas ref={canvasRef} />
      <button className="button" onClick={handleSubmit}>
        Ir a Otra Ruta
      </button>
    </div>
  );
};

export default ArkanoidGame;
