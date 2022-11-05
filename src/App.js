import logo from './logo.svg';
import './css/App.css';
import Typer from './Components/Typer'
import { Link, Routes, Route } from "react-router-dom";
import LandingPage from './Components/LandingPage';
import Projects from "./Components/Projects";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/projects" element={<Projects />} />
      </Routes>
    </div>
  );
}

export default App;
