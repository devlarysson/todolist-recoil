import { RecoilRoot } from 'recoil';
import './App.css';
import { TodoList } from './components/TodoList';

const App = () => (
  <RecoilRoot>
    <TodoList />
  </RecoilRoot>
)

export default App;
