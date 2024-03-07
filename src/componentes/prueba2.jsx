import React, { useEffect, useRef, useState } from 'react';

const DinosaurioGame = () => {
  const canvasRef = useRef(null);
  const [isJumping, setIsJumping] = useState(false);
  const jumpHeight = 100; // Altura fija del salto

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    canvas.width = 800;
    canvas.height = 200;
    const groundLevel = canvas.height - 60;

    const square = {
      x: 50,
      width: 50,
      height: 50,
      color: 'black',
    };

    let jumpPeak = false; 

  })

}