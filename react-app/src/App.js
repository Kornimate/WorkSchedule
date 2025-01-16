import Container from './components/Container';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <main>
        <Container />
      </main>
    </div>
  );
}

export default App;
