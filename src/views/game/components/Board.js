import { useState, Fragment } from 'react';
import Square from './Square';

export default function Game ({current, onClick}) {
  const [squares, setSquares] = useState(Array(9).fill(''));
  const [xIsNext, seXIsNext] = useState(false)

  console.log("onClick", onClick)

  /** 点击时间 */
  function handleClick(index) {
    console.log('clicked!', index);
    let isWin = calculateWinner(squares)
    if(squares[index] || isWin) {
      isWin && alert('获胜者是' + isWin)
      return;
    }
    const nextSquares = squares.slice();
    xIsNext ? nextSquares[index] = "X" : nextSquares[index] = "O";
    // 更新当前
    setSquares(nextSquares);
    // 记录
    onClick(nextSquares)
    // 更新玩家
    seXIsNext(!xIsNext);
  }

  /** 验证是否已经成功 */
  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }

  return (
    <Fragment>
      <div className='tab-box'>
        <div className='tab-row'>
          <Square  key={'squares0'} value={squares[0]} onSquareClick={() => handleClick(0)}></Square>
          <Square  key={'squares1'} value={squares[1]} onSquareClick={() => handleClick(1)}></Square>
          <Square  key={'squares2'} value={squares[2]} onSquareClick={() => handleClick(2)}></Square>
        </div>
        <div className='tab-row'>
          <Square  key={'squares3'} value={squares[3]} onSquareClick={() => handleClick(3)}></Square>
          <Square  key={'squares4'} value={squares[4]} onSquareClick={() => handleClick(4)}></Square>
          <Square  key={'squares5'} value={squares[5]} onSquareClick={() => handleClick(5)}></Square>
        </div>
        <div className='tab-row'>
          <Square  key={'squares6'} value={squares[6]} onSquareClick={() => handleClick(6)}></Square>
          <Square  key={'squares7'} value={squares[7]} onSquareClick={() => handleClick(7)}></Square>
          <Square  key={'squares8'} value={squares[8]} onSquareClick={() => handleClick(8)}></Square>
        </div>
      </div>
    </Fragment>
  )
}