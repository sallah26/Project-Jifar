import "./index.css"
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Hero from "./components/Hero";
import DarkModeToggle from "./components/DarkMode";


function App() {
  return (
    <div className="app dark:bg-neutral-800">
      <Navbar />
      <div className="mt-20">
        <DarkModeToggle />
      <Hero />
      </div>
    </div>
  );
}

export default App;
