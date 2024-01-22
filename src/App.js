import "./index.css"
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Hero from "./components/Hero";
import DarkModeToggle from "./components/DarkMode";
import WhatWeDoFirst from "./components/WhatWeDoFirst";
import Testimonials from "./components/Testimonials";


function App() {
  return (
    <div className="app dark:bg-neutral-800">
        <div className="hidden fixed lg:flex   top-40 py-3 px-4 rounded-r-full left-0 bg-fuchsia-600">
        <DarkModeToggle />
        </div>
      <Navbar />
      <div className="mt-20">
      <Hero />
      </div>
      <Testimonials />
      {/* <WhatWeDoFirst /> */}
    </div>
  );
}

export default App;
