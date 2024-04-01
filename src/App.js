import './App.css';
import './fonts/font.css'
import { Container} from 'react-bootstrap';
import { AboutMe } from './components/AboutMe';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { NavigationBar } from './components/NavigationBar';
import { TitleSection } from './components/TitleSection';

function App() {


  return (
    
    <div className="app-container d-flex justify-content-center align-items-center">
    <Container fluid>
      <div className="navbar">
      <NavigationBar/>
      </div>
      <div className="title-section" id="title-section">
      <TitleSection />
      </div>
      <div className="about-me-section" id="about-me-section" >
      <AboutMe />
      </div>
      <div className="projects-section" id="projects-section">
      <Projects />
      </div>
      <div className="experience-section" id="experience-section">
      <Experience />
      </div>
    </Container>
    </div>
  );
}
  

export default App;
