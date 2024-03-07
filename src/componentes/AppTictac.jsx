import { useState } from "react";
import { useNavigate } from "react-router-dom";



const TURNS = {

  x: 'x',
  o: 'y'


}
//tablero


const Square = ({ children, updateBoard, index, isSelected }) => {

  const className = `square ${isSelected ? 'is-selected' : ''} `

  const handleClick = () => {
    updateBoard(index)

  }

  return (
    <div onClick={handleClick} className={className}>

      {children}

    </div>

  )


}



function AppTictac() {

  const navigate = useNavigate()

  const toogleButton = () => {

    navigate('/')
  }


  //Etado del tablero
  const [board, setBoard] = useState(Array(9).fill(null))
  console.log(board)

  //estado para saber el turno
  const [turns, setTurns] = useState(TURNS.x)

  const [winner, setWinner] = useState(null)

  const checWiner = (boardtocheck) => {


    //revisamos todas las decisiiones ganadoras
    for (const combo of winner_combos) {

      const [a, b, c] = combo

      if (boardtocheck[a] && boardtocheck[a] === boardtocheck[b] && boardtocheck[a] === boardtocheck[c]) {


        return boardtocheck[a]
      }


    }

    return null


  }

  //funcion para resetear el juego
  const resetGame = () => {

    setBoard(Array(9).fill(null))
    setTurns(TURNS.x)
    setWinner(null)

  }

  const winner_combos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]


  ]


  const checkEndGame = (newBoard) => {


    return newBoard.every((square) => square != null)
  }
  //creamos funcin para actualiar el talbe si habido ganador de quien es el turno y se la pasamos al square

  const updateBoard = (index) => {

    if (board[index] || winner)
      return

    const newBoard = [...board]
    newBoard[index] = turns
    //actualizamos el turno
    setBoard(newBoard)


    //cambiar el turno
    const newturn = turns === TURNS.x ? TURNS.o : TURNS.x
    setTurns(newturn)

    const newWinner = checWiner(newBoard)
    if (newWinner) {

      setWinner(newWinner)

    } else if (checkEndGame(newBoard)) {

      setWinner(false)
    }

  }

  return (

    <main className="board">
      <button className="button" onClick={resetGame}>Empezar de nuevo</button>

      <h3>tictac</h3>
      <section className="game">



        {

          board.map((_, index) => {

            return (

              <Square key={index} index={index} updateBoard={updateBoard}>


                {board[index]}
              </Square>


            )





          })

        }


      </section>

      <section className='turn'>
        <Square isSelected={turns === TURNS.x}>{TURNS.x}</Square>
        <Square isSelected={turns === TURNS.o}>{TURNS.o}</Square>

      </section>
      <button className="button" onClick={toogleButton}>Meet ME</button>

      {

        winner != null && (

          <section className='winner'>
            <div className='text'>
              <h1>

                {
                  winner === false
                    ? 'empate'
                    : ' Ha ganado'

                }
              </h1>

              <header className='win'>
                {winner && <Square>{winner}</Square>}
              </header>

              <footer>
                <button className="button" onClick={resetGame}>Empezar de nuevo</button>
              </footer>
            </div>
          </section>

        )
      }


    </main>)
}

export default AppTictac;
