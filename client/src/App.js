// import logo from "./logo.svg";
import "./App.css";
import { NavBar } from "./components/NavBar";
import { Banner } from "../src/components/Banner";
import { Skills } from "../src/components/Skills";
import { Projects } from "../src/components/Projects";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
    </div>
  );
}

export default App;
