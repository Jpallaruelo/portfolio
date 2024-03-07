import { useEffect, useRef, useState } from "react";
import Modal from "react-modal";
import { useNavigate } from "react-router-dom";


//primero referenciamos el canvas

const DinosaurioGame = () => {
  const [isGameCompleted, setGameCompleted] = useState(false);
  //imagen dino
  const dinoImage = useRef(new Image());
  const meteoriteImage = useRef(new Image());
  const navigate = useNavigate();


  //definimos el canvas
  const canvasRef = useRef(null);
  const gameStopped = useRef(false);

  const [username, setUserName] = useState("");

  //definimos los obstaculos en un array
  const obstacles = useRef([]);

  useEffect(() => {
    dinoImage.current.src = '/images/dinoimg.png'; // Ajusta el nombre de archivo según sea necesar
    meteoriteImage.current.src = '/images/meteorito.png';


    //pillamos el usuario 
    const storedUserName = localStorage.getItem("username");
    if (storedUserName) {
      setUserName(storedUserName);
    }

    //dinosaruio

    //personaje
    const canvas = canvasRef.current;
    // const square = {
    //   x: 50, // Posición inicial X
    //   y: canvas.height - 60, // Posición inicial Y, ajustado a la altura del canvas
    //   width: 50, // Ancho
    //   height: 50, // Alto
    //   color: "black", // Color
    // };

    const dinoHeight = 80;
    let dinoY = canvas.height - dinoHeight - 10;
    let dinoVelocity = 0;

    // const drawDino = () => {
    //   ctx.fillStyle = "black";
    //   ctx.fillRect(50, dinoY, 50, dinoHeight);
    // };
    const drawDino = () => {
      // Asegúrate de que la imagen está cargada
      if (dinoImage.current.complete) {
        // Ajusta las coordenadas y el tamaño según sea necesario
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
   
    // const drawSquare = () => {
    //   ctx.fillStyle = square.color;
    //   ctx.fillRect(square.x, square.y, square.width, square.height);
    // };

    //hacemos la animacion
    let animationFrameId;
    let obstacleInterval;

    const ctx = canvas.getContext("2d"); //esto es el lienzo para pintar el vancas
    const groundHeight = 20; //definimos la altura del suelo

    //definimos altura yancho del  canvas

    canvas.width = 600;
    canvas.height = 250;

    //funcion para dibujar el suelo

    const drawGround = () => {
      // Establecemos el color del suelo con fillStyle.
      ctx.fillStyle = "#ADD8E6"; // Color del suelo

      ctx.fillRect(0, canvas.height - groundHeight, canvas.width, groundHeight); //fill rect para dibujar en el canvas
    };

    // creamos el objeto obstaculo
    const createObstacle = () => {
      // Asegura que la altura del obstáculo sea variada pero dentro de un rango controlado
      const obstacleHeight = 10 + Math.random() * 50; // Altura entre 20 y 50
      const obstacle = {
        x: canvas.width,
        y: canvas.height - groundHeight - obstacleHeight, // Ajustamos 'y' para que el obstáculo "salga" del suelo
        width: 70, // Ancho fijo para todos los obstáculos
        height: obstacleHeight, // Altura variada
        speed: 7, // Velocidad variada
      };
      obstacles.current.push(obstacle);
    };

    const checkCollision = (obstacle) => {
      const dinoX = 50; // Posición X del dinosaurio
      const dinoWidth = 50; // Ancho del dinosaurio

      return (
        dinoY < obstacle.y + obstacle.height &&
        dinoY + dinoHeight > obstacle.y &&
        dinoX < obstacle.x + obstacle.width &&
        dinoX + dinoWidth > obstacle.x
      );
    };

    //funcion para dibujar el obstaculo

    const drawObstacle = (obstacle) => {
      if (meteoriteImage.current.complete) {
        // Ajusta el tamaño según necesites, aquí usamos el mismo tamaño del obstáculo
        ctx.drawImage(meteoriteImage.current, obstacle.x, obstacle.y, obstacle.width, obstacle.height);
      } else {
        // En caso de que la imagen no se haya cargado aún, podrías dibujar un rectángulo o simplemente no dibujar nada.
        // Esto es opcional y depende de cómo quieras manejar la carga de imágenes.
        ctx.fillStyle = "yellow"; // Este color es un placeholder, puedes quitar estas líneas si no las necesitas.
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
          break; // Detiene el bucle si se detecta una colisión
        }
        if (obstacle.x + obstacle.width < 0) {
          obstacles.current.splice(i, 1);
          i--;
        }
      }
    };

    const updateCanvas = () => {
      if (gameStopped.current) {
        // Si el juego se ha detenido, no continúa con la animación
        return;
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      // drawSquare()
      
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
    }, 1000); // Nuevo ob
    updateCanvas();

    return () => {
      clearInterval(obstacleInterval);
      cancelAnimationFrame(animationFrameId);
    };
  }, []); // Las dependencias vacías aseguran que este efe
  const toggleNavigate = () => {
    navigate("/");
  }
  const ticNavigate = () => {
    navigate("/juegos/tictac");
  }
  const snakeNavigate = () => {
    navigate("/juegos/snake");
  }
  const inicioNavigate = () => {
    navigate("/");
  }
  return (
    <div style={{ backgroundColor: "black", }}>
    

<Modal
        isOpen={isGameCompleted}
       
        contentLabel="Game Completed Modal"
        className="custom-modal"
        overlayClassName="custom-overlay"
      >
        <h4>HAS PERDIDO</h4>
        <button className="button" onClick={ ticNavigate}>
          TICTAC
        </button>
        <button className="button" onClick={snakeNavigate}>
          SNAKE
        </button>
        <button className="button" onClick={inicioNavigate}>
          BACK
        </button>
        
  
      </Modal>

      <canvas
        ref={canvasRef}

        style={{ border: "7px solid black" }}
      />

    </div>
  )
}

export default DinosaurioGame;
