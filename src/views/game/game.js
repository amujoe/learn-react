import { useState, Fragment } from 'react';
import Board from './components/Board';
import Button from '../../components/base/Button';
import './game.css'

export default function Game () {
  const [history, setHistory] = useState([]);
  const currentState = history[history.length - 1];

  /** 设置历史记录 */
  function setBoardHistory(board) {
    console.log('setBoardHistory', board);
    setHistory([...history, board]);

    console.log('history', history);
  }

  /** 回退上一步 */
  function backPrev(){
    console.log('backPrev')
  }

  return (
    /** 这里是注释 */
    <Fragment>
      <div className='tab-title'>井字旗</div>
      <div>history: {history.length}</div>
      <Board current={currentState} onClick={suare => setBoardHistory(suare)}></Board>
      <Button text="回退上一步" onClick={() => backPrev()}></Button>
    </Fragment>
  )
}