import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import ContactMe from './components/ContactMe/ContactMe';
import Experience from './components/experience/Experience';
import WorldCloud from "./components/skillsCloud/WorldCloud";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
     
     <Projects />
     <Experience />
     <ContactMe />
     
     
    </div>
  );
}

export default App;