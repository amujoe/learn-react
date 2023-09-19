import { Fragment } from 'react'; // Fragment 占位符，用于替换 div
import List from './views/todoList';

function App() {
  return (
    <Fragment>
      <div className="App">
        <header className="App-header">
          头部
        </header>
      </div>

      <List></List>

      <footer>
      这里是底部标签
      </footer>
    </Fragment>
  );
}

export default App;
