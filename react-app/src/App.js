import Container from './components/Container';
import { wpConfig } from './config/wpConfig';
import './App.css';

function App() {
  return (
    <div className="App">
      <main className='App-header' style={{backgroundColor: wpConfig.backgroundColor}}>
        <Container />
      </main>
    </div>
  );
}

export default App;
