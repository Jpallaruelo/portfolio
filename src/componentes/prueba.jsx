import React, { useEffect, useRef } from 'react';

const DinosaurGame = () => {
    const canvasRef = useRef(null);

    const obstacleWidth = 20;
    const obstacleHeight = 40;
    const obstacleColor = 'lightblue';
    let obstacles = [];  // Lista para almacenar obstáculos

    const drawObstacles = () => {
        const ctx = canvasRef.current.getContext('2d');
        ctx.fillStyle = obstacleColor;

        obstacles.forEach((obstacle) => {
            ctx.fillRect(obstacle.x, obstacle.y, obstacleWidth, obstacleHeight);
        });
    };

    let lastObstacleTime = 0;
    const obstacleInterval = 2000; // Nuevo obstáculo cada 2000 ms

    const updateObstacles = (time) => {
        obstacles.forEach(obstacle => {
            obstacle.x -= 2; // Ajusta esto según la velocidad deseada
        });

        if (time - lastObstacleTime > obstacleInterval) {
            obstacles.push({
                x: canvasRef.current.width,
                y: canvasRef.current.height - obstacleHeight,
                width: obstacleWidth,
                height: obstacleHeight,
            });
            lastObstacleTime = time;
        }

        obstacles = obstacles.filter(obstacle => obstacle.x + obstacleWidth > 0);
    };

    useEffect(() => {
        const canvas = canvasRef.current;
        canvas.width = 800;
        canvas.height = 200;
        const ctx = canvas.getContext('2d');

        const dinoHeight = 30;
        let dinoY = canvas.height - dinoHeight - 20;
        let dinoVelocity = 0;

        const drawDino = () => {
            ctx.fillStyle = 'black';
            ctx.fillRect(50, dinoY, 50, dinoHeight);
        };

        const jump = () => {
            if (dinoY === canvas.height - dinoHeight - 20) {
                dinoVelocity = -10;
            }
        };

        window.addEventListener('keydown', (e) => {
            if (e.code === 'Space') {
                jump();
            }
        });

        const update = (time) => {
            dinoVelocity += 0.5;
            dinoY += dinoVelocity;

            if (dinoY > canvas.height - dinoHeight - 20) {
                dinoY = canvas.height - dinoHeight - 20;
                dinoVelocity = 0;
            }

            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.fillRect(0, canvas.height - 20, canvas.width, 20);
            drawDino();
            updateObstacles(time);
            drawObstacles();

            requestAnimationFrame((newTime) => update(newTime));
        };

        update();

        ctx.fillStyle = 'red ';
        ctx.fillRect(0, canvas.height - 20, canvas.width, 20);

        return () => {
            window.removeEventListener('keydown', jump);
        };
    }, []);

    return (
        <div>
            <canvas ref={canvasRef}></canvas>
        </div>
    );
};

export default DinosaurGame1;
