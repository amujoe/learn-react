import { Fragment } from 'react'; // Fragment 占位符，用于替换 div
import Button from '../components/base/button';
import { useState } from 'react';



const list = [
  '这里是列表01',
  '这里是列表02',
  '这里是列表03',
]

let inputValue = '231'
const handleInputChange = (e) => {
  console.log('handle', e.target.value);
  inputValue = e.target.value
}

function App() {

  const [count, setCount] = useState(0);
    
  function handleClick() {
    setCount(count + 1);
  }

  return (
    <Fragment>
      <div>
        <input type="text" value={inputValue} placeholder="请输入" onChange={handleInputChange}></input>
        <button type="button">新增</button>
        <Button count={count} onClick={handleClick}></Button>
        <Button count={count} onClick={handleClick}></Button>
      </div>
      <div className="list">
        <ul>
          <li>item000</li>
          list: {list}
          {list.forEach(item => {
            <li>{item}</li>
          })}
        </ul>
      </div>
    </Fragment>
  );
}

export default App;
