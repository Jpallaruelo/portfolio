import React, { useState } from "react";
import Board from "./Board";
import '../tiactac.css'

const calculateWinner = (squares) => {
  // Arreglos de líneas ganadoras
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8], // Horizontales
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8], // Verticales
    [0, 4, 8],
    [2, 4, 6], // Diagonales
  ];

  for (const line of lines) {
    const [a, b, c] = line;

    // Verifica si hay un ganador en la línea actual
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a]; // Retorna el símbolo del ganador ('X' o 'O')
    }
  }

  return null; // Retorna null si no hay ganador en el estado actual
};

const GameTicTac = () => {
  const [history, setHistory] = useState([{ squares: Array(9).fill(null) }]);
  const [stepNumber, setStepNumber] = useState(0); //estado para controlar el turno

  const xIsNext = stepNumber % 2 === 0; //para que salga y
  const current = history[stepNumber]; //guardamos el valor actaul del jugador

  const handleClick = (i) => {
    const historyPoint = history.slice(0, stepNumber + 1); // Obtiene el historial hasta el punto actual
    const current = historyPoint[historyPoint.length - 1];
    const squaresCopy = [...current.squares];

    // Si alguien ha ganado el juego o si la casilla ya está ocupada, retorna temprano
    if (calculateWinner(squaresCopy) || squaresCopy[i]) {
      return;
    }

    // Asignamos 'X' o 'O' basado en xIsNext
    squaresCopy[i] = xIsNext ? "X" : "Y";

    // Actualizamos el estado con el nuevo historial y el nuevo estado del tablero
    // También incrementamos stepNumber y alternamos xIsNext
    setHistory((prevHistory) => [...prevHistory, { squares: squaresCopy }]);
    setStepNumber((prevStepNumber) => prevStepNumber + 1);
  };

  const winner = calculateWinner(current.squares);
  const status = winner
    ? `Winner: ${winner}`
    : `Next player: ${xIsNext ? "X" : "Y"}`;

  return (
    <div className="game">
      <h1>Bienvenido al TicTac</h1>
      <div className="game-board">
        <Board squares={current.squares} onClick={handleClick} />
      </div>
      <div className="game-info">
        <h2>{status}</h2>
      </div>
    </div>
  );
};

export default GameTicTac;
