import Home from "./components/home/Home";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Projects from "./components/projects/Projects";
import './App.css';

function App() {
  
  return (
    <div className="App">
      <Home />
      <About />
      <Skills />
      <Projects />
    </div>
  );
}

export default App;
