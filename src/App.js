import "./index.css"
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';


function App() {
  return (
    <div className="App bg-green-800">
      <header className="App-header ">
        
        <img src={logo} className="App-logo" alt="logo" />
        <p className="text-3xl text-red-400 font-bold">
          Edit <code>src/App.js</code> and save to reload. with selahadin
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
