import './App.css'
import { Button } from './components/Button'
import { List } from './components/List';
import { WrappperList } from './components/WrapperList';

function App() {
  
  return (
    <>
      <WrappperList>
        <List/>
      </WrappperList>
    </>
  );
}

export default App
