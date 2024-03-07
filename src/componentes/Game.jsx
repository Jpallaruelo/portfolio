// import React, { useEffect, useRef } from "react";

// const game = () => {
//   //variable para el suelo
//   const canvasRef = useRef(null);

//   useEffect(() => {
//     //Creo el canvas
//     const canvas = canvasRef.current;

//     const ctx = canvas.getContext("2d"); //esto es el lienzo para pintar el vancas
//     const groundHeight = 20; //definimos la altura del suelo

//     //definimos altura yancho del  canvas

//     canvas.width = 800;
//     canvas.height = 200;

//     //funcion para dibujar el suelo

//     const drawGround = () => {
//       // Establecemos el color del suelo con fillStyle.
//       ctx.fillStyle = "green"; // Color del suelo

//       ctx.fillRect(0, canvas.height - groundHeight, canvas.width, groundHeight); //fill rect para dibujar en el canvas
//     };

//     //Section de los obstaculos

//     // Nueva sección para obstáculos
//     let obstacles = []; // Definimos

//     const obstacleWidth = 20; // Ancho de cada obstáculo
//     const obstacleHeight = 50; // Altura de cada obstáculo
//     const obstacleColor = "brown"; // Color de los obstáculos

//     //dibujamos obstaculos

//     const drawObstacles = () => {
//       ctx.fillStyle = obstacleColor; // Establece el color para los obstáculos
//       obstacles.forEach((obstacle) => {
//         ctx.fillRect(
//           obstacle.x,
//           canvas.height - groundHeight - obstacle.height,
//           obstacleWidth,
//           obstacleHeight
//         );
//       });
//     };

//     // Función para actualizar la posición de los obstáculos
//     const updateObstacles = () => {
//       // Mueve cada obstáculo hacia la izquierda
//       obstacles.forEach((obstacle) => {
//         obstacle.x -= 2; // Cambia este valor para ajustar la velocidad
//       });

//       //filtramos los objeos que se han salido del canvas
//       // Añade un nuevo obstáculo en un intervalo aleatorio

//       obstacles = obstacles.filter(
//         (obstacle) => obstacle.x + obstacleWidth > 0
//       );

//       if (Math.random() < 0.005) {
//         // Ajusta la probabilidad según necesites
//         obstacles.push({ x: canvas.width, height: obstacleHeight });
//       }
//     };
//     //dinosaurio

//     //configuracion del dinosaurio

//     // Configuraciones del dinosaurio
//     const dinoWidth = 50; // Ancho del dinosaurio
//     const dinoHeight = 30; // Altura del dinosaurio
//     let dinoY = canvas.height - groundHeight - dinoHeight; // Posición inicial en Y del dinosaurio
//     let dinoVelocity = 0; // Velocidad inicial del dinosaurio en Y

//     const jumpHeight = -20;

//     const drawDinosaur = () => {
//       ctx.fillStyle = "black"; // Color del dinosaurio
//       ctx.fillRect(50, dinoY, dinoWidth, dinoHeight); // Dibuja el dinosaurio
//     };

//     const jump = () => {
//       if (dinoY === canvas.height - groundHeight - dinoHeight) {
//         // El dinosaurio puede saltar solo si está en el suelo
//         dinoVelocity = jumpHeight; // Inicia el salto
//       }
//     };

//     // Detectar colisiones
//     const checkCollisions = () => {
//       for (let obstacle of obstacles) {
//         const obstacleRight = obstacle.x + obstacleWidth;
//         const dinoRight = 50 + dinoWidth;
//         const tolerance = 5; // Margen de tolerancia para la detección de colisiones
    
//         if (
//           dinoRight - tolerance > obstacle.x && // Ajusta para margen derecho del dino
//           50 + tolerance < obstacleRight && // Ajusta para margen izquierdo del dino
//           dinoY + dinoHeight > canvas.height - groundHeight - obstacle.height + tolerance // Ajusta para margen superior del obstáculo
//         ) {
//           // Detectada colisión
//           return true;
//         }
//       }
//       return false;
//     };
  

//     window.addEventListener("keydown", (e) => {
//       if (e.code === "Space") {
//         jump(); // Activa el salto con la barra espaciadora
//       }
//     });

//     //llamamos a las funciones para dibujar los elementos
//     const update = () => {
//       ctx.clearRect(0, 0, canvas.width, canvas.height); // Limpia el canvas
//       drawGround(); // Dibuja el suelo
//       drawObstacles(); // Dibuja los obstáculos
//       updateObstacles(); // Actualiza la posición de los obstáculos

//       //dinosaurio
//       drawDinosaur(); // Dibuja el dinosaurio

//       // Actualiza la posición Y del dinosaurio basada en la velocidad
//       dinoY += dinoVelocity;
//       if (dinoY < canvas.height - groundHeight - dinoHeight) {
//         // Si el dinosaurio está en el aire
//         dinoVelocity += 0.5; // Aplica gravedad
//       } else {
//         // Si el dinosaurio toca el suelo
//         dinoY = canvas.height - groundHeight - dinoHeight; // Restablece la posición en Y
//         dinoVelocity = 0; // Restablece la velocidad
//       }
//       //comprobamos las colisiones
//       if (checkCollisions()) {
//         console.log('Colisión detectada! Juego terminado.');
//         alert("has chocado")
//         return; // Detener juego si hay colisión
//       }

//       requestAnimationFrame(update); // Continúa el ciclo de actualización
//     };

//     // Inicia el ciclo de actualización
//     update();

//     drawGround();

//     return () => {
//       window.removeEventListener("keydown", jump); // Limpia el evento al desmontar
//     };
//   }, []);

//   return (
//     <div>
//       <canvas ref={canvasRef}></canvas>
//     </div>
//   );
// };

// export default game;
