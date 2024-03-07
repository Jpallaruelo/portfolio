import React, { useEffect, useRef } from 'react';

const ObstacleCanvas = () => {
    const canvasRef = useRef(null);
    const obstacles = useRef([]);

    const gameStopped = useRef(false);

    useEffect(() => {




        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationFrameId;

        const square = {
            x: 50, // Posición inicial X
            y: canvas.height - 60, // Posición inicial Y, ajustado a la altura del canvas
            width: 50, // Ancho
            height: 50, // Alto
            color: 'blue', // Color
        };

        const createObstacle = () => {
            const obstacle = {
                x: canvas.width,
                y: canvas.height - 20 - Math.random() * 50, // Ajusta la posición vertical del obstáculo
                width: 20,
                height: 20 + Math.random() * 30, // Ajusta la altura del obstáculo
                speed: 2 + Math.random() * 2, // Ajusta la velocidad del obstáculo
            };
            obstacles.current.push(obstacle);
        };

        const drawObstacle = (obstacle) => {
            ctx.fillStyle = 'red';
            ctx.fillRect(obstacle.x, obstacle.y, obstacle.width, obstacle.height);
        };

        const drawSquare = () => {
            ctx.fillStyle = square.color;
            ctx.fillRect(square.x, square.y, square.width, square.height);
        };


        const checkCollision = (obstacle) => {
            return (
                obstacle.x < square.x + square.width &&
                obstacle.x + obstacle.width > square.x &&
                obstacle.y < square.y + square.height &&
                obstacle.y + obstacle.height > square.y
            );
        };

        const updateObstacles = () => {
            for (let i = 0; i < obstacles.current.length; i++) {
                const obstacle = obstacles.current[i];
                obstacle.x -= obstacle.speed;

                if (checkCollision(obstacle)) {
                    gameStopped.current = true;
                    alert("detencion")
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
            createObstacle();
            updateObstacles();
            drawSquare()

            for (const obstacle of obstacles.current) {
                drawObstacle(obstacle);
            }

            animationFrameId = requestAnimationFrame(updateCanvas);
        };

        updateCanvas();

        return () => {
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return <canvas ref={canvasRef} width={800} height={200} style={{ border: '1px solid black' }} />;
};

export default ObstacleCanvas;
